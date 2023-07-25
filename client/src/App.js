import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Shuls from './components/Shuls';
import Home from './components/Home';
import LogoutButton from './components/LogoutButton'
import UserContext from './components/UserContext';

function App() {
  const { user, setUser } = useContext(UserContext)
  const [shuls, setShuls] = useState([])

  function handleLogout() {
    fetch('/logout', { method: 'DELETE' })
      .then(r => setUser(null))
      .then(() => setShuls([]))
  }

  useEffect(() => {
    if (user) {
      fetch('shuls')
        .then(r => r.json())
        .then(shuls => setShuls(shuls))
    }
  }, [user])

  function deleteUser() {
    fetch(`/users/${user.id}`, { method: 'DELETE' })
      .then(r => setUser(null))
      .then(() => setShuls([]))
      .then(console.log(user.username, 'was deleted'))
  }

  if (!user) return (
    <div>
      <Login setUser={setUser} />
    </div>
  )
  return (

    <div className="App">
      <LogoutButton logout={handleLogout} />
      <div id='username-display'>Hi {user.username}!
        <button onClick={deleteUser}>Delete user?</button>
      </div>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shuls">Shuls</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shuls" element={<Shuls shuls={shuls} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
