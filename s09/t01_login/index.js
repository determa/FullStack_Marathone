const express = require('express');
const User = require('./models/user');
const jsdom = require("jsdom");
const path = require('path');
const app = express();

const options = {
    host: '127.0.0.1',
    port: 3000
};

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({
    extended: false
}));

let resul = '';

app.get('/', async (req, res) => {
    let page = await jsdom.JSDOM.fromFile('./public/login.html').then((dom) => {
        dom.window.document.getElementById('success-box').innerHTML = resul;
        return dom.serialize();
    });
    resul = '';
    res.send(page);
});

app.get('/done', async (req, res) => {
    res.sendFile(path.join(__dirname + '/public/done.html'));
});

app.post('/login', async (req, res) => {
    resul = await new User(req.body.login, req.body.password).find_login();
    res.redirect('/done');
});

app.use((req, res, next) => {
    res.status(404).send(`Sorry cant find that!`);
});

app.listen(options.port, options.host, () => {
    console.log(`Server started on http://${options.host}:${options.port}`);
});