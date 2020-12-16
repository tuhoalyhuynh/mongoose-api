require('dotenv').config();
const mongoose = require('mongoose');

const Guardian = require('./models/guardian.js')

mongoose.connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Guardian.create({
//     class: 'Hunter',
//     subclass: 'Revenant'
// })

// const guardian1 = new Guardian({ class: 'Titan', subclass: 'Behemoth' })
// guardian1.save()

// const guardian2 = new Guardian({ class: 'Warlock', subclass: 'Shadebinder' })
// guardian2.save()

Guardian.update({ class: 'Hunter' }, { $set: {
    weapons: {
        primary: 'Suros Regime',
        energy: `Felwinter's Lie`,
        heavy: 'Commemoration'
    },
    armor: {
        helmet: 'Mask of Bakris',
        gauntlets: `Legacy's Oath Grips`,
        chestArmor: `Legacy's Oath Vest`,
        legArmor: `Legacy's Oath Strides`,
        classItem: `Legacy's Oath Cloak`
    }
    }
})
