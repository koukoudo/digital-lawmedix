import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { ComingSoon } from "./pages/ComingSoon";

// NOTE: The site is temporarily showing a "Coming Soon" landing page while
// under reconstruction. The original routes below are preserved (commented
// out) so they can be re-enabled once the rebuild is complete.
//
// Original routes:
//   <Route path="/" element={<App />} />
//   <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//
// Imports for `App` and `PrivacyPolicy` are intentionally kept so nothing
// else in the codebase is affected.
void App;
void PrivacyPolicy;

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
