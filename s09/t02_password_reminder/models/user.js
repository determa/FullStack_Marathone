const Model = require('../model.js');

module.exports = class Hero extends Model {
    constructor (login, password, full_name, email) {
        super(login, password, full_name, email);
    }
    async find(login) {
        return super.find(login);
    }
    async save() {
        return super.save();
    }
    async pass_find() {
        return super.pass_find();
    }
}