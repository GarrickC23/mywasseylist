import React, { useEffect, useState } from 'react'

import GameDetails from '../components/GameDetails'
import GameForm from '../components/GameForm'

const Home = () => {
    const [games, setGames] = useState(null)

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/api/games')
            const json = await response.json()

            if (response.ok) {
                setGames(json)
            }
        }

        fetchWorkouts()
    }, [])

    return (
        <div className="home">
            <div className="games">
                {games && games.map((game) => (
                    <GameDetails key={game._id} game={game} />
                ))}
            </div>
            <GameForm />
        </div>
    )
}

export default Home