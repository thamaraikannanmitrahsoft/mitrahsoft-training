function validate() {
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("outputField").value = "";
    var regexComma = /,{1,}/g;
    var regexSpecial = /[^a-zA-Z\d-.,]/;
    var regexLetters = /[^\d-.,]/;
    var regexInvalidNumber = /^[-]*\.*\d+(\.\d+)?(,-*\.*\d+(\.\d+)?)*$/;
    var regexHyphen = /-{1,}/g;
    var regexDot = /\.{1,}/g;
    var numbers = (document.getElementById("inputField").value.trim().replaceAll(" ", ""));
    numbers = numbers.replace(regexComma, ",");
    numbers = numbers.replace(regexHyphen, "-");
    numbers = numbers.replace(regexDot, ".");
    if (numbers == '') {
        document.getElementById("validationError").innerHTML = "Please enter the numbers";
        return false;
    }
    else if (regexSpecial.test(numbers)) {
        document.getElementById("validationError").innerHTML = "Special Character(s) not allowed";
        return false;
    }
    else if (regexLetters.test(numbers)) {
        document.getElementById("validationError").innerHTML = "Letters(s) not allowed";
        return false;
    }
    else if (!regexInvalidNumber.test(numbers)) {
        document.getElementById("validationError").innerHTML = "Invalid number";
        return false;
    }
    numbers = numbers.split(",");
    return numbers;
}
function add() {
    var array = validate();
    if (array == false) {
        return;
    }
    if (array.length > 1) {
        var sum = 0
        for (var i = 0; i < array.length; i++) {
            sum = sum + Number(array[i]);
        }
        if (isNaN(sum)) {
            document.getElementById("validationError").innerHTML = "Invalid number";
            return;
        }
        document.getElementById("outputField").value = sum;
    }
    else {
        document.getElementById("validationError").innerHTML = "Please enter more than one number";
    }
}
function multiply() {
    var array = validate();
    if (array == false) {
        return;
    }
    if (array.length > 1) {
        var product = 1;
        for (var i = 0; i < array.length; i++) {
            product = product * Number(array[i]);
        }
        if (isNaN(product)) {
            document.getElementById("validationError").innerHTML = "Invalid number";
            return;
        }
        document.getElementById("outputField").value = product;
    }
    else {
        document.getElementById("validationError").innerHTML = "Please enter more than one number";
    }
}
function resetall() {
    document.getElementById("inputField").value = "";
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("outputField").value = "";
}