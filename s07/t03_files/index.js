let express = require('express');
let fs = require('fs');
const File = require('./File.js');
const FileList = require('./FileList.js');
let app = express();

let port = 3000;
let host = '127.0.0.1';
let file = '';
let filelist = new FileList();

if (!fs.existsSync('./tmp')) {
    fs.mkdirSync('tmp');
}

app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.send(`<h1>File manager</h1>
    <form method="post" action="/create">
        <fieldset>
            <h2>Create a file</h2>
            Filename <input type="text" name="name" required><br><br>
            Content <textarea name="content" id="content" cols="60" rows="7" required></textarea><br><br>
            <button type="submit">Create file</button>
        </fieldset>
    </form>
    <form>
        <fieldset>
            <h2>Files:</h2>
            ${filelist.getHTMLList()}
        </fieldset>
    </form>`)
});

app.post('/create', function (req, res) {
    new File(req.body.name, req.body.content);
    res.redirect('/');
});

app.get('/select-file', function (req, res) {
    file = req.query.file;
    res.send(`<h1>File manager</h1>
    <form method="post" action="/create">
        <fieldset>
            <h2>Create a file</h2>
            Filename <input type="text" name="name" required><br><br>
            Content <textarea name="content" id="content" cols="60" rows="7" required></textarea><br><br>
            <button type="submit">Create file</button>
        </fieldset>
    </form>
    <form>
        <fieldset>
            <h2>Files:</h2>
            ${filelist.getHTMLList()}
        </fieldset>
    </form>
    <form method="post" action="/delete">
        <fieldset>
            <h2>Selected file:</h2>
            <h2>${req.query.file}</h2>
            <p>Content:</p>
            <div>${new File(req.query.file).read()}</div><br>
            <button type="submit">Delete file</button>
        </fieldset>
    </form>`)
});

app.post('/delete', function (req, res) {
    new File(file).delete();
    res.redirect('/');
})

app.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`);
});