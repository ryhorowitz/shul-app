import React, { useContext } from "react"
import { useParams } from 'react-router-dom'
import AppContext from "../AppContext"

function ShulReviews() {
  const { shuls } = useContext(AppContext)
  const params = useParams()
  const id = Number(params.id)
  const shul = shuls.find(shul => shul.id === id)

  console.log('shul is', shul)
  // ****WHY does this fix my memory leak bug?? //
  if (shul === undefined) {
    return (<h1>There are no reviews for</h1>)
  }

  const reviews = shul.reviews.map(review => {
    return <li key={review.id}>
      <h4>{review.title}</h4>
      <h4>by: {review.user.username}</h4>
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

export default ShulReviews