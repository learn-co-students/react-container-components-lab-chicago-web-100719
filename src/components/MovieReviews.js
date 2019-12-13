// Code MovieReviews Here
import React, { Component } from 'react'

const MovieReviews = ({ reviews }) => {
    return (
        <div className="review-list">
            { reviews.map(movie => <p className="review">Movie</p>)}
        </div>
    )
}

export default MovieReviews