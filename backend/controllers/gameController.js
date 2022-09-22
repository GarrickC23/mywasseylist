const { response } = require('express')
const { default: mongoose } = require('mongoose')
const Game = require('../models/gameModel')

// get ALL games
const getAllGames = async (req, res) => {
    const game = await Game.find({}).sort({ createdAt: -1 })

    res.status(200).json(game)
}

// get SINGLE game
const getGame = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such game' })
    }

    const game = await Game.findById(id)

    if (!game) {
        return res.status(404).json({ error: 'no such game' })
    }

    res.status(200).json(game)
}


// CREATE new game
const createGame = async (req, res) => {
    const { title, genre, rating } = req.body

    try {
        const game = await Game.create({ title, genre, rating })
        res.status(200).json(game)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// UPDATE game rating
const updateRating = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such game' })
    }

    const game = await Game.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if (!game) {
        return res.status(404).json({ error: 'no such game' })
    }

    res.status(200).json(game)

}

// DELETE game
const deleteGame = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such game' })
    }

    const game = await Game.findOneAndDelete({ _id: id })

    if (!game) {
        return res.status(404).json({ error: 'no such game' })
    }

    res.status(200).json(game)
}

module.exports = {
    getAllGames,
    getGame,
    updateRating,
    deleteGame,
    createGame
}
