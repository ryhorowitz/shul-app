import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import AppContext from './AppContext';
import EditShulModal from './EditShulModal'

function Shuls() {
  const { shuls, setShuls } = useContext(AppContext)

  const [toggleAddShulForm, setToggleAddShulForm] = useState(false)
  const [newShulForm, setNewShulForm] = useState({
    name: '',
    movement: ''
  })
  const [editShul, setEditShul] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // console.log('use effect is running in shuls')
    fetch('shuls')
      .then(r => r.json())
      .then(shuls => setShuls(shuls))
      .catch(e => console.error('error is', e))
  }, [setShuls])

  function handleChangeNewShulForm(e) {
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
        // update shuls array
        setShuls([...shuls, newShul])
      })
      .then(() => {
        setToggleAddShulForm(false)
        setNewShulForm({
          name: '',
          movement: ''
        })
      })
  }

  function handleEditShul(shul) {
    setEditShul(shul)
  }

  const handleSave = (editedShul) => {
    const updatedShuls = shuls.map((shul) =>
      shul.id === editedShul.id ? editedShul : shul
    );
    setShuls(updatedShuls);
  };

  const handleModalClose = () => {
    setEditShul(null);
  };

  function filterOutDeletedShul(shulsArray, e) {
    return shulsArray.filter(shul => shul.id !== e.target.id)
  }
  function handleDeleteShul(e) {
    console.log(e.target.className)
    fetch(`/shuls/${e.target.className}`, { method: 'DELETE' })
      .then(res => {
        if (res.ok) {
          res.json().then(() => {
            setShuls(filterOutDeletedShul(shuls, e))
          })
        }
      })
  }

  const shulList = shuls.map(shul => {
    return <li key={shul.id}>{shul.name}
      <ul>
        <li>movement: {shul.movement}</li>
        <li>number of reviews: {shul.reviews.length}</li>
        <button
          onClick={handleDeleteShul}
          className={shul.id}>Delete</button>
        <button
          onClick={() => handleEditShul(shul)}
          className={shul.id}>Update</button>
        <button
          onClick={() => navigate(`/reviews/${shul.id}`)}
          className={shul.id}
        >See Reviews</button>
      </ul>
    </li>
  })

  return (
    <>
      <h1>Shuls</h1>

      {editShul && (
        <EditShulModal
          editShul={editShul}
          onSave={handleSave}
          onClose={handleModalClose}
        />
      )}
      <ol>{shulList}</ol>

      <button onClick={() => setToggleAddShulForm(!toggleAddShulForm)}>Add a Shull</button>
      {toggleAddShulForm ?
        <>
          <h1>Add New Shul</h1>
          <form onSubmit={handleCreateAShul}>
            <div>
              <label htmlFor="new-shul-name">Name: </label>
              <input
                type="text"
                id="new-shul-name"
                name="name"
                value={newShulForm.name}
                onChange={handleChangeNewShulForm}
                required
              ></input>
            </div >
            <div>
              <label htmlFor="movement">Movement: </label>
              <input
                type="text"
                id="new-shul-movement"
                name="movement"
                value={newShulForm.movement}
                onChange={handleChangeNewShulForm}
                required
              ></input>
            </div >
            <button type="submit">Submit</button>
          </form>
        </>

        : null
      }
    </>
  )
}

export default Shuls