import { useState } from "react"

function Reviews({ review }) {
  const [toggleEditModal, setToggleEditModal] = useState(false)
  const [editModal, setEditModal] = useState({
    title: review.title,
    body: review.body
  })

  function handleChange(e) {
    const { name, value } = e.target

    setEditModal({
      ...editModal,
      [name]: value
    })
  }
  function handleDeleteReview() {

  }

  function handleEditReview() {

  }

  const reviewHeader = (
    <>
      <h5>
        <div>{review.shul.name}</div>
        <div>Movement: {review.shul.movement}</div>
      </h5>
    </>
  )
  return (
    <>
      {toggleEditModal ?
        <div>
          {reviewHeader}
          <form onSubmit={handleEditReview}>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              id='title'
              name="title"
              value={editModal.title}
              onChange={handleChange}
            ></input>
            <label htmlFor="body">Review: </label>
            <textarea
              type="text"
              id='body'
              name="body"
              rows="8"
              cols="50"
              value={editModal.body}
              onChange={handleChange}
            ></textarea>
            <button type='submit'>Submit</button>
          </form>
        </div>
        : <div>
          {reviewHeader}
          <h3>{review.title}</h3>
          <p>review:</p>
          <p>{review.body}</p>
        </div>
      }
      <div>
        <button onClick={() => setToggleEditModal(!toggleEditModal)}>Edit</button>
        <button onClick={() => handleDeleteReview}>Delete</button>
      </div>
    </>
  )

}

export default Reviews