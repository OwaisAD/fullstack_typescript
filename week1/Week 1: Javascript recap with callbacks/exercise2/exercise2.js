// Class exercise 2
function add(x, y) {
    return x + y;
}
function multiply(x, y) {
    return x * y;
}
var subtract = function (x, y) {
    return x - y;
};
function operateOnNumbers(operator, x, y) {
    return operator(x, y);
}
console.log(operateOnNumbers(add, 3, 4)); // 7
console.log(operateOnNumbers(multiply, 3, 4)); // 12
console.log(operateOnNumbers(subtract, 10, 5));
// 3
var powerOf2 = function (arr) { return arr.map(function (el) { return Math.pow(el, 2); }); };
var divideBy10 = function (arr) { return arr.map(function (el) { return el / 10; }); };
var runTwoFunctionsOnArray = function (firstFunc, secondFunc, arr) { return secondFunc(firstFunc(arr)); };
console.log(runTwoFunctionsOnArray(powerOf2, divideBy10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//   console.log("Hello you");
// setTimeout(() => {
//   console.log("Hello again");
// }, 1000);
//
