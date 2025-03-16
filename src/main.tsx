import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n";
import { BackgroundProvider } from "./context/BackgroundContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { HeadProvider } from "react-head";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeadProvider>
      <I18nextProvider i18n={i18n}>
        <BackgroundProvider>
          <App />
        </BackgroundProvider>
      </I18nextProvider>
    </HeadProvider>
  </StrictMode>
);
