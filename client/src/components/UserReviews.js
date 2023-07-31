import { useContext } from "react"
import AppContext from "./AppContext"
import Review from "./Review"

function UserReviews() {
  const { user } = useContext(AppContext)
  const reviews = user.reviews.map(review => {
    return <li key={review.id}><Review review={review} /></li>
  })

  return (
    <>
      <h2>{user.username}'s Reviews</h2>
      <ol>{reviews}</ol>
    </>
  )
}

export default UserReviews