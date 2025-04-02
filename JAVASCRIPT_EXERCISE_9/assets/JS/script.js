function showAll() {
    document.getElementById("hide").style.display = "block";
    var display = new Date();
    document.getElementById("fullYear").innerHTML = display.getFullYear();
    document.getElementById("month").innerHTML = display.getMonth() + 1;
    document.getElementById("date").innerHTML = display.getDate();
    document.getElementById("hours").innerHTML = display.getHours();
    document.getElementById("minutes").innerHTML = display.getMinutes();
    document.getElementById("seconds").innerHTML = display.getSeconds();
    document.getElementById("Milliseconds").innerHTML = display.getMilliseconds();
    document.getElementById("localTime").innerHTML = display.toLocaleString();
    document.getElementById("utc").innerHTML = display.toUTCString();
    document.getElementById("UTCMilliseconds").innerHTML = display.getTime();
}
function hideAll() {
    document.getElementById('hide').style.display = "none";
}