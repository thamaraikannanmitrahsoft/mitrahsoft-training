function findResult() {
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("resultSmall").innerHTML = "";
    document.getElementById("resultLarge").innerHTML = "";
    var sentence = document.getElementById("textBox").value.trim();
    var word = sentence.split(/\s+/);
    if (sentence == '') {
        document.getElementById("validationError").innerHTML = "Please enter a sentence";
        return;
    }
    else if (/[^a-zA-Z0-9\s]/.test(sentence)) {
        document.getElementById("validationError").innerHTML = "Special Character(s) not allowed";
        return;
    }
    else if (word.length < 2) {
        document.getElementById("validationError").innerHTML = "Please enter a sentence which has more than one word";
        return;
    }
    var smallest = word[0];
    var largest = word[0];
    word.forEach(element => {
        if (element.length < smallest.length) {
            smallest = element;
        }
        else if (element.length > largest.length) {
            largest = element;
        }
    });
    if (smallest == largest) {
        document.getElementById("resultSmall").innerHTML = "All words are equal in length";
    }
    else {
        document.getElementById("resultSmall").innerHTML = "Smallest word: " + smallest;
        document.getElementById("resultLarge").innerHTML = "Largest word: " + largest;
    }
}
function reset() {
    document.getElementById("textBox").value = "";
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("resultSmall").innerHTML = "";
    document.getElementById("resultLarge").innerHTML = "";
}