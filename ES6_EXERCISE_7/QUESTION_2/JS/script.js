const country = {
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan"
}
displayCountry = () => {
    const countryObject = document.getElementById("country");
    const selectedCountry = countryObject.options[countryObject.selectedIndex].value;
    if (selectedCountry == "") {
        document.getElementById("resultArray").innerHTML = "";
    }
    else {
        document.getElementById("resultArray").innerHTML = `The selected code <b>${selectedCountry}</b> denotes country <b>${country[selectedCountry]}</b>`;
    }
}