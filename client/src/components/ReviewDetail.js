import React, { useContext, useEffect } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import AppContext from "./AppContext"

function ReviewDetail() {
  // const navigate = useNavigate()
  const { shuls } = useContext(AppContext)
  const params = useParams()
  const id = Number(params.id)
  const shul = shuls.find(shul => shul.id === id)

  // useEffect(() => {
  //   if (shul === undefined) {
  //     navigate('/shuls')
  //   }
  // }, [])
  console.log('shul is', shul)
  // ****WHY does this fix my memory leak bug??
  if (shul === undefined) {
    return (<h1>There are no reviews for</h1>)
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