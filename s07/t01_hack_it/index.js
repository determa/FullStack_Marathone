const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const app = express();

let sess;

app.use(session({
    secret: 'secret_word',
    saveUninitialized: true,
    resave: true
}));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const options = {
    host: '127.0.0.1',
    port: 8000
};

app.get("/", (req, res) => {
    sess = req.session;
    res.write('<h1>Password</h1><form method="POST">');
    if (sess.info) {
        res.write(`<p style="color: ${sess.color_info};">${sess.info}</p>`);
        sess.info = null;
    }

    if (sess.hash) {
        res.write(`
        <p>Password saved at session.</p>
        <p>Hash is ${sess.hash}</p>
        <label for="pass"></label><input type="password" name="check" id="pass" placeholder="Password to session" required>
        <button type="submit">Check password</button><br>
        <button><a href="/clear">Clear</a></button>
        `);
    } else {
        res.write(`
        <span>Password not saved at session.</span><br>
        <label for="pass">Password for saving to session</label>
        <input type="password" name="pass" id="pass" placeholder="Password to session" required><br>
        <label for="salt">Salt for saving to session</label>
        <input type="number" name="salt" id="salt" placeholder="Salt to session" required><br>
        <button>Save</button>
        `);
    }
    res.end('</form>');
});

app.post("/", (req, res) => {
    sess = req.session;
    if (req.body.check) {
        if (bcrypt.compareSync(req.body.check, sess.hash)) {
            req.session.destroy((err) => {
                if (err) return console.log(err);
            });
            return res.redirect('/hacked');
        } else {
            sess.info = "Access denied!";
            sess.color_info = "red";
        }
    }
    else {
        sess.hash = bcrypt.hashSync(req.body.pass, bcrypt.genSaltSync(Number(req.body.salt)));
    }
    res.redirect('/');
});

app.get('/hacked', (req, res) => {
    sess = req.session;
    sess.info = "Hacked!";
    sess.color_info = "green";
    res.redirect('/');
});

app.get('/clear', (req, res) => {
    req.session.destroy((err) => {
        if (err) return console.log(err);
        res.redirect('/');
    });
});

app.listen(options.port, options.host, () => {
    console.log(`Server is running on http://${options.host}:${options.port}`);
});