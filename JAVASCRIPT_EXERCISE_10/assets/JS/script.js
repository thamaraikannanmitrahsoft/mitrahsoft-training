function validate() {
    document.getElementById("result").innerHTML = "";
    var regexName = /[^A-Za-z]/;
    var regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var regexPhone = /^[\d]{10}$/;
    var regexZipcode = /[\d]*/;
    var fname = document.getElementById("firstName").value.trim().replaceAll(" ", "");
    var lname = document.getElementById("lastName").value.trim().replaceAll(" ", "");
    var emailId = document.getElementById("email").value.trim().replaceAll(" ", "");
    var Mobile = document.getElementById("phone").value.trim().replaceAll(" ", "");
    var zipNumber = document.getElementById("zipcode").value.trim().replaceAll(" ", "");
    var valid = true;
    if (fname == '') {
        document.querySelector(".fnameError").innerHTML = "First Name can not be empty";
        valid = false;
    }
    if (regexName.test(fname)) {
        document.querySelector(".fnameError").innerHTML = "Only letters are allowed in names";
        valid = false;
    }
    if (lname == '') {
        document.querySelector(".lnameError").innerHTML = "Last Name can not be empty";
        valid = false;
    }
    if (regexName.test(lname)) {
        document.querySelector(".lnameError").innerHTML = "Only letters are allowed in names";
        valid = false;
    }
    if (Mobile == '') {
        document.querySelector(".mobileError").innerHTML = "Phone Number can not be empty";
        valid = false;
    }
    if (emailId == '') {
        document.querySelector(".emailError").innerHTML = "EmailID can not be empty";
        valid = false;
    }
    if (!regexEmail.test(emailId) && emailId.length > 0) {
        document.querySelector(".emailError").innerHTML = "Invalid EmailID";
        valid = false;
    }
    if (!regexPhone.test(Mobile) && Mobile.length > 0) {
        document.querySelector(".mobileError").innerHTML = "Phone number must be 10 digit";
        valid = false;
    }
    if (!regexZipcode.test(zipNumber)) {
        document.querySelector(".zipError").innerHTML = "Zip code should be number only";
        valid = false;
    }
    if (zipNumber.length !== 6) {
        document.querySelector(".zipError").innerHTML = "Zip code should be 6 Number";
        valid = false;
    }
    if (valid) {
        document.getElementById("result").innerHTML = "Form submitted successfully";
    }
}
function clearError(errorQuery) {
    document.querySelector("." + errorQuery).innerHTML = "";
}
function resetAll() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("zipcode").value = "";
    document.getElementById("address").value = "";
    document.querySelector(".fnameError").innerHTML = "";
    document.querySelector(".lnameError").innerHTML = "";
    document.querySelector(".emailError").innerHTML = "";
    document.querySelector(".mobileError").innerHTML = "";
    document.querySelector(".zipError").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}