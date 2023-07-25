import React, { useContext, useState } from "react";
import UserContext from "./UserContext";

function Home() {
  const { user, setUser } = useContext(UserContext)
  const [updateUsername, setUpdateUsername] = useState('')
  const [toggleForm, setToggleForm] = useState(false)

  function handleUpdateUser() {
    fetch(`/users/:id`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateUsername)
    })
      .then(r => r.json())
      .then()
    // hit the form toggle
  }

  function handleToggle() { setToggleForm(toggleForm => !toggleForm) }

  return (
    <>
      <h1>Home</h1>
      {/* Welcom so and so */}
      <h1>Welcome {user.username}</h1>
      <button onClick={handleToggle}>Update User</button>
      {toggleForm ?
        <form onSubmit={handleUpdateUser}>
          <div><label htmlFor="username">Username:</label>
            <input
              type="text"
              id="login-username"
              name="username"
              value={updateUsername}
              onChange={(e) => setUpdateUsername(e.target.value)}
              required
            />
          </div>
          <button type="submit">Update</button>
        </form>
        : ''}
    </>
  )
}

export default Home