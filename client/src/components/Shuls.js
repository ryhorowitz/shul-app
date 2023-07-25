import React, { useEffect, useState, useContext } from "react";
import AppContext from './AppContext';

function Shuls() {
  const { shuls, setShuls } = useContext(AppContext)

  const [toggleForm, setToggleForm] = useState(false)
  const [newShulForm, setNewShulForm] = useState({
    name: '',
    movement: ''
  })

  useEffect(() => {
    fetch('shuls')
      .then(r => r.json())
      .then(shuls => setShuls(shuls))
  }, [])
  const shulList = shuls.map(shul => {
    return <li key={shul.id}>{shul.name}
      <ul>
        <li>movement: {shul.movement}</li>
        <li>number of reviews: {shul.reviews.length}</li>
      </ul>
    </li>
  })

  function handleUpdateNewShulForm(e) {
    const { name, value } = e.target
    setNewShulForm({ ...newShulForm, [name]: value })

  }
  function handleCreateAShul(e) {
    e.preventDefault()
    console.log('newShul is ', newShulForm)

    fetch(`/shuls`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newShulForm)
    })
      .then(r => r.json())
      .then(newShul => {
        console.log('new Shul response is ', newShul)
      })
  }
  return (
    <>
      <h1>Shuls</h1>
      <ol>{shulList}</ol>

      <button onClick={() => setToggleForm(!toggleForm)}>Add a Shull</button>
      {toggleForm ?
        <form onSubmit={handleCreateAShul}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newShulForm.name}
              onChange={handleUpdateNewShulForm}
              required
            ></input>
          </div >
          <div>
            <label htmlFor="movement">Movement: </label>
            <input
              type="text"
              id="movement"
              name="movement"
              value={newShulForm.movement}
              onChange={handleUpdateNewShulForm}
              required
            ></input>
          </div >
          <button type="submit">Submit</button>
        </form>
        : null
      }
    </>
  )
}

export default Shuls