import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Auth from './components/Auth';
import Signup from './components/Signup';
// import Shuls from './components/Shuls';
// import AddShul from './components/AddShul';
// import Reviews from './components/Reviews'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/auth')
      .then(r => {
        if (r.ok) {
          r.json()
            .then(r => {
              console.log('r is ', r)
              setUser(r)
            })
        }
      })
  }, [])
  // if no user return login page

  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            {/* <li>
              <Link to="/shuls">Shuls</Link>
            </li>
            <li>
              <Link to="/add-shul">Add Shul</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li> */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Auth setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/shuls" element={<Shuls />} />
          <Route path="/add-shul" element={<AddShul />} />
          <Route path="/reviews" element={<Reviews />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
