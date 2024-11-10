// 'numbers' is just a placeholder. it is a spread operator to allow a flexible amount of arguments
// the spread operator does need to be told what to expect
const addingAgain = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0)
};

const addedNumbers = addingAgain(1, 2, 3, 4, 5, 6, 7);
console.log(addedNumbers);