document.addEventListener('contextmenu', event => {
    if (window.getSelection().toString().length > 0) {
        alert("Mouse Right Click Disabled!")
        event.preventDefault();
    }
});