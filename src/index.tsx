import { render } from "react-dom";
// import React from "react";
import App from "./app/App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/provider/ThemeProvider";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
import "shared/confid/i18n/i18n";

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

// render(<App />, document.getElementById("root"));
