import { useState, useContext } from "react"
import UserContext from "../AppContext";

function Reviews({ review }) {
  const { user, setUser } = useContext(UserContext)
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

  function filterOutDeletedReview(id) {
    return user.reviews.filter(review => review.id !== id)
  }

  function findReviewById(id) {
    return user.reviews.find(review => review.id === id)
  }

  async function handleDeleteReview() {
    const deletedReview = findReviewById(review.id)

    const response = await fetch(`/users/${user.id}/reviews/${review.id}`, { method: 'DELETE' })

    setUser({
      ...user,
      reviews: filterOutDeletedReview(review.id)
    })
  }


  function updateReviewsArray(reviews, updatedReview) {
    const updatedReviews = reviews.map(review => {
      if (review.id === updatedReview.id) {
        return updatedReview
      }
      return review
    })

    return updatedReviews
  }
  function handleEditReview(e) {
    e.preventDefault()

    fetch(`/users/${user.id}/reviews/${review.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...editModal })
    })
      .then(r => r.json())
      .then(updatedReview => {
        setUser({
          ...user,
          reviews: updateReviewsArray(user.reviews, updatedReview)
        })
      })
      .then(() => {
        setEditModal({
          title: review.title,
          body: review.body
        })
        setToggleEditModal(false)
      })

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
              style={{ 'width': '250px' }}
              type="text"
              id='title'
              name="title"

              value={editModal.title}
              onChange={handleChange}
            ></input>
            <div>
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
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div >
        : <div>
          {reviewHeader}
          <h3>{review.title}</h3>
          <p>review:</p>
          <p>{review.body}</p>
        </div>
      }
      <div>
        <button onClick={() => setToggleEditModal(!toggleEditModal)}>Edit</button>
        <button onClick={handleDeleteReview}>Delete</button>
      </div>
    </>
  )

}

export default Reviews