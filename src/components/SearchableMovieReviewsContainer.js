import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=AHyi6LtL7B1gvZvdcdmtKMzxtalqzLCz?query='
// the api key issued by NYT keeps being returned as Invalid

class SearchableMovieReviewsContainer extends Component {

    state={
        reviews: [],
        searchTerm: ""
    }

    handleChange = event => {
        event.persist()
        this.setState({...this.state, searchTerm: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL + `${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(reviews => console.log(reviews))
        .catch(err => console.log(err.message))
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="searchTerm" value={this.state.searcTerm} onChange={this.handleChange}/>
                    <input type="submit" value="Search Reviews"></input>
                </form>
                <div>
                    <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;
