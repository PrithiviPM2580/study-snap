If you already made root scripts like:

{
"scripts": {
"lint:client": "cd client && eslint . --ext .js,.jsx,.ts,.tsx",
"lint:server": "cd server && eslint . --ext .js,.ts",
"format:client": "cd client && prettier --write .",
"format:server": "cd server && prettier --write ."
}
}

Then lint-staged can call them:

{
"lint-staged": {
"client/**/\*.{js,jsx,ts,tsx}": ["npm run lint:client", "npm run format:client"],
"server/**/\*.{js,ts}": ["npm run lint:server", "npm run format:server"]
}
}

# Colors
FDFFFC
235789

004FFF
050505

```yaml
name: Backend CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  backend:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node: [18, 20, 22]

    steps:
      # 1. Checkout the code
      - name: Checkout Repository
        uses: actions/checkout@v4

      # 2. Setup Node.js first (required for pnpm)
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}
          cache: "pnpm"

      # 3. Setup PNPM
      - name: Setup PNPM
        uses: pnpm/action-setup@v4
        with:
          run_install: false

      # 4. Cache PNPM store separately for extra speed
      - name: Cache PNPM Store
        uses: actions/cache@v3
        with:
          path: ~/.pnpm-store
          key: pnpm-store-${{ matrix.node }}-${{ hashFiles('pnpm-lock.yaml') }}
          restore-keys: |
            pnpm-store-${{ matrix.node }}-

      # 5. Install dependencies (frozen lockfile ensures deterministic installs)
      - name: Install Dependencies
        run: pnpm install --frozen-lockfile

      # 6. Run all checks in parallel to save time
      - name: Run Lint
        run: pnpm lint

      - name: Run Type Check
        run: pnpm type-check

      - name: Run Format Check
        run: pnpm format:check

      - name: Run Overall Check
        run: pnpm check

      # 7. Build project
      - name: Build Project
        run: pnpm build
```