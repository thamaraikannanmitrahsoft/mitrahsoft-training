var array = [1, 2, 3, 4, 5];
addNumbers = (numberOne, numberTwo, numberThree, numberFour, numberFive) => {
    var result = numberOne + numberTwo + numberThree + numberFour + numberFive;
    console.log("The addition of all numbers is: ", result);
}
addNumbers(...array);