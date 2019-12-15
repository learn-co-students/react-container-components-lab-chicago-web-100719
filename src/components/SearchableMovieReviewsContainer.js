import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor(){
        super()
        this.state ={
            reviews:[],
            searchTerm:''
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        fetch(URL + `${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(data =>this.setState({reviews: data.results}))
    }



    render(){
        return <div className='searchable-movie-reviews'>
            <h1>Searchable Moview Reviews</h1>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" name='searchTerm' value={this.state.searchTerm}/>
                <input type='submit'/>
            </form>
            <MovieReviews reviews={this.state.reviews}/>
        </div>
    }
}

export default SearchableMovieReviewsContainer