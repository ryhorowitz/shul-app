import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, redirect } from 'react-router-dom';
import Login from './components/Login'
import Shuls from './components/Shuls'
import Home from './components/Home'
import LogoutButton from './components/LogoutButton'
import Reviews from './components/Reviews'
import AppContext from './components/AppContext'

function App() {
  const { user, setUser } = useContext(AppContext)
  const [shuls, setShuls] = useState([])
  // const [sessionId, setSessionId] = useState(null)

  function handleLogout() {
    fetch('/logout', { method: 'DELETE' })
      .then(() => redirect('/'))
      .then(() => setShuls([]))
      .then(() => setUser(null))
  }

  useEffect(() => {

    fetch('/auth')
      .then(res => {
        if (res.ok) {
          res.json().then(user => setUser(user))
        }
      })
      .catch(e => console.error('error is', e))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shuls" element={<Shuls shuls={shuls} setShuls={setShuls} />} />
          <Route path='/reviews' element={<Reviews />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
