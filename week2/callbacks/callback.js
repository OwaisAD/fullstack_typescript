var calculate = function (x, y, operation) {
    return operation(x, y);
};
var add = function (x, y) {
    return x + y;
};
var sub = function (x, y) {
    return x - y;
};
var mul = function (x, y) {
    return x * y;
};
var div = function (x, y) {
    return x / y;
};
var resAdd = calculate(10, 5, add);
console.log(resAdd);
var resSub = calculate(10, 5, sub);
console.log(resSub);
var resMul = calculate(10, 5, mul);
console.log(resMul);
var resDiv = calculate(10, 5, div);
console.log(resDiv);
