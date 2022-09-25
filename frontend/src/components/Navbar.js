import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>mywasseylist</h1>
            <div className="links">
                <a href="/">Games</a>
                <Link to="/profile">Profile</Link>
            </div>
        </nav>
    )
}

export default Navbar