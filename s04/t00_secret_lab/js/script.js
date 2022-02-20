function transformation() {
    if (document.getElementById("hero").innerText == "Hulk") {
        document.getElementById("hero").innerText = "Bruce Banner";
        document.getElementById("lab").style.background = "#ffb300";
        document.getElementById("hero").style.fontSize = "60px";
        document.getElementById("hero").style.letterSpacing = "2px";
    }
    else {
        document.getElementById("hero").innerText = "Hulk";
        document.getElementById("lab").style.background = "#70964b";
        document.getElementById("hero").style.fontSize = '130px';
        document.getElementById("hero").style.letterSpacing = "6px";
    }
}