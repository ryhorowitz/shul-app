import React, { useState, useContext } from "react"
import { useParams } from 'react-router-dom'
import AppContext from "./AppContext"

function ReviewDetail() {
  const { shuls } = useContext(AppContext)
  const params = useParams()
  const id = Number(params.id)

  // find reviews for shul with id of params id

  // find shul
  console.log('shuls are', shuls)
  const shul = shuls.find(shul => shul.id === id)
  console.log('find method', shuls.find(shul => shul.id === id))
  console.log('shul is,', shul)
  const reviews = shul.reviews.map(review => {
    return <li>
      <h4>{review.title}</h4>
      <p>{review.body}</p>
    </li>
  })

  return (
    <>
      <h1>Reviews for id {params.id}</h1>
      <ol>{reviews}</ol>
    </>
  )
}

export default ReviewDetail