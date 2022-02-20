let archive = document.getElementsByClassName('archive')[0];

function getCookieSize() {
    let decodedCookie = decodeURIComponent(document.cookie);
    let tmp = decodedCookie.split(';');
    if (tmp[0] === '') {
        return 0;
    }
    return tmp.length;
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let tmp = decodedCookie.split(';');
    for (let i = 0; i < tmp.length; i++) {
        let c = tmp[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

function addToCookies() {
    let text = document.getElementById('text').value;
    if (text === '') {
        alert(`It's empty. Try to input something in "Text input".`);
    } else {
        document.getElementById('text').value = '';
        let date = new Date(Date.now() + 86400e3 * 30);
        document.cookie = `node${getCookieSize()}=${text}; expires=${date.toUTCString()}; path=../`;
        dispalyArchive();
    }
}

function clearCookies() {
    if (confirm('Are you sure?')) {
        archive.innerHTML = "";
        let size = getCookieSize();
        for (let i = 0; i < size; i++) {
            document.cookie = `node${i}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=../`;
        }
    }
    dispalyArchive();
}

function dispalyArchive() {
    if (getCookieSize() === 0) {
        archive.innerHTML = "[Empty]";
    } else {
        archive.innerHTML = "";
        let size = getCookieSize();
        for (let i = 0; i < size; i++) {
            archive.innerHTML += `<p>--&gt; ${getCookie('node' + i)}</p>`;
        }
    }
}
dispalyArchive();