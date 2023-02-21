import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import data from "./assets/data";
import People from "./components/People";

function App() {
  return (
    <div className="App">
      <People />
    </div>
  );
}

export default App;
