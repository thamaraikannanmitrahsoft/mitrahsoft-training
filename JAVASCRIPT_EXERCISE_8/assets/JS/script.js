function validate() {
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("resultArray").innerHTML = "";
    var regexComma = /,{1,}/g;
    var regexSpecial = /[^a-zA-Z\d,]/;
    var regexLetters = /[^\d+,]/;
    var regexInvalidNumber = /^\w+(,*\w+)*$/;
    var inputElements = (document.getElementById("inputField").value.trim().replaceAll(" ", ""));
    var index = (document.getElementById("indexField").value.trim().replaceAll(" ", ""));
    var value = (document.getElementById("replaceField").value.trim().replaceAll(" ", ""));
    inputElements = inputElements.replace(regexComma, ",");
    value = value.replace(regexComma, ",");
    if (regexSpecial.test(inputElements)) {
        document.getElementById("validationError").innerHTML = "Special Character(s) not allowed in the Elements field";
        return;
    }
    else if (regexSpecial.test(index)) {
        document.getElementById("validationError").innerHTML = "Special Character(s) not allowed in the position field";
        return;
    }
    else if (regexSpecial.test(value)) {
        document.getElementById("validationError").innerHTML = "Special Character(s) not allowed in the replace field";
        return;
    }
    else if (inputElements == '' && index == '' && value == '') {
        document.getElementById("validationError").innerHTML = "Mandatory fields can not be empty";
        return;
    }
    else if (index == '' && value == '') {
        document.getElementById("validationError").innerHTML = "Position and replace fields can not be empty";
        return;
    }
    else if (inputElements == '' && index == '') {
        document.getElementById("validationError").innerHTML = "Elements and position fields can not be empty";
        return;
    }
    else if (inputElements == '' && value == '') {
        document.getElementById("validationError").innerHTML = "Elements and replace fields can not be empty";
        return;
    }
    else if (inputElements == '') {
        document.getElementById("validationError").innerHTML = "Elements field can not be empty";
        return;
    }
    else if (index == '') {
        document.getElementById("validationError").innerHTML = "Position field can not be empty";
        return;
    }
    else if (value == '') {
        document.getElementById("validationError").innerHTML = "Replace field can not be empty";
        return;
    }
    else if (!regexInvalidNumber.test(inputElements)) {
        document.getElementById("validationError").innerHTML = "Invalid Elements Field";
        return;
    }
    else if (!regexInvalidNumber.test(value)) {
        document.getElementById("validationError").innerHTML = "Invalid Replace Field";
        return;
    }
    else if (index == 0) {
        document.getElementById("validationError").innerHTML = "Array position can not be zero";
        return;
    }
    else if (regexLetters.test(index)) {
        document.getElementById("validationError").innerHTML = "Letters not allowed in the position field";
        return;
    }
    inputElements = inputElements.split(",");
    valueArray = value.split(",");
    if (inputElements.length <= 1) {
        document.getElementById("validationError").innerHTML = "Enter more than one element in the Elements field";
        return;
    }
    else if (index > inputElements.length) {
        document.getElementById("validationError").innerHTML = "Enter position between 1 and " + inputElements.length;
        return;
    }
    else if (valueArray.length > 1) {
        document.getElementById("validationError").innerHTML = "Enter only one element to be replaced";
        return;
    }
    var result = replaceArray(inputElements, index - 1, value)
    document.getElementById("resultArray").innerHTML = "The replaced elements are: " + result;
}
function replaceArray(inputElements, index, value) {
    inputElements.splice(index, 1, value);
    return inputElements;
}
function clearError() {
    document.getElementById("validationError").innerHTML = "";
}
function resetAll() {
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("resultArray").innerHTML = "";
    document.getElementById("inputField").value = "";
    document.getElementById("indexField").value = "";
    document.getElementById("replaceField").value = "";
}
