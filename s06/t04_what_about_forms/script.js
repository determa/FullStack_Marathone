function answer() {
    const radio = document.querySelector("input[name=quest]:checked");
    const div = document.getElementById("answer");
    if (radio.id == "third") {
        div.innerHTML = '<p>Correct answer! You are a connoisseur of Marvel!</p>';
    } else {
        div.innerHTML = '<p>Shame on you! Go and watch Avengers!</p>';
    }
}