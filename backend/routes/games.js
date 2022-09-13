const express = require('express')
const Game = require('../models/gameModel')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const game = await Game.find({})
        res.status(200).json(game)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.post('/', async (req, res) => {
    const {title, genre, rating} = req.body

    try {
        const game = await Game.create({title, genre, rating})
        res.status(200).json(game)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router