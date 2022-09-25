import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;