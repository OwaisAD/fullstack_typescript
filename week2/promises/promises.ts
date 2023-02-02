// b
const calculate = (x: number, y: number, operation: CallableFunction) => {
    return new Promise((resolve, reject) => {
        try {
            const res = operation(x, y)
            resolve(res)
        } catch (e) {
            reject(e)
        }
    })
}

// c
const add = (x: number, y: number) => {
    return x + y;
}

const sub = (x: number, y: number) => {
    return x - y;
}

const mul = (x: number, y: number) => {
    return x * y;
}

const div = (x: number, y: number) => {
    if (x == 0 || y == 0) throw new Error("Can't divide with 0")
    return x / y;
}

const resAdd = calculate(10, 5, add)
// console.log(resAdd);
const resSub = calculate(10, 5, sub)
// console.log(resSub);
const resMul = calculate(10, 5, mul)
// console.log(resMul);
const resDiv = calculate(10, 5, div)
// console.log(resDiv);


// d
// jeg forsøgte at chaine....??
calculate(10, 5, add).then(res => calculate(10, 5, sub)).then(res => calculate(10, 5, mul)).then(res => calculate(10, 5, div))