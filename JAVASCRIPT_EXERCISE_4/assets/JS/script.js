function findResult() {
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    var sentence = document.getElementById("inputField").value.trim();
    var n = sentence.length;
    var result = ""
    if (sentence == '') {
        document.getElementById("validationError").innerHTML = "Please enter a string";
        return;
    }
    else if (/[^a-zA-Z0-9\s]/.test(sentence)) {
        document.getElementById("validationError").innerHTML = "Special Character(s) not allowed";
        return;
    }
    else if (/[^a-zA-Z\s]/.test(sentence)) {
        document.getElementById("validationError").innerHTML = "Number(s) not allowed";
        return;
    }
    else if (sentence.length < 2) {
        document.getElementById("validationError").innerHTML = "Please enter more than one charcter";
        return;
    }
    for (var i = n - 1; i >= 0; i--) {
        result += sentence[i];
    }
    document.getElementById("result").innerHTML = "The reversed string is: " + result;
}
function reset() {
    document.getElementById("inputField").value = "";
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}