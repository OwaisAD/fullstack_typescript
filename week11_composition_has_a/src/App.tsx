import Header from "./components/Header";
import Row from "./components/Row";
import Table from "./components/Table";

function App() {
  type Person = {
    id: number;
    name: string;
    age: number;
  };

  let people: Person[] = [
    { id: 1, name: "Helle", age: 20 },
    { id: 2, name: "Ib", age: 30 },
    { id: 3, name: "Bodil", age: 40 },
    { id: 4, name: "Yasmin", age: 32 },
  ];

  const headers: string[] = ["ID", "Name", "Age"];

  return (
    <div className="App">
      <Table
        headers={<Header columns={headers} />}
        rows={people.map((person, idx) => (
          <Row key={idx} row={[person.id, person.name, person.age]} />
        ))}
      />
    </div>
  );
}

export default App;
