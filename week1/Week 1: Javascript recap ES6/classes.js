var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, salary, hireDate) {
        this.name = name;
        this.salary = salary;
        this.hireDate = hireDate;
    }
    Employee.prototype.toString = function () {
        return "Employee: ".concat(this.name, ", Salary: ").concat(this.salary, ", Hire Date: ").concat(this.hireDate, ". ");
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged) {
        var _this = _super.call(this, name, salary, hireDate) || this;
        _this.toString = function () {
            return _super.prototype.toString.call(_this) + "Job Title: ".concat(_this.jobTitle, ", Description of Job: ").concat(_this.descriptionOfJob, ", Employees Managed: ").concat(_this.employeesManaged, ". ");
        };
        _this.jobTitle = jobTitle;
        _this.descriptionOfJob = descriptionOfJob;
        _this.employeesManaged = employeesManaged;
        return _this;
    }
    return Manager;
}(Employee));
var Department = /** @class */ (function () {
    function Department(departmentName, employees) {
        var _this = this;
        this.toString = function () {
            return "Department Name: ".concat(_this.departmentName, ", Employees: ").concat(_this.employees, ". ");
        };
        this.departmentName = departmentName;
        this.employees = employees;
    }
    return Department;
}());
var Contract = /** @class */ (function () {
    function Contract(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged, departmentName, employees) {
        Employee.call(name, salary, hireDate);
        Manager.call(jobTitle, descriptionOfJob, employees.length);
        Department.call(departmentName, employees);
    }
    return Contract;
}());
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let num in numbers) {
//     console.log(num);
// }
var employee = new Employee("Steve Taylor", 50000, new Date("01/01/2015"));
for (var prop in employee) {
    console.log("obj.".concat(prop, " = ").concat(employee[prop]));
}
console.log("toString: ", employee.toString());
// db,dd
// const calcaulator = (num1: number, num2 = 2) => num1 + num2;
var calcaulator = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var number = numbers_1[_a];
        result += number;
    }
    return result;
};
console.log("CALC: ", calcaulator(1, 2, 3, 4, 5, 6, 7, 8));
// e
var manager = new Manager("Bossman", 50000, new Date(), "Manager", "Manager of the Sales Department", ["Steve", "Marc"].length);
var jobTitle = manager.jobTitle, descriptionOfJob = manager.descriptionOfJob;
console.log(jobTitle);
console.log(descriptionOfJob);
