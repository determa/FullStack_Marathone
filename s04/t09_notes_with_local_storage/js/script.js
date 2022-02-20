function getFormattedDate() {
    var dateObject = new Date();
    data = `[${dateObject.toString().slice(8, 24)}]`;
    return data;
}

function addToStorage() {
    var newNode = document.getElementById('newNote').value;
    if (newNode === '') {
        alert(`It's empty. Try to input something in "Text input".`);
    } else {
        document.getElementById('newNote').value = '';

        localStorage.setItem(`node${localStorage.length}`, newNode + ' ' + getFormattedDate());

        dispalyArchive();
    }
}

function clearStorage() {
    if (confirm('Are you sure?')) {
        localStorage.clear();
    }

    dispalyArchive();
}

function dispalyArchive() {
    if (localStorage.length === 0) {
        document.getElementsByClassName('archive')[0].innerHTML = "[Empty]";
    } else {
        document.getElementsByClassName('archive')[0].innerHTML = "";
        for (let i = 0; i < localStorage.length; i++) {
            document.getElementsByClassName('archive')[0].innerHTML += `<p>--&gt; ${localStorage.getItem('node' + i)}</p>`;
        }
    }
}

dispalyArchive();