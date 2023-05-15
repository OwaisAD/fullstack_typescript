import { Request, Response, Router } from "express";
import { readFileSync, write, writeFileSync } from "fs";

export const peopleRouter = Router();

interface Person {
  id: string;
  name: string;
  age: number;
  city: string;
}

const getPeople = (): Person[] => {
  const data = readFileSync("./people.json", "utf8");
  console.log(data)
  const parsedData = JSON.parse(data);
  return parsedData.people as Person[];
};

peopleRouter.get("/", (req: Request, res: Response) => {
  const people = getPeople();
  console.log(people)
  res.status(200).json(people);
});

peopleRouter.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const people = getPeople();
  const person = people.find((person) => person.id === id);
  if (person) {
    res.status(200).json(person);
  } else {
    res.status(404).send("Person not found");
  }
});

peopleRouter.post("/", (req: Request, res: Response) => {
  const person = req.body;
  const people = getPeople();
  person.id = crypto.randomUUID();
  people.push(person);
  writeFileSync("../../people.json", JSON.stringify(people));
  res.status(201).json(person);
});

peopleRouter.put("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const people = getPeople();
  const personIndex = people.findIndex((person) => person.id === id);
  if (personIndex === -1) {
    res.status(404).send("Person not found");
  }
  const updatedPerson: Person = {
    id,
    name: req.body.name,
    age: req.body.age,
    city: req.body.city,
  };

  people[personIndex] = updatedPerson;
  writeFileSync("../../people.json", JSON.stringify(people));
  res.status(200).json(people);
});

peopleRouter.patch("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const people = getPeople();
  const personIndex = people.findIndex((person) => person.id === id);
  if (personIndex === -1) {
    res.status(404).send("Person not found");
  }
  const updatedPerson: Person = {
    id,
    name: req.body.name,
    age: req.body.age,
    city: req.body.city,
  };

  people[personIndex] = { ...people[personIndex], ...updatedData };
  writeFileSync("../../people.json", JSON.stringify(people));
  res.status(200).json(people[personIndex]);
});

peopleRouter.delete("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const people = getPeople();
  const personIndex = people.findIndex((person) => person.id === id);
  if (personIndex === -1) {
    res.status(404).send("Person not found");
  }

  console.log(personIndex);

  people.splice(personIndex, 1);
  res.status(200).json(people);
});
