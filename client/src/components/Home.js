import React, { useState } from "react";

function Home(params) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin(e) {
    e.preventDefault()

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })
      .then(r => r.json())
      .then(r => console.log("sucessful login", r))
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

export default Home