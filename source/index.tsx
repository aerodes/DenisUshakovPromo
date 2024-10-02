import ReactDOM, { Container } from "react-dom/client";
import Template from "./pages";
import "./style.scss";

document.addEventListener("DOMContentLoaded", function () {
  return ReactDOM.createRoot(document.getElementById("root") as Element).render(
    <Template />
  );
});
