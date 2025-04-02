updatedColor = (color) => {
    let selectedColor = { Red: "false", Blue: "false", Green: "false" };
    selectedColor[color] = true;
    result = JSON.stringify(selectedColor);
    document.getElementById("resultArray").innerHTML = `Result: ${result}`;
}