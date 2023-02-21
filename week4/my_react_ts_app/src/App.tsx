import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <h1>Hello, here's a person</h1>
      <Person name={"Owais"} age={24} email={"..."} />
    </div>
  );
}

export default App;
