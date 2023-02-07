//1st Problem
function mindGame(num) {
    if (typeof num !== "number") {
        return "It's not a number";
    }
    return (num * 3 + 10) / 2 - 5;

    /* This function checks the type of num using the typeof operator. If num is not a number, the function returns "It's not a number". If num is a number, the function performs the calculation as specified and returns the result.*/
}