import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Get the root element
const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element not found"); // safe fallback
}

// Render the app
createRoot(rootElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
