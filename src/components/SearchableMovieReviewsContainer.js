import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: ''
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(resp => resp.json())
        .then(reviews => console.log('check the results'))
    }

    handleSearchInputChange = event => {
        this.setState({ searchTerm: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault()

        fetch(`${URL}&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data => this.setState({ reviews: data.results }))
    }
    
    render() {
        return (
        <div className="latest-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleSearchInputChange}/>
                <input type="submit"/>
            </form>
            <MovieReviews reviews={this.state.reviews}/>
        </div>
        )
    }
}