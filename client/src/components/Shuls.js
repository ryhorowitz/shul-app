import React, { } from "react";

function Shuls({ shuls }) {

  const shulList = shuls.map(shul => {
    return <li key={shul.id}>{shul.name}
      <ul>
        <li>movement: {shul.movement}</li>
        <li>number of reviews: {shul.reviews.length}</li>
      </ul>
    </li>
  })

  return (
    <>
      <h1>Shuls</h1>
      <ol>{shulList}</ol>
    </>
  )
}

export default Shuls