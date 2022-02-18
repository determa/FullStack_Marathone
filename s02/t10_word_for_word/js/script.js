function clear(str) {
    let arr = str.split(" ");
    let uniqueChars = arr.filter((element, index) => {
        return arr.indexOf(element) === index;
    });
    for (let i = 0; i < uniqueChars.length; i++) {
        if (uniqueChars[i] == '')
            uniqueChars.splice(i, 1);
    }
    return uniqueChars;
}

function addWords(obj, wrds) {
    let tmp = Object.values(obj);
    tmp = tmp + " " + wrds;
    tmp = clear(tmp);
    tmp = tmp.join(" ");
    obj["words"] = tmp;
    return obj;
}

function removeWords(obj, wrds) {
    let tmp = Object.values(obj);
    tmp = String(tmp);
    tmp = clear(tmp);
    wrds = clear(wrds);

    for (let i = 0; i < tmp.length; i++) {
        for (let j = 0; j < wrds.length; j++) {
            if (tmp[i] == wrds[j])
                tmp.splice(i, 1);
        }
    }
    tmp = tmp.join(" ");
    obj["words"] = tmp;
    return obj;
}

function changeWords(obj, oldWrds, newWrds) {
    removeWords(obj, oldWrds);
    addWords(obj, newWrds);
    return obj;
}