import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter를 import 합니다.
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter> {/* App 컴포넌트를 BrowserRouter로 감싸줍니다. */}
    <App />
  </BrowserRouter>
);
