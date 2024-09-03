function add(number1: number, number2: number) {
    return number1 + number2;
}

function printResult(number: number): void {
    // no return so typescript type is void
    console.log('the result is: ' + number);
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