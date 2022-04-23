const mongoose = require('../db')
const Schema = mongoose.Schema

const playerSchema = new Schema({
    name: String,
    win: Number,
    loss: Number, 
    date: String   
// }
// ,{
//     timestamps: true

});

var Player = mongoose.model('Player', playerSchema)
module.exports = Player