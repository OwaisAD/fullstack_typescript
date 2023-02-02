const calculate = (x: number, y: number, operation: CallableFunction) => {
    return operation(x, y)
}

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
    return x / y;
}



const resAdd = calculate(10, 5, add)
console.log(resAdd); 
const resSub = calculate(10, 5, sub)
console.log(resSub); 
const resMul = calculate(10, 5, mul)
console.log(resMul); 
const resDiv = calculate(10, 5, div)
console.log(resDiv); 
