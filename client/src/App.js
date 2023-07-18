import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Auth from './components/Auth';
// import Signup from './components/Signup';
import Shuls from './components/Shuls';
// import AddShul from './components/AddShul';
// import Reviews from './components/Reviews'
import Home from './components/Home';
function App() {
  // eslint-disable-next-line
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/auth')
      .then(r => {
        if (r.ok) {
          r.json()
            .then(user => {
              console.log('user is ', user)
              setUser(user)
            })
        }
      })
  }, [])

  function handleLogout() {
    fetch('/logout', { method: 'DELETE'})
    .then( r => setUser(null))
  }
  // if no user return login page
  if (!user) return <Auth setUser={setUser} />
  return (
    <div className="App">
      { user ? <button onClick={handleLogout}>Logout</button> : <button>Login</button>}
      
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shuls">Shuls</Link>
            </li>
            {/* <li> */}
              {/* <Link to="/signup">Signup</Link> */}
            {/* </li> */}
            {/*<li>
              <Link to="/add-shul">Add Shul</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li> */}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shuls" element={<Shuls />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/add-shul" element={<AddShul />} />
          <Route path="/reviews" element={<Reviews />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
