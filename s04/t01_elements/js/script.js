let li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {
    if (li[i].className == '' || (li[i].className != "good" && li[i].className != "evil" &&
            li[i].className != "unknown")) {
        li[i].className = "unknown";
    }
    li[i].append(document.createElement('br'));
    if (!li[i].hasAttribute("data-element")) {
        li[i].setAttribute("data-element", "none");
        li[i].append(add_circle());
    } else {
        let value = li[i].getAttribute("data-element");
        value = value.split(" ");
        for (let j = 0; j < value.length; j++) {
            li[i].append(add_circle(value[j]))
        }
    }
}

function add_circle(value = "none") {
    let item = document.createElement('div');
    item.classList.add("elem");
    if (value == "air")
        item.classList.add("air");
    else if (value == "water")
        item.classList.add("water");
    else if (value == "earth")
        item.classList.add("earth");
    else if (value == "fire")
        item.classList.add("fire");
    else {
        item.classList.add("none");
        let line = document.createElement('div');
        line.classList.add("line");
        item.append(line);
    }
    return item;
}