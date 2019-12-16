import React, { Component } from 'react';

import MoviesList from './components/MoviesList/MoviesList';
import './App.module.css';

const perPage = 20;

export default class App extends Component {
    state = {
        isLoading: false,
        movies: []
    }

    componentDidMount = async () => {
        this.loadMore()
    }

    loadMore = async () => {
        let { movies } = this.state;
        let page = Math.floor(movies.length / perPage) + 1;
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=cd53ee965e63158d218cc6de9f207988&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;

        this.setState({
            isLoading: true
        })

        let response = await fetch(url);
        let json = await response.json();
        let data = json.results;

        this.setState({
            isLoading: false,
            movies: [...movies, ...data]
        })
    }

    render() {
        let { isLoading, movies } = this.state;

        return (
            <div>
                {isLoading
                ? <div>Loading...</div>
                : <MoviesList movies={movies} />}
                <button type="button" onClick={this.loadMore}>
                    Next {perPage}
                </button>
            </div>
        )
    }
}
