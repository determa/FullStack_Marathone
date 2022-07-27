const Model = require('../model.js');

module.exports = class User extends Model {
    constructor(login, password, full_name, email) {
        super(login, password, full_name, email);
    }
    async find(id) {
        return super.find(id);
    }
    async find_login() {
        return super.find_login();
    }
    async save() {
        return super.save();
    }
    async pass_find() {
        return super.pass_find();
    }
    async delete() {
        return super.delete();
    }
}