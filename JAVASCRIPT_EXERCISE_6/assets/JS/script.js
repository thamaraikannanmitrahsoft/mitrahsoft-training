var checkBoxes = document.getElementsByTagName('input');
function checkAll(value) {
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].type == 'checkbox') {
            checkBoxes[i].checked = value;
        }
    }
}
function toggleCheckBox() {
    for (var i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].type == 'checkbox') {
            checkBoxes[i].checked = !checkBoxes[i].checked;
        }
    }
}