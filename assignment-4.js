//1st Problem
function mindGame(num) {
    if (typeof num !== "number") {
        return "It's not a number";
    }
    return (num * 3 + 10) / 2 - 5;

    /* This function checks the type of num using the typeof operator. If num is not a number, the function returns "It's not a number". If num is a number, the function performs the calculation as specified and returns the result.*/
}
// 2nd problem
function evenOdd(str) {
    if (typeof str !== "string") {
        return "It's not a string";
    }

    if (str.length % 2 === 0) {
        return "Even";
    }
    /*This function checks the type of str using the typeof operator. If str is not a string, the function returns "It's not a string". If str is a string, the function calculates the length of the string using the length property, checks if the length is even or odd, and returns "Even" or "Odd" as specified in the problem statement.*/
    return "Odd";
}
