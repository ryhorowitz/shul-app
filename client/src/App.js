import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './components/Login'
import Shuls from './components/Shuls'
import Home from './components/Home'
import LogoutButton from './components/LogoutButton'
import ReviewDetail from './components/ReviewDetail'
import AppContext from './components/AppContext'

function App() {
  const { user, setUser, shuls, setShuls } = useContext(AppContext)
  const navigate = useNavigate()
  function handleLogout() {
    fetch('/logout', { method: 'DELETE' })
      // .then(() => setShuls([]))
      .then(() => setUser(null))
      .then(() => navigate('/home'))
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
      // .then(() => setShuls([]))
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

      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/shuls">Shuls</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shuls" element={<Shuls />} />
        <Route path='/reviews/:id' element={<ReviewDetail />} />
      </Routes>

    </div>
  );
}

export default App;
