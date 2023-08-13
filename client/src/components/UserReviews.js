import { useContext } from "react"
import AppContext from "../AppContext"
import Review from "./Review"

function UserReviews() {
  const { user } = useContext(AppContext)
  const reviews = user.reviews.map(review => {
    return <li key={review.id}><Review review={review} /></li>
  })
  const shulList = user.shuls.map(shul => {
    return <li key={shul.id}>{shul.name}</li>
  })
  return (
    <>
      <h3>{user.username} has reviewed {user.shuls.length} shuls</h3>
      <ol>{shulList}</ol>
      {/* on click the show the reviews for specific shul */}
    </>
  )
}

export default UserReviews


