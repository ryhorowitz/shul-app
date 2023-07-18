import React, { useState } from "react";

function Auth({ setUser }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // eslint-disable-next-line
  const [errors, setErrors] = useState([])

  function handleLogin(e) {
    e.preventDefault()

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(r => {
        if (r.ok) {
          console.log('ok response')
          r.json()
            .then(r => {
              console.log('r is ', r)
              setUser(r)
            })

        } else {
          console.log('error response')
          r.json().then(e => setErrors(Object.entries(e.error).flat()))
        }
      })
  }
  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  )

}
export default Auth