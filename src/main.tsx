// main.tsx
import React from 'react'; // Don't forget to import React if you're using JSX in this file
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import './i18n/config';

// --- Start of GitHub Pages SPA redirect fix ---
// This logic needs to run BEFORE React renders your app,
// so the BrowserRouter picks up the correct initial path.
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  // Replace the current history entry with the intended URL
  // This ensures the React Router sees the intended path (e.g., /products/123)
  history.replaceState(null, '', redirect);
}
// --- End of GitHub Pages SPA redirect fix ---

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/"> {/* Set basename to '/' for custom domains */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);