import { render } from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

// render(<App />, document.getElementById("root"));
