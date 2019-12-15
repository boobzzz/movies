import React, { Component } from 'react';

import classes from './App.module.css';

const perPage = 20;

export default class App extends Component {
    state = {
        movies: []
    }

    componentDidMount = async () => {
        this.loadMore()
    }

    loadMore = async () => {
        let { movies } = this.state;
        let page = movies.length / perPage + 1;
        let url = `https://api.themoviedb.org/3/discover/movie?api_key=cd53ee965e63158d218cc6de9f207988&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
        let response = await fetch(url);
        let json = await response.json();
        let data = json.results;

        this.setState({
            movies: [...movies, ...data]
        })
    }

    render() {
        let { movies } = this.state;

        return (
            <div>
                {movies.map(movie =>
                    <div id={movie.id} className={classes.clear}>
                        <img
                            alt=""
                            className={classes.tile}
                            src={"http://image.tmdb.org/t/p/original/" + movie.backdrop_path}/>
                        <div className={classes.info}>
                            <h3>{movie.title}</h3>
                            <p>Score: {movie.vote_average} / 10</p>
                            <details>
                                <summary>Overview</summary>
                                {movie.overview}
                            </details>
                        </div>
                    </div>
                )}
                <button type="button" onClick={this.loadMore}>
                    Next {perPage}
                </button>
            </div>
        )
    }
}
