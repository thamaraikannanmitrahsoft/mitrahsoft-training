function findResult() {
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("resultVowel").innerHTML = "";
    document.getElementById("resultLetters").innerHTML = "";
    var sentence = document.getElementById("inputField").value.trim().toLowerCase();
    var word = sentence.split(/\s+/);
    var vowels = /[aeiouAEIOU]/;
    var result = "";
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
    else if (word.length > 1) {
        document.getElementById("validationError").innerHTML = "Please enter only one word";
        return;
    }
    if (vowels.test(sentence)) {
        var arrayOfLetters = sentence.split('');
        arrayOfLetters.forEach(element => {
            if (vowels.test(element)) {
                result += element;
            }
        });
        result=[...new Set(result)].join(",");
        document.getElementById("resultVowel").innerHTML = "The given word has vowels";
        document.getElementById("resultLetters").innerHTML = "The vowels are: " + result;
    }
    else {
        document.getElementById("resultVowel").innerHTML = "No vowels in the given word";
    }
}
function reset() {
    document.getElementById("inputField").value = "";
    document.getElementById("validationError").innerHTML = "";
    document.getElementById("resultVowel").innerHTML = "";
    document.getElementById("resultLetters").innerHTML = "";
}