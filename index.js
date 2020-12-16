require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const Guardian = require('./models/guardian.js')

mongoose.connect(`${process.env.MONGO_URI}`);

const db = mongoose.connection;

db.once('open', () => {
    console.log(`Connected to MongoDB on ${db.hose}:${db.port}`)
})

db.on('error', (err) => {
    console.log(`Error`, err);
})

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    Guardian.find().then((foundGuardians) => {
        res.status(200).json({ guardians: foundGuardians })
    })
    .catch((err) => res.send(err))
})

app.get('/:class', (req, res) => {
    Guardian.findOne({class: req.params.class}).then((guardian) => {
        res.status(200).json({ guardian })
    })
    .catch((err) => res.send(err))
})

app.post('/', (req, res) => {
    Guardian.create(req.body).then((guardian) => {
        res.status(201).json({ guardian })
    })
    .catch((err) => res.send(err))
})

app.put('/:class', (req, res) => {
    Guardian.update({ class: req.params.class }, req.body).then((guardian) => {
        res.status(201).json({ guardian })
    })
    .catch((err) => res.send(err))
})

app.delete('/:class', (req, res) => {
    Guardian.deleteOne({ class: req.params.class}).then(() => {
        res.status(201).json()
    })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log((`Server listening on PORT: ${PORT}`));
})