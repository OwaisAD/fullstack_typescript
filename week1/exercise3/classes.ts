class Employee {
    name: string;
    salary: number;
    hireDate: Date;

    constructor(name: string, salary: number, hireDate: Date) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }

    toString(): string {
        return `Employee: ${this.name}, Salary: ${this.salary}, Hire Date: ${this.hireDate}. `
    }
}

class Manager extends Employee {
    jobTitle: string;
    descriptionOfJob: string;
    employeesManaged: number;

    constructor(name: string, salary: number, hireDate: Date, jobTitle: string, descriptionOfJob: string, employeesManaged: number) {
        super(name, salary, hireDate);
        this.jobTitle = jobTitle;
        this.descriptionOfJob = descriptionOfJob;
        this.employeesManaged = employeesManaged;
    }

    toString = (): string => {
        return super.toString() + `Job Title: ${this.jobTitle}, Description of Job: ${this.descriptionOfJob}, Employees Managed: ${this.employeesManaged}. `
    }
}

class Department {
    departmentName: string;
    employees: Employee[];

    constructor(departmentName: string, employees: Employee[]) {
        this.departmentName = departmentName;
        this.employees = employees;
    }

    toString = (): string => {
        return `Department Name: ${this.departmentName}, Employees: ${this.employees}. `
    }
}

class Contract {
    constructor(name: string, salary: number, hireDate: Date, jobTitle: string, descriptionOfJob: string, employeesManaged: number, departmentName: string, employees: Employee[]) {
        Employee.call(name, salary, hireDate);
        Manager.call(jobTitle, descriptionOfJob, employees.length);
        Department.call(departmentName, employees);
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const employee = new Employee("Steve Taylor", 50000, new Date("01/01/2015"));

for (let num in numbers) {
    console.log(num);
}

for (const prop in employee) {
    console.log(`obj.${prop} = ${employee[prop]}`);
}

// db,dd
// const calcaulator = (num1: number, num2 = 2) => num1 + num2;
const calcaulator = (...numbers: number[]) => {
    let result = 0;
    for (let number of numbers) {
        result += number
    }
    return result
}

console.log("CALC: ", calcaulator(1, 2, 3, 4, 5, 6, 7, 8))

// e
const manager = new Manager("Bossman", 50_000, new Date(), "Manager", "Manager of the Sales Department", ["Steve", "Marc"].length);

const { jobTitle, descriptionOfJob } = manager;
console.log(jobTitle);
console.log(descriptionOfJob);

