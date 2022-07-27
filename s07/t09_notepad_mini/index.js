let express = require('express');
let Note = require('./Note');
let NotePad = require('./NotePad');
let app = express();

let port = 3000;
let host = '127.0.0.1';
let list = new NotePad();

let page = `<h1>Notepad mini</h1>
<form action="/" method="post">
    <div><input name="name" type="text" placeholder="Name"></div><br>
    <div>
        <select name="select" id="select">
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
        </select>
    </div><br>
    <div><textarea name="text" id="content" cols="20" rows="3" placeholder="Text of note..."></textarea></div><br>
    <div><button type="submit">Create</button></div>
</form>
<h1>List of notes</h1>`;

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(page + list.getHTMLList());
});

app.post('/', (req, res) => {
    list.add(new Note(req.body.name, req.body.select, req.body.text).get_json());
    res.redirect('/');
});

app.get('/select-file', (req, res) => {
    res.send(page + list.getHTMLList() + `
    <h1>Detail of "${list.list[req.query.id].name}"</h1>
    <ul>
        <li>date:<b> ${list.list[req.query.id].date}</b></li>
        <li>name:<b> ${list.list[req.query.id].name}</b></li>
        <li>importance:<b> ${list.list[req.query.id].importance}</b></li>
        <li>text:<b> ${list.list[req.query.id].text}</b></li>
    </ul>`);
});

app.get('/delete-file', (req, res) => {
    list.delete(req.query.id);
    res.redirect('/');
});

app.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`);
});