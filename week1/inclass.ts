
// Higher order functions
function createMultiplier(y: number) {
    return (x: number) => x * y; // anonymous function bliver returneret
}

const timesTwo = createMultiplier(2)
const timesThree = createMultiplier(3)
const timesFour = createMultiplier(4)

console.log(timesThree(5)) //returnerer 15

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// my map function
function ourMapFunc(cb: CallableFunction, arr: Array<any>) {
    const newArr: any = []
    for (let i = 0; i < arr.length; i++) {
        const res = cb(arr[i], i)
        newArr.push(res)
    }
    return newArr
}

const square = ourMapFunc(x => x ** 2, numbers2)
console.log(square)


// my filter function
function ourFilterFunc(cb: CallableFunction, arr: Array<any>) {
    const newArr: any = []
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i) && newArr.push(arr[i])

    }
    return newArr
}

const filterEven = ourFilterFunc(x => x % 2 == 0, numbers2)
console.log(filterEven)


// my reduce function
function myReduceFunc(cb: CallableFunction, arr: Array<any>, initialValue: number) {
    let sum = initialValue
    arr.forEach(element => {
        sum = cb(sum, element)
    });
    return sum
}

const sum = myReduceFunc((sum: number, num: number) => sum + num, numbers2, 0)
const multiply2 = myReduceFunc((sum: number, num: number) => sum * num, numbers2, 1)

console.log(sum);
console.log(multiply2);


