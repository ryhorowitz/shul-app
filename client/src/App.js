import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Shuls from './components/Shuls';
import AddShul from './components/AddShul';
import Reviews from './components/Reviews'

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/shuls">Shuls</Link>
            </li>
            <li>
              <Link to="/add-shul">Add Shul</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/shuls" element={<Shuls />} />
          <Route path="/add-shul" element={<AddShul />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
