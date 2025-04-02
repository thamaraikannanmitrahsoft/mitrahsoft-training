function findResult() {
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    var regexComma = /,{1,}/g;
    var regexSpecial = /[^a-zA-Z\d-.,]/;
    var regexLetters = /[^\d-.,]/;
    var regexValidate = /^[-]*\d+(\.*\d+)?$|^\.+\d+$|^[-]*\.*\d+$/;
    var regexHyphen = /-{1,}/g;
    var regexDot = /\.{1,}/g;
    var numbers = (document.getElementById("inputField").value.trim().replaceAll(" ", ""));
    numbers = numbers.replace(regexComma, ",");
    numbers = numbers.replace(regexHyphen, "-");
    numbers = numbers.replace(regexDot, ".");
    if (numbers == '') {
        document.getElementById("validationError").innerHTML = "Please enter a number";
        return;
    }
    else if (regexSpecial.test(numbers)) {
        document.getElementById("validationError").innerHTML = "Special Character(s) not allowed";
        return;
    }
    else if (regexLetters.test(numbers)) {
        document.getElementById("validationError").innerHTML = "Letters(s) not allowed";
        return;
    }
    numbers = numbers.split(",");
    if (numbers.length < 2) {
        document.getElementById("validationError").innerHTML = "Please enter two numbers.";
        return;
    }
    else if (numbers.length > 2) {
        document.getElementById("validationError").innerHTML = "The given input is invalid.";
        return;
    }
    var number1 = numbers[0];
    var number2 = numbers[1];
    if (regexValidate.test(number1) && regexValidate.test(number2)) {
        if (Number(number1) > Number(number2)) {
            document.getElementById("result").innerHTML = number1 + " is the largest number.";
        }
        else if (Number(number2) > Number(number1)) {
            document.getElementById("result").innerHTML = number2 + " is the largest number.";
        }
        else if (Number(number1) == Number(number2)) {
            document.getElementById("result").innerHTML = "Both numbers are same.";
        }
    }
    else {
        document.getElementById("validationError").innerHTML = "Invalid number.";
    }
}
function reset() {
    document.getElementById("inputField").value = "";
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}