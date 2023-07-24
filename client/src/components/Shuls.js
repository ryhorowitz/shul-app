import React, { } from "react";

function Shuls({ shuls }) {

  return (
    <>
      <h1>Shuls</h1>
      {shuls.map(shul => {
        return <li key={shul.id}>{shul.name}</li>
      })}
    </>
  )
}

export default Shuls