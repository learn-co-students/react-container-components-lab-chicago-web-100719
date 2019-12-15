import React from 'react'

const MovieReviews = (props) => {
  return <ul className='review-list'>
      {props.reviews.map(review => renderReview(review))}
    </ul>
}

const renderReview = (review) => {
  return <li className='review'>{review.headline}</li>
}

export default MovieReviews
