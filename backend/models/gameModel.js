const mongoose = require('mongoose')

const Schema = mongoose.Schema


const gameSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Game', gameSchema)