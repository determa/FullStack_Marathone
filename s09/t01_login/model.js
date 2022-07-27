const pool = require('./db.js').promise();

module.exports = class Model {
    id;
    login;
    full_name;
    password;
    email;

    constructor(login, password, full_name, email) {
        this.login = login;
        this.full_name = full_name;
        this.password = password;
        this.email = email;
    }

    async find(id) {
        await pool.execute('SELECT * FROM users WHERE id = ?;', [id])
            .then(([rows]) => {
                this.id = rows[0].id;
                this.login = rows[0].name;
                this.full_name = rows[0].full_name;
                this.password = rows[0].password;
                this.email = rows[0].email;
            })
            .catch((err) => {
                if (err) {
                    console.log(err);
                    return err.code;
                }
            });
    }

    async find_login() {
        return await pool.execute('SELECT * FROM users WHERE login = ?;', [this.login])
            .then(([rows]) => {
                if (!rows[0] || this.password != rows[0].password) {
                    return '<p style="color: red;">Incorrect login or password.</p>';
                }
                return `<p>STATUS: ${rows[0].status}</p>`;
            })
            .catch((err) => {
                if (err) return '<p style="color: red;">Something wrong. Try again.</p>';
            });
    }

    async save() {
        let res;
        let sql;
        let data = [];
        let is_ins = false;
        if (this.id) {
            sql = 'UPDATE users SET login=?, full_name=?, password=?, email=? WHERE id = ?;';
            data = [this.login, this.full_name, this.password, this.email, this.id];
        } else {
            sql = 'INSERT INTO users(login, full_name, password, email) VALUES(?,?,?,?)';
            data = [this.login, this.full_name, this.password, this.email]
            is_ins = true;
        }
        res = await pool.execute(sql, data)
            .then(([rows]) => {
                if (is_ins === true) {
                    this.id = rows.insertId;
                }
                return '<p style="color: green;">Registration successful.</p>';
            })
            .catch((err) => {
                if (err.code == 'ER_DUP_ENTRY') {
                    return '<p style="color: red;">User exists!</p>';
                } else {
                    return '<p style="color: red;">Unknown error</p>';
                }
            });
        return res;
    }
    async delete() {
        await pool.query('DELETE FROM users WHERE id = ?;', this.id)
            .then(() => {
                console.log('Delete successful.');
            })
            .catch((err) => {
                if (err) {
                    console.log(err);
                    return err.code;
                }
            });
    }
}