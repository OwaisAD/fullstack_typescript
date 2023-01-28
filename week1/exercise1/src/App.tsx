import "./App.css";

function App() {
  // Class exercise 1

  // function processUserInput(callback: any) {
  //   var name = prompt("Please enter your name: ");
  //   callback(name);
  // }

  // // 2
  // const greetingToUppercase = (name: string): void => console.log(`Hello ${name.toUpperCase()}`);

  // processUserInput(greetingToUppercase);

  // // 3
  // const lengthOfName = (name: string): void =>
  //   console.log(`Length of name ${name} is ${name.length}`);

  // processUserInput(lengthOfName);

  // Class exercise 2
  function add(x: number, y: number) {
    return x + y;
  }

  function multiply(x: number, y: number) {
    return x * y;
  }

  const subtract = (x: number, y: number) => {
    return x - y;
  };

  function operateOnNumbers(operator: CallableFunction, x: number, y: number) {
    return operator(x, y);
  }

  console.log(operateOnNumbers(add, 3, 4)); // 7
  console.log(operateOnNumbers(multiply, 3, 4)); // 12
  console.log(operateOnNumbers(subtract, 10, 5));

  // 3
  const powerOf2 = (arr: Array<number>) => arr.map((el) => el ** 2);

  const divideBy10 = (arr: Array<number>) => arr.map((el) => el / 10);

  const runTwoFunctionsOnArray = (
    firstFunc: CallableFunction,
    secondFunc: CallableFunction,
    arr: Array<number>
  ) => secondFunc(firstFunc(arr));

  console.log(runTwoFunctionsOnArray(powerOf2, divideBy10, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

  //   console.log("Hello you");
  // setTimeout(() => {
  //   console.log("Hello again");
  // }, 1000);

  //

  return (
    <div className="App">
      <h1>Check the console for week 1 exercises</h1>
    </div>
  );
}

export default App;
