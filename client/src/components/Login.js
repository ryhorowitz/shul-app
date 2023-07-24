import React, { useState } from "react"

function Login({ setUser, setShuls }) {
  // eslint-disable-next-line
  const [errors, setErrors] = useState([])
  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: ''
  })
  const [signupFormData, setSignupFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  function handleLoginFormData(e) {
    const { name, value } = e.target
    setLoginFormData({ ...loginFormData, [name]: value })
  }

  function handleSignupFormData(e) {
    const { name, value } = e.target
    setSignupFormData({ ...signupFormData, [name]: value })
  }

  function handleLogin(e) {
    e.preventDefault()
    const body = {
      username: loginFormData.username,
      password: loginFormData.password
    }
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => {
        if (r.ok) {
          r.json().then(r => { setUser(r) })
        } else {
          r.json().then(e => {
            console.log('error response')
            setErrors(Object.entries(e.error).flat())
          })
        }
      })
  }

  function handleSignupSubmit(e) {
    e.preventDefault()
    const body = {
      username: signupFormData.username,
      password: signupFormData.password,
      password_confirmation: signupFormData.confirmPassword
    }
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(r => {
        if (r.ok) {
          r.json().then(r => { console.log(r) })
        } else {
          // console.log('error response')
          r.json().then(e => {
            console.log('error response', e)
            setErrors(Object.entries(e.errors).flat())
          })
        }
      })
  }
  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <div><label htmlFor="username">Username:</label>
          <input
            type="text"
            id="login-username"
            name="username"
            value={loginFormData.username}
            onChange={handleLoginFormData}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="login-password"
            name="password"
            value={loginFormData.password}
            onChange={handleLoginFormData}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <br></br>
      <br></br>
      <h1>Signup</h1>

      <form onSubmit={handleSignupSubmit}>
        <div><label htmlFor="username">Username:</label>
          <input
            type="text"
            id="signup-username"
            name="username"
            value={signupFormData.username}
            onChange={handleSignupFormData}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="signup-password"
            name="password"
            value={signupFormData.password}
            onChange={handleSignupFormData}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="signup-confirmPassword"
            name="confirmPassword"
            value={signupFormData.confirmPassword}
            onChange={handleSignupFormData}
            required
          />
        </div>
        <button type="submit">Sign up</button>
      </form>

    </>
  )

}
export default Login