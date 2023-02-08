"use strict";
let job = "Red Mage";
let level = 75;
let isExpansionJob = false;
let jobAbilities = ["Chainspell", "Convert"];
jobAbilities.push("Composure");
jobAbilities.push(2);
jobAbilities[0] = 2;
function throwError(message) {
    throw new Error(message);
}
let myObject = { name: "John" };
let myArray1 = [1, 2, 3];
let myArray2 = [1, 2, 3];
let myTuple = ["Hello", 10];
var Color;
(function (Color) {
    Color[Color["RED"] = 1] = "RED";
    Color[Color["GREEN"] = 2] = "GREEN";
    Color[Color["BLUE"] = 3] = "BLUE";
})(Color || (Color = {}));
let myColor = Color.RED;
let myUnion = 10;
myUnion = "Hello";
let myType = "Hello";
myType = 10;
let myInterface = { name: "Owais", age: 24 };
class Job {
    constructor(name, level, isExpansion) {
        this.name = name;
        this.level = level;
        this.isExpansion = isExpansion;
    }
    getlevel() {
        return this.level;
    }
}
const doctor = new Job("Doctor", 50, true);
console.log(doctor.name);
console.log(doctor.isExpansion);
doctor.name = "Dr. M";
let myVariable = "Hello";
let myString = myVariable;
function isString(value) {
    return typeof value === "string";
}
function log(value) {
    if (isString(value)) {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value);
    }
}
const form = document.querySelector("form");
const form2 = document.querySelector("form");
form2 === null || form2 === void 0 ? void 0 : form2.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
});
const otherForm = document.getElementById("myFancyForm");
otherForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
});
//# sourceMappingURL=index.js.map