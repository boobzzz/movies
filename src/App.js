import React, { Component } from 'react';

import values from "@bit/ramda.ramda.values";
import toPairs from '@bit/ramda.ramda.to-pairs';

import MoviesList from './components/MoviesList/MoviesList';
import Button from './components/Button/Button';
import './App.module.css';

const urls = {
    'Trending Now': 'https://api.themoviedb.org/3/discover/movie',
    'Sci-Fi Hits': 'https://api.themoviedb.org/3/genre/878/movies',
    'Comedy Hits': 'https://api.themoviedb.org/3/genre/35/movies',
}
const api_key = 'cd53ee965e63158d218cc6de9f207988'
const perPage = 20;

export default class App extends Component {
    state = {
        isLoading: false,
        movies: []
    }

    // componentDidMount = async () => {
    //     await values(urls).map(url => this.loadMore(url))
    // }

    loadMore = async (url) => {
        let { movies } = this.state;
        let page = Math.floor(movies.length / perPage) + 1;
        let path = url + `?api_key=${api_key}&page=${page}`;
        this.setState({
            isLoading: true
        })

        let response = await fetch(path);
        let json = await response.json();
        let data = json.results;
        console.log(data);

        this.setState({
            isLoading: false,
            movies: [...movies, ...data]
        })
    }

    render() {
        let { isLoading, movies } = this.state;

        return (
            <div>
                {/* isLoading
                ? <div>Loading...</div> */}
                {toPairs(urls).map(item =>
                    <section>
                        <h2>{item[0]}</h2>
                        <MoviesList movies={movies} />
                        <Button
                            type="button"
                            itemsPerPage={perPage}
                            clicked={() => this.loadMore(item[1])} />
                    </section>
                )}
            </div>
        )
    }
}
