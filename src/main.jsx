import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./fontawesome-free-6.4.0-web/css/all.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "react-loading-skeleton/dist/skeleton.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme accentColor="red">
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
