validate = () => {
    var regexName = /[^A-Za-z\s]/;
    var regexId = /^\d+$/;
    var gmail = '@gmail.com';
    var name = document.getElementById("username").value.trim().replaceAll(" ", " ");
    var idValue = document.getElementById("recordid").value.trim().replaceAll(" ", "");
    var fromMail = document.getElementById("fromField").value.trim().replaceAll(" ","");
    var toMail = document.getElementById("toField").value.trim().replaceAll(" ", "");
    var ccMail = document.getElementById("ccField").value.trim().replaceAll(" ", "");
    var comments = document.getElementById("comments").value.trim().replaceAll(" ", "");
    var checkboxValue = document.getElementById("flexCheckDefault").checked;
    if (name == '' || idValue == '' || fromMail == '' || toMail == '' || ccMail == '' || comments == '') {
        document.getElementById("validationError").innerHTML = "Mandatory fields can not be empty";
        return;
    }
    else if (regexName.test(name)) {
        document.getElementById("validationError").innerHTML = "Letters only allowed in Username";
        return;
    }
    else if (!regexId.test(idValue)) {
        document.getElementById("validationError").innerHTML = "Numbers only allowed in Record ID";
        return;
    }
    else if (!fromMail.includes(gmail) || !toMail.includes(gmail) || !ccMail.includes(gmail)) {
        document.getElementById("validationError").innerHTML = "Invalid Email. Email should contain @gmail.com";
        return;
    }
    else {
        showInformation();
        document.getElementById("details").innerHTML = `<p><b>This is automatically generated notification to inform you about the following:</b></p> 
        <p>User <b>${name}</b> changed status of <b>${idValue}</b> to <b>${checkboxValue}</b> with below comments</p>
        <p>Greetings</p>
        <p>from: <b>${fromMail}</b></p>
        <p>to: <b>${toMail}</b></p>
        <p>cc: <b>${ccMail}</b></p>
        <p>Comments: <b>${comments}</b></p>
        Best Regards,
        <p>mitrah soft</p>`;
    }
}
showInformation = () => {
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "block";
}
resetAll = () => {
    document.getElementById("username").value = "";
    document.getElementById("recordid").value = "";
    document.getElementById("fromField").value = "";
    document.getElementById("toField").value = "";
    document.getElementById("ccField").value = "";
    document.getElementById("comments").value = "";
    document.getElementById("flexCheckDefault").checked = false;
    document.getElementById("validationError").innerHTML = "";
}