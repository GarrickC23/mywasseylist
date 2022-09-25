import React from 'react'

const GameDetails = ({ game }) => {
    return (
        <div className="game-details">
            <h4>{game.title}</h4>
            <p><strong>Genre: </strong>{game.genre}</p>
            <p><strong>Rating: </strong>{game.rating}</p>
            <p>{game.createdAt}</p>
        </div>
    )
}

export default GameDetails