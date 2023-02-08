let job = "Red Mage";
let level = 75;
let isExpansionJob = false;
let jobAbilities: (string | number)[] = ["Chainspell", "Convert"];

// The | character is for doing a union of different types.

jobAbilities.push("Composure"); // OK
jobAbilities.push(2);
jobAbilities[0] = 2;

// funktioner som aldrig returnerer en værdi
function throwError(message: string): never {
  throw new Error(message);
}

// function log(message: string): void {
//   console.log(message);
// }

let myObject: object = { name: "John" };

let myArray1: number[] = [1, 2, 3];
let myArray2: Array<number> = [1, 2, 3];

// tuple
// This is an array-like type, which cares about where the types are placed.
let myTuple: [string, number] = ["Hello", 10];

// The enum type
enum Color {
  RED = 1,
  GREEN,
  BLUE,
}
let myColor: Color = Color.RED;

// The union type
let myUnion: string | number = 10;
myUnion = "Hello";

// The type type
type MyType = string | number;
let myType: MyType = "Hello";
myType = 10;

// The interface type
/*When to choose it over the type type`?

If you write object-oriented code, use interfaces.
If you write functional code, use type aliases.
Use interfaces for public API libraries and types for components, state, JSX, etc.*/

interface MyInterface {
  name: string;
  age: number;
}

let myInterface: MyInterface = { name: "Owais", age: 24 };

// Class type
class Job {
  public name: string;
  private level: number;
  readonly isExpansion: boolean;

  constructor(name: string, level: number, isExpansion: boolean) {
    this.name = name;
    this.level = level;
    this.isExpansion = isExpansion;
  }

  public getlevel(): number {
    return this.level;
  }
}

const doctor = new Job("Doctor", 50, true);
console.log(doctor.name);
// console.log(whiteMage.level); // error since private
console.log(doctor.isExpansion);

doctor.name = "Dr. M";
// doctor.level = 50; // error since private
// doctor.isExpansion = false; // error since readonly

// The type assertion type
let myVariable: any = "Hello";
let myString: string = myVariable as string;

// The type guard type
function isString(value: any): value is string {
  return typeof value === "string";
}

function log(value: any) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  } else {
    console.log(value);
  }
}

// The exclamations mark (!) in TypeScript
// HTMLFormElement
const form = document.querySelector("form")!;
// With ! you tell TS not to worry, it will find it, and it can't be null.

// The question mark (?) in TypeScript

const form2 = document.querySelector("form");

form2?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(e);
});
// The questionmark means: Do it only if it is not null:

//Type casting in TypeScript

const otherForm = document.getElementById("myFancyForm") as HTMLFormElement;

otherForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(e);
});
// Above is typecasting to tell TS that it is a HTMLFormElement and not null.
