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
    let page = await jsdom.JSDOM.fromFile('./public/register.html').then((dom) => {
        dom.window.document.getElementById('success-box').innerHTML = resul;
        return dom.serialize();
    });
    resul = '';
    res.send(page);
});

app.post('/registration', async (req, res) => {
    if (req.body.password == req.body.confirmPassword) {
        resul = await new User(req.body.login, req.body.password, req.body.full_name, req.body.email).save();
    } else {
        resul = '<p style="color: red;">Passwords do not match.</p>';
    }
    res.redirect('/');
});

app.use((req, res, next) => {
    res.status(404).send(`Sorry cant find that!`);
});

app.listen(options.port, options.host, () => {
    console.log(`Server started on http://${options.host}:${options.port}`);
});