import React, { useContext, useState } from "react"
import AppContext from "./AppContext"
import { useNavigate } from "react-router-dom"

function CreateReview() {
  const { shuls, user, setUser } = useContext(AppContext)
  const [reviewForm, setReviewForm] = useState({
    // if I refresh I error out because shuls[0] is undefined 
    // how do I setState to based off of a value that should be passed in through AppContext
    shul: shuls[0],
    title: '',
    body: ''
  })

  const navigate = useNavigate()

  function handleChange(e) {
    const { name, value } = e.target
    setReviewForm({
      ...reviewForm,
      [name]: value
    })
  }

  function handleShulChange(e) {
    console.log('handleShuls change, ', e.target.value)
    setReviewForm({
      ...reviewForm,
      shul: e.target.value
    })
  }

  function handleSubmitReview(e) {
    e.preventDefault()

    const review = {
      user_id: user.id,
      title: reviewForm.title,
      body: reviewForm.body,
      shul_id: findShulId(reviewForm.shul)
    }
    fetch(`/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(r => r.json()) //res.ok? error handling here?
      .then(newReview => {
        setUser({
          ...user,
          reviews: [...user.reviews, newReview]
        })
      })
      .then(() => {
        setReviewForm({
          shul: shuls[0].name,
          title: '',
          body: ''
        })
      })
      .then(() => {
        navigate('/home')
      })
  }
  function findShulId(reviewFormShulName) {
    const shul = shuls.find(shul => shul.name === reviewFormShulName)
    console.log('shul is', shul)
    return shul.id
  }
  const shulOptions = shuls.map(shul => {
    return <option key={shul.id} value={shul.name}> {shul.name}</option>
  })

  return (
    <>
      <h1>Write a Review</h1>
      <form onSubmit={handleSubmitReview}>
        <div>
          <label htmlFor="shul">Shul: </label>
          <select
            id="shul"
            name="shul"

            onChange={handleShulChange}
          >
            {shulOptions}
          </select>
        </div>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id='title'
            name="title"
            value={reviewForm.title}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label htmlFor="body">Body: </label>
          <textarea
            type="text"
            id='body'
            name="body"
            rows="8"
            cols="50"
            value={reviewForm.body}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default CreateReview