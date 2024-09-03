let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'afx'

// because i used unknown i have to use logic to set 'unknown' as a fixed type
if (typeof userInput === 'string') {
    userName = userInput;    
}

// the use of never ensures when the function is called, nothing is returned
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('ERROR', 404);