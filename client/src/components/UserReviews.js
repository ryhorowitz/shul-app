import { useContext } from "react"
import AppContext from "./AppContext"

function UserReviews() {
  const { user } = useContext(AppContext)
  const reviews = user.reviews.map(review => {
    return <li key={review.id}>
      <div>
        <h4>{review.title}</h4>
        <h5>
          <div>{review.shul.name}</div>
          <div>Movement: {review.shul.movement}</div>
        </h5>
        <p>review:</p>
        <p>{review.body}</p>
      </div>
    </li>
  })
  // user.reviews
  return (
    <>
      <h2>{user.username}'s Reviews</h2>
      <ol>{reviews}</ol>
    </>
  )
}

export default UserReviews