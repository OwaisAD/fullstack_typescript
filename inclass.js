// Higher order functions
function createMultiplier(y) {
    return function (x) { return x * y; }; // anonymous function bliver returneret
}
var timesTwo = createMultiplier(2);
var timesThree = createMultiplier(3);
var timesFour = createMultiplier(4);
console.log(timesThree(5)); //returnerer 15
var numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// my map function
function ourMapFunc(cb, arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var res = cb(arr[i], i);
        newArr.push(res);
    }
    return newArr;
}
var square = ourMapFunc(function (x) { return Math.pow(x, 2); }, numbers2);
console.log(square);
// my filter function
function ourFilterFunc(cb, arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        cb(arr[i], i) && newArr.push(arr[i]);
    }
    return newArr;
}
var filterEven = ourFilterFunc(function (x) { return x % 2 == 0; }, numbers2);
console.log(filterEven);
// my reduce function
function myReduceFunc(cb, arr, initialValue) {
    var sum = initialValue;
    arr.forEach(function (element) {
        sum = cb(sum, element);
    });
    return sum;
}
var sum = myReduceFunc(function (sum, num) { return sum + num; }, numbers2, 0);
var multiply = myReduceFunc(function (sum, num) { return sum * num; }, numbers2, 1);
console.log(sum);
console.log(multiply);
