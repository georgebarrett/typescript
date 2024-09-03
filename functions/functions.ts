let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'afx'

// because i used unknown i have to use logic to set 'unknown' as a fixed type
if (typeof userInput === 'string') {
    userName = userInput;    
}
