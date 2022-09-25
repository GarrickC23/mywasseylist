import { useState } from 'react'

const GameForm = () => {
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')
    const [rating, setRating] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const game = {title, genre, rating}

        const response = await fetch('/api/games', {
            method: 'POST',
            body: JSON.stringify(game),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setGenre('')
            setRating('')
            setError(null)
            console.log('new game added', json)
        }
    }

    return (
    <form className="create" onSubmit={handleSubmit}>
        <h3>Rate a New Game</h3>

        <label>Game Title: </label>
        <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
        />

        <label>Genre: </label>
        <input
            type="text"
            onChange={(e) => setGenre(e.target.value)}
            value={genre}
        />

        <label>Rating: </label>
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
        </select>

        <button>Add Game</button>
        {error && <div className="error">{error}</div>}
    </form>
    )
}

export default GameForm