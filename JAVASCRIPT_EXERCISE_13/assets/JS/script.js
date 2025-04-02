function clickButton(event) {
    var hideMenu = document.getElementById("buttonMenu")
    var a = 10
    hideMenu.addEventListener("contextmenu", (event) => { event.preventDefault() });
    switch (event.button) {
        case 0:
            document.getElementById("buttonResult").innerHTML = "Left button of the mouse is clicked";
            break;
        case 1:
            document.getElementById("buttonResult").innerHTML = "Middle button of the mouse is clicked";
            break;
        case 2:
            document.getElementById("buttonResult").innerHTML = "Right button of the mouse is clicked";
    }
}