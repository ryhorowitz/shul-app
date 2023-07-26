import React, { useState } from "react";
const EditModal = ({ editShul, onClose, onSave }) => {
  const [editedShul, setEditedShul] = useState(editShul);

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditedShul((prevShul) => ({
      ...prevShul,
      [name]: value,
    }));
  };

  // const handleSave = () => {
  //   handleUpdateShulInfo(editedShul)

  // };

  function handleEditShul(editedShul) {
    console.log(editedShul)
    fetch(`/shuls/${editedShul.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedShul)
    })
      .then(() => {
        onSave(editedShul)
        onClose()
      })
      .catch(e => console.errors('errors,', e))
  }

  return (
    <div>
      <h2>Edit Shul</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={editedShul.name}
        onChange={handleChange}
      />
      <label htmlFor="description">Movement:</label>
      <input
        type="text"
        id="movement"
        name="movement"
        value={editedShul.movement}
        onChange={handleChange}
      />
      <button onClick={() => handleEditShul(editedShul)}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditModal
