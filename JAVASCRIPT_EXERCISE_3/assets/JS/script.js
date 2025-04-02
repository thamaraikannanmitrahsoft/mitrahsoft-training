function findResult() {
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    var sentence = document.getElementById("inputField").value.trim().toLowerCase();
    var n = sentence.length;
    if (sentence == '') {
        document.getElementById("validationError").innerHTML = "Please enter a word";
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
        document.getElementById("validationError").innerHTML = "Please enter more than one character";
        return;
    }
    if (sentence[0] == sentence[n - 1]) {
        document.getElementById("result").innerHTML = "The first and last letter are same. " + sentence[0] + " is common here.";
    }
    else {
        document.getElementById("result").innerHTML = "The first and last letter are not same.";
    }
}
function reset() {
    document.getElementById("inputField").value = "";
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}