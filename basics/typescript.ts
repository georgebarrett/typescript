function adding(number1: number, number2: number, showResult: boolean, phrase: string) {
    // console.log(typeof number1);
    // return number1 + number2;

    const result = number1 + number2
    if (showResult) {
        // can't concatonate strings before numbers. they all become strings. can with variables
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.8;
const printAddResult = true;
const resultPhrase = 'result is: '


adding(number1, number2, printAddResult, resultPhrase);
// this console log is not necessary due to the if-statement
// console.log(result);

// if a variable has not been defined it is good practice to tell typescript the data type that it will store
let number: number;