import React, { useContext } from "react"
import { useParams } from 'react-router-dom'
import AppContext from "./AppContext"

function ReviewDetail() {
  const { shuls } = useContext(AppContext)
  const params = useParams()
  const id = Number(params.id)
  const shul = shuls.find(shul => shul.id === id)

  // if shuls.reviews is empty do...
  if (shul.reviews.length === 0) {
    return (<h1>There are no reviews for {shul.name}</h1>)
  }

  const reviews = shul.reviews.map(review => {
    return <li key={review.id}>
      <h4>{review.title}</h4>
      <p>{review.body}</p>
    </li>
  })
  return (
    <>
      <h1>Reviews for {shul.name}</h1>
      <ol>{reviews}</ol>
    </>
  )
}

export default ReviewDetail