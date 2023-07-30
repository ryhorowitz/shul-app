import React, { useContext, useState } from "react"
import AppContext from "./AppContext"

function Reviews() {
  const { shuls } = useContext(AppContext)
  const [reviewForm, setReviewForm] = useState({
    // if I refresh I error out because shuls[0] is undefined 
    shul: '',
    title: '',
    body: ''
  })
  function handleChange(e) {
    const { name, value } = e.target
    setReviewForm({
      ...reviewForm,
      [name]: value
    })
  }

  function handleShulChange(e) {
    setReviewForm({
      ...reviewForm,
      shul: e.target.value
    })
  }

  function handleSubmitReview(e) {
    e.preventDefault()
    // post request
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
        <input type="submit">Submit</input>
      </form>
    </>
  )
}

export default Reviews