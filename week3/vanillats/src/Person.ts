class Person {
  private name: string;
  private age: number;
  private occupation: string;
  private salary: number;

  constructor(name: string, age: number, occupation: string) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.salary = 0;
  }

  public introduce(): string {
    return `Hello, my name is ${this.name}, I am ${this.age}, and I am a ${this.occupation}. I earn ${this.salary}$.`;
  }

  public incrementAge(): void {
    this.age += 1;
  }

  public setSalary(salary: number) {
    this.salary = salary;
  }

  public getSalary(): number {
    return this.salary;
  }

  public getAge(): number {
    return this.age;
  }
}

const john = new Person("John Smith", 30, "software developer");
console.log(john.introduce()); // "Hello, my name is John Smith and I am a software developer. I earn 0$"
console.log(john.getAge()); // 30
john.incrementAge();
console.log(john.getAge()); // 31
john.setSalary(100000);
console.log(john.getSalary()); //100000
console.log(john.introduce()); // "Hello, my name is John Smith and I am a software developer. I earn 100000$"

// class exercise 2
function populator(): Array<Person> {
  let mylist: Array<Person> = [];
  for (let i = 0; i < 10; i++) {
    mylist.push(
      new Person(`Person ${i + 1}`, Math.floor(Math.random() * 60), `Occupation ${i + 1}`)
    );
  }
  return mylist;
}

console.log(populator());

export function toHTMLtable(personlist: Array<Person>): string {
  let table = `<table>
  <thead>
    <tr>
      <th>Person</th>
    </tr>
  </thead>
  <tbody>
`;
  personlist.map((person) => {
    table += `    <tr>
    <th>${person.introduce()}</th>
  </tr>`;
  });
  table += `</tbody>
  </table>`;
  return table;
}

export function setupTable(container: HTMLDivElement) {
  // generate 10 persons and append to html
  let people = populator();
  let table = toHTMLtable(people);

  const myButton = document.createElement("button");
  myButton.innerHTML = "sort by age";

  myButton.onclick = function () {
    people = people.sort((a, b) => a.getAge() - b.getAge());
    table = toHTMLtable(people);
    container.innerHTML = table;
    container.appendChild(myButton);
  };

  container.innerHTML = table;
  container.appendChild(myButton);
}

export {};
// https://stackoverflow.com/questions/56577201/why-is-isolatedmodules-error-fixed-by-any-import
