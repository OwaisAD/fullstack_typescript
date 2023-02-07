// b
var calculate = function (x, y, operation) {
    return new Promise(function (resolve, reject) {
        try {
            var res = operation(x, y);
            resolve(res);
        }
        catch (e) {
            reject(e);
        }
    });
};
// c
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
    if (x == 0 || y == 0)
        throw new Error("Can't divide with 0");
    return x / y;
};
var resAdd = calculate(10, 5, add);
// console.log(resAdd);
var resSub = calculate(10, 5, sub);
// console.log(resSub);
var resMul = calculate(10, 5, mul);
// console.log(resMul);
var resDiv = calculate(10, 5, div);
// console.log(resDiv);
// d
// jeg forsøgte at chaine....??
calculate(10, 5, add).then(function (res) {
    console.log(res);
    calculate(10, 5, sub).then(function (res) {
        console.log(res);
        calculate(10, 5, div).then(function (res) {
            console.log(res);
            calculate(10, 5, mul).then(function (res) {
                console.log(res);
            });
        });
    });
});
