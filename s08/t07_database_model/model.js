const pool = require('./db.js').promise();

module.exports = class Model {
    id;
    name;
    description;
    class_role;
    race_id;

    constructor(name, description, class_role, race_id) {
        this.name = name;
        this.description = description;
        this.class_role = class_role;
        this.race_id = race_id;
    }

    async find(id) {
        await pool.execute('SELECT * FROM heroes WHERE id = ?;', [id])
            .then(([rows]) => {
                this.id = rows[0].id;
                this.name = rows[0].name;
                this.description = rows[0].description;
                this.class_role = rows[0].class_role;
                this.race_id = rows[0].race_id;
                console.log({
                    id: this.id,
                    name: this.name,
                    description: rows[0].description,
                    class_role: this.class_role,
                    race_id: this.race_id
                });
            })
            .catch((err) => {
                if (err) console.log(err);
            });
    }
    async save() {
        let sql;
        let data = [];
        let is_ins = false;
        if (this.id) {
            sql = 'UPDATE heroes SET name=?, description=?, class_role=?, race_id=? WHERE id = ?;';
            data = [this.name, this.description, this.class_role, this.race_id, this.id];
        } else {
            sql = 'INSERT INTO heroes(name, description, class_role, race_id) VALUES(?,?,?,?)';
            data = [this.name, this.description, this.class_role, this.race_id]
            is_ins = true;
        }
        await pool.execute(sql, data)
            .then(([rows]) => {
                if (is_ins === true) {
                    this.id = rows.insertId;
                    console.log(this.id);
                }
                console.log('Save successful.');
            })
            .catch((err) => {
                if (err) console.log(err);
            });
    }
    async delete() {
        await pool.query('DELETE FROM heroes WHERE id = ?;', this.id)
            .then(() => {
                console.log('Delete successful.');
            })
            .catch((err) => {
                if (err) console.log(err);
            });
    }
}