function add(number1: number, number2: number) {
    return number1 + number2;
}

// use of default arguments
// when i call the function i will only need to give it one argument becasue the other has a default
// function add(number1: number, number2: number = 5) {
//     return number1 + number2;
// }

function printResult(number: number): void {
    // no return so typescript type is void
    console.log('the result is: ' + number);
}

// a callback argument allows flexibility as the return value can be manipulated
function addAndHandle(number1: number, number2: number, cb: (a: number) => void) {
    const result = number1 + number2;
    cb(result);
}

// add is responsible for the logic. printResult is responsible for printing to the console
printResult(add(6, 6));

// whatever is stored in the variable must be a function
// the problem is different functions can be stored, which take different arguments
// let combinedValues: Function;

// combined values stores a function that takes two number arguments and returns a number
let combinedValues: (a: number, b: number) => number;

combinedValues = add;

console.log(combinedValues(8, 8));

// typescript knows 'result' will be a number because it is inferred in the function definiton
addAndHandle(2, 3, (result) => {
    console.log(`the result is ${result}`);
});