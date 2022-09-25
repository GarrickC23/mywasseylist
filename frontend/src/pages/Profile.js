
const Profile = () => {
    return (
        <div className="profile">
            <h1>User Profile</h1>
            <label>
                Game:
                <textarea></textarea>
            </label>
            <label>
                Genre:
                <textarea></textarea>
            </label>
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
            <button>Submit</button>
        </div>
    )
}

export default Profile;