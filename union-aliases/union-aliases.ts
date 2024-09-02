function add(number1: number, number2: number) {
    return number1 + number2;
}

function printResult(number: number): void {
    // no return so typescript type is void
    console.log('the result is:' + number);
}

// add is responsible for the logic. printResult is responsible for printing to the console
printResult(add(6, 6));