import React, { useContext, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import AppContext from './AppContext'
import Login from './components/Login'
import Shuls from './components/Shuls'
import Home from './components/Home'
import LogoutButton from './components/LogoutButton'
import ShulReviews from './components/ShulReviews'
import CreateReview from './components/CreateReview';

function App() {
  const { user, setUser } = useContext(AppContext)
  const navigate = useNavigate()

  function handleLogout() {
    fetch('/logout', { method: 'DELETE' })
      .then(() => setUser(null))
      .then(() => navigate('/login'))
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
      .then(console.log(user.username, 'was deleted'))
  }

  if (!user) return (

    < div >
      <Login setUser={setUser} />
    </div >
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
          <li>
            <Link to="/new-review">Write A Review</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/shuls" element={<Shuls />} />
        {/* update to route of /shuls/:id/reviews */}
        <Route path='/shuls/:id/reviews' element={<ShulReviews />} />
        <Route path='/new-review' element={<CreateReview />} />
      </Routes>

    </div>
  );
}

export default App;
