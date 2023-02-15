import { Person } from "./Person";

export function renderPeopleList(container: HTMLDivElement, peopleList: Array<Person>) {
  peopleList.forEach((person) => {
    const personbox = document.createElement("div");

    // person name
    const myheader = document.createElement("h2");
    myheader.classList.add("person_name");
    myheader.innerHTML = `Name: ${person.getName()}`;

    // person occupation
    const occupation = document.createElement("p");
    occupation.classList.add("person_occupation");
    occupation.innerHTML = `Occupation: ${person.getOccupation()}`;

    // person age
    const age = document.createElement("p");
    age.classList.add("person_age");
    age.innerHTML = `Age: ${person.getAge().toString()}`;

    // person salary
    const salary = document.createElement("p");
    salary.classList.add("person_salary");
    salary.innerHTML = `Salary: ${person.getSalary().toString()} $`;

    // add all elements to personbox
    personbox.appendChild(myheader);
    personbox.appendChild(occupation);
    personbox.appendChild(age);
    personbox.appendChild(salary);

    // append to container
    container.appendChild(personbox);
  });
}
