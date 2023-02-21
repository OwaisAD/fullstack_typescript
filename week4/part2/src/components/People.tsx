import React, { useEffect, useState } from "react";
import axios from "axios";

type Person = {
  id: number;
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

  const sortByAgeAsc = () => {
    if (!people.length) return;
    const newPeople = [...people];
    const sortedByAge = newPeople.sort((firstEl, secEl) => firstEl.age - secEl.age);
    setPeople(newPeople);
  };

  const sortByAgeDesc = () => {
    if (!people.length) return;
    const newPeople = [...people];
    const sortedByAge = newPeople.sort((firstEl, secEl) => secEl.age - firstEl.age);
    setPeople(newPeople);
  };

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newOccupation, setNewOccupation] = useState("");

  const [updatedName, setUpdatedName] = useState("");
  const [updatedAge, setUpdatedAge] = useState("");
  const [updatedOccupation, setUpdatedOccupation] = useState("");
  const [updatedId, setUpdatedId] = useState("");

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

  const handleUpdatePerson = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!updatedId || !updatedName || !updatedAge || !updatedOccupation) {
      alert("Please fill out all fields to update a person");
      return;
    } else {
      console.log("gucci");
      console.log("updated id ", updatedId);
      console.log("updated name ", updatedName);
      console.log("updated age ", updatedAge);
      console.log("updated occupation ", updatedOccupation);

      const res = await axios.put(`http://localhost:3001/people/${updatedId}`, {
        name: updatedName,
        age: updatedAge,
        occupation: updatedOccupation,
      });
      getData();
      setUpdatedName("");
      setUpdatedAge("");
      setUpdatedOccupation("");
      setUpdatedId("");
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
        <button onClick={sortByAgeAsc}>Sort by age asc</button>
        <button onClick={sortByAgeDesc}>Sort by age desc</button>
        <p>Update person</p>
        <form onSubmit={(e) => handleUpdatePerson(e)}>
          <select onChange={(e) => setUpdatedId(e.target.value)}>
            <option value="" selected disabled>Select a value</option>
            {people.map((person) => (
              <option value={person.id}>
                {person.name} (id: {person.id})
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="name"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
          <input
            type="text"
            placeholder="age"
            value={updatedAge}
            onChange={(e) => setUpdatedAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="occupation"
            value={updatedOccupation}
            onChange={(e) => setUpdatedOccupation(e.target.value)}
          />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default People;
