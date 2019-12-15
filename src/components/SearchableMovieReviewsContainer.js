import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  handleInput = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    fetch(URL + this.state.searchTerm)
    .then(resp => resp.json())
    .then(data => this.setState({ reviews: data.results }))
  }

  render() {
    return <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleInput}/>
          <input type='submit'/>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
  }
  
}
            
export default SearchableMovieReviewsContainer
