const express = require('express')
const {
    getAllGames,
    getGame,
    updateRating,
    deleteGame,
    createGame
} = require('../controllers/gameController')

const router = express.Router()

// get ALL games
router.get('/', getAllGames)

// get ONE game
router.get('/:id', getGame)

// CREATE game
router.post('/', createGame)

// UPDATE game rating
router.patch('/:id', updateRating)

// DELETE game
router.delete('/:id', deleteGame)


module.exports = router