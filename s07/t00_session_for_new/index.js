const express = require('express');
const session = require('express-session');
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
    if (sess.real_name || sess.alias || sess.age || sess.about || sess.photo || sess.checkbox1) {
        res.write(`<h1>Session for new</h1>
        <pre>
            name:${sess.real_name}
            alias:${sess.alias}
            age:${sess.age}
            description:${sess.about}
            photo:${sess.photo}
            experience:${sess.checkbox1}
            level:${sess.range}
            purpose:${sess.radio}
        </pre>`);
        res.end('<fieldset><button><a href=' + '/logout' + '>Forget</a></button></fieldset>');
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.post("/", (req, res) => {
    sess = req.session;
    for (let key in req.body) {
        sess[key] = req.body[key];
    }
    res.redirect('/');
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) return console.log(err);
        res.redirect('/');
    });
});

app.listen(options.port, options.host, () => {
    console.log(`Server is running on http://${options.host}:${options.port}`);
});