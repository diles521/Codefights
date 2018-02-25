function checkPalindrome(inputString) {
    aString = inputString.split("").reverse().join("");
    return (inputString === aString ? true : false);
}