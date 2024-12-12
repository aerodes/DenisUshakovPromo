import ReactDOM from "react-dom/client";
import Template from "./pages";
import "./style.scss";


const root = document.getElementById("root");

document.addEventListener("DOMContentLoaded", function () {
  if (root) ReactDOM.createRoot(root).render(
    <Template />
  );
});
