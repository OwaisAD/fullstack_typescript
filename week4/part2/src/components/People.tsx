import React, { useEffect, useState } from "react";
import axios from "axios";

type Person = {
  name: string;
  age: number;
  occupation: string;
};

const People = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [displayPeople, setDisplayPeople] = useState(false);

  const getData = async () => {
    const res = await axios.get("http://localhost:3001/people");
    setPeople(res.data);
  };

  // with axios on server
  //   const removeLast = async () => {
  //     if (!people.length) return;
  //     const res = await axios.delete(`http://localhost:3001/people/${people.length}`);
  //     setPeople(res.data);
  //   };
  const removeLast = async () => {
    if (!people.length) return;
    const newPeople = [...people];
    newPeople.pop();
    setPeople(newPeople);
  };

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newOccupation, setNewOccupation] = useState("");

  const handleAddNewPerson = async () => {
    if (!newName || !newAge || !newOccupation) {
      alert("Please fill out all fields to add a person");
      return;
    } else {
      console.log("gucci");
      const res = await axios.post(`http://localhost:3001/people`, {
        name: newName,
        age: newAge,
        occupation: newOccupation,
      });
      getData();
      setNewName("");
      setNewAge("");
      setNewOccupation("");
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          getData();
          setDisplayPeople(!displayPeople);
        }}
      >
        Load list of people
      </button>

      {displayPeople && people.length > 0 && (
        <>
          {people?.map((person: Person, index: number) => (
            <p key={index}>
              Name: {person.name}, age: {person.age}, occupation: {person.occupation}
            </p>
          ))}
        </>
      )}

      <div>
        <label htmlFor="name">name:</label>
        <input type="text" id="name" value={newName} onChange={(e) => setNewName(e.target.value)} />
        <label htmlFor="age">age:</label>
        <input
          type="number"
          id="age"
          min={0}
          value={newAge}
          onChange={(e) => setNewAge(e.target.value)}
        />
        <label htmlFor="">occupation:</label>
        <input
          type="text"
          value={newOccupation}
          onChange={(e) => setNewOccupation(e.target.value)}
        />
        <button onClick={handleAddNewPerson}>Add person</button> <br /> <br />
        <button onClick={removeLast}>Remove last person</button> <br /> <br />
        <button>Sort by age</button>
      </div>
    </div>
  );
};

export default People;
