const mongoose = require('mongoose');

const weaponSchema = new mongoose.Schema({
    primary: String,
    engergy: String,
    heavy: String
})

const armorSchema = new mongoose.Schema({
    helmet: String,
    gauntlets: String,
    chestArmor: String,
    legArmor: String,
    classItem: String,
})

const guardianSchema = new mongoose.Schema({
    class: String,
    subclass: String,
    weapons: {weaponSchema},
    armor: {armorSchema}
})

const Guardian = mongoose.model('Guardian', guardianSchema);

module.exports = Guardian;;