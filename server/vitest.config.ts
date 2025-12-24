import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		environment: "node",
		setupFiles: ["./tests/setup.ts"],
		include: ["tests/**/*.test.ts"],
		coverage: {
			enabled: true,
			provider: "v8",
			reporter: ["text", "json", "html"],
			include: ["src/**/*.ts"],
			exclude: ["tests/**", "vitest.config.ts"],
			clean: true,
			cleanOnRerun: true,
		},
	},
});
