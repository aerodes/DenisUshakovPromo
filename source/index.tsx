import ReactDOM from "react-dom/client";
import Template from "./pages";
import "./style.scss";

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <Template />
  );
});
