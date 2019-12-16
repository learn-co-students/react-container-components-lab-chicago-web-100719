import React from 'react'

const Review = (review) => {return (
    <div className="review">
        <a href={review.link.url}>{review.headline}</a>
        <p>By: {review.byline}</p>
        <p>{review.summary_short}</p>
    </div>
)} 

const MovieReviews = ({reviews}) => { return (
<div className="review-list">
{reviews.map(review=>(Review(review)))}
</div>)}

export default MovieReviews