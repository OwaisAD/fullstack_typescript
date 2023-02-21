import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

let person = {
  name: "Owais",
  age: 24,
  email: "...",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App person={person} />
  </React.StrictMode>
);
