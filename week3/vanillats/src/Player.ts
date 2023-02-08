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
    return `Hello, my name is ${this.name} and I am a ${this.occupation}. I earn ${this.salary}$.`;
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

export {};
// https://stackoverflow.com/questions/56577201/why-is-isolatedmodules-error-fixed-by-any-import
