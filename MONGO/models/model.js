const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => { console.log(error) })
database.once('connected', () => { console.log('Database Connected')})

const dataSchema = new mongoose.Schema({
    name: { required: true, type: String },
    age: { required: true, type: Number }
})

module.exports = mongoose.model('ClassRoomCollection', dataSchema)