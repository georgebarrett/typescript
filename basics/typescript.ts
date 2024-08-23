const add = (number1: number, number2: number, showResult: boolean, phrase: string) => {
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
const printResult = true;
const resultPhrase = 'result is: '


add(number1, number2, printResult, resultPhrase);
// this console log is not necessary due to the if-statement
// console.log(result);