// Code MovieReviews Here
import React from 'react'



const renderReview=(reviews)=>{
    
    return reviews.map((review,index) =>{

      return  <div key={index} className='review'>
            <h4>{review.display_title}</h4>
            <p>{review.summary_short}</p>
        </div>
        })
    
}


const MovieReviews=(props)=>{
   return <div className="review-list">
        {renderReview(props.reviews)}
    </div>
}

export default MovieReviews