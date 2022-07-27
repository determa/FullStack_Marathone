const Model = require('../model.js');

module.exports = class Hero extends Model {
    constructor(name, description, class_role, race_id) {
        super(name, description, class_role, race_id);
    }
    async find(id) {
        await super.find(id);
    }
    async save() {
        await super.save();
    }
    async delete() {
        await super.delete();
    }
}