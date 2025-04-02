validate = () => {
    document.getElementById("resultComments").innerHTML = "";
    document.getElementById("resultArray").innerHTML = "";
    var regexComma = /,{1,}/g;
    var regexSpecial = /[^a-zA-Z\d,]/;
    var regexLetters = /[^\d+,]/;
    var regexInvalidNumber = /^\w+(,*\w+)*$/;
    var inputElements = (document.getElementById("inputField").value.trim().replaceAll(" ", ""));
    var index = (document.getElementById("indexField").value.trim().replaceAll(" ", ""));
    inputElements = inputElements.replace(regexComma, ",");
    if (regexSpecial.test(inputElements)) {
        document.getElementById("validationError").innerHTML = "Special Character(s) not allowed in the Elements field";
        return;
    }
    else if (regexSpecial.test(index) || regexComma.test(index)) {
        document.getElementById("validationError").innerHTML = "Special Character(s) not allowed in the position field";
        return;
    }
    else if (inputElements == '' || index == '') {
        document.getElementById("validationError").innerHTML = "Mandatory fields can not be empty";
        return;
    }
    else if (!regexInvalidNumber.test(inputElements)) {
        document.getElementById("validationError").innerHTML = "Invalid Elements Field";
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
    if (inputElements.length <= 1) {
        document.getElementById("validationError").innerHTML = "Enter more than one element in the Elements field";
        return;
    }
    else if (index > inputElements.length) {
        document.getElementById("validationError").innerHTML = `Enter position between 1 and ${inputElements.length}`;
        return;
    }
    index = index - 1;
    document.getElementById("resultComments").innerHTML = `Successfully removed the element ${inputElements[index]} from position ${index + 1}`;
    var result = removeArray(inputElements, index);
    document.getElementById("resultArray").innerHTML = `The elements are: ${result}`;
}
removeArray = (elements, position) => {
    elements.splice(position, 1);
    return elements;
}
clearError = () => {
    document.getElementById("validationError").innerHTML = "";
}
resetAll = () => {
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("resultArray").innerHTML = "";
    document.getElementById("resultComments").innerHTML = "";
    document.getElementById("inputField").value = "";
    document.getElementById("indexField").value = "";
}