import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <div className="Pages">
          <Routes>
            <Route 
              path="/"
              element={<Home />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
