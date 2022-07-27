const express = require('express');
const session = require('express-session');
const iconv = require('iconv-lite');
const app = express();

let sess;
const sessTime = 1000 * 60 * 60; //one hour

app.use(session({
    secret: 'secret_word',
    saveUninitialized: true,
    cookie: {
        maxAge: sessTime
    },
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
    res.write(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="description" content="t02. Charset">
            <title>Charset</title>
        </head>
        <body>
            <h1>Charset</h1>
            <form action="/" method="POST">
                <label for="string">Change charset:</label>
                <input type="text" name="string" id="string" placeholder="Input string">
                <p>Select charset or several charsets:
                    <select name="charset" id="charset" multiple>
                        <option value="UTF-8" selected>UTF-8</option>
                        <option value="ISO-8859-1">ISO-8859-1</option>
                        <option value="Windows-1252">Windows-1252</option>
                    </select>
                    <button>Change charser</button>
                    <button><a href="/clear">Clear</a></button>
                </p>
            </form>
    `)
    if (sess.charset && sess.string) {
        res.write(`<label for="inputString">Input string:</label>
        <textarea id="inputString" cols="24" disabled>${sess.string}</textarea><br>`);
        if (Array.isArray(sess.charset)) {
            for (let i = 0; i < sess.charset.length; i++) {
                res.write(`<label>${sess.charset[i]}:</label>
                <textarea cols="24" disabled>${change_charset(sess.string, sess.charset[i])}</textarea><br>`);
            }
        } else {
            res.write(`<label>${sess.charset}:</label>
                <textarea cols="24" disabled>${change_charset(sess.string, sess.charset)}</textarea><br>`);
        }
    }
    res.end(`</body>
    </html>`);
});

app.post("/", (req, res) => {
    sess = req.session;
    for (let key in req.body) {
        sess[key] = req.body[key];
    }
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

function change_charset(string, to) {
    return iconv.encode(string, to).toString();
}