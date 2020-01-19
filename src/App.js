import React, { Component } from 'react';
import toPairs from '@bit/ramda.ramda.to-pairs';
import MoviesList from './components/MoviesList/MoviesList';
import './App.module.css';

const urls = {
    'Trending Now': 'https://api.themoviedb.org/3/discover/movie',
    'Sci-Fi Hits': 'https://api.themoviedb.org/3/genre/878/movies',
    'Comedy Hits': 'https://api.themoviedb.org/3/genre/35/movies',
}

export default class App extends Component {
    render() {
        return (
            <div>
                {toPairs(urls).map(item =>
                    <section>
                        <h2>{item[0]}</h2>
                        <MoviesList url={item[1]} />
                    </section>
                )}
            </div>
        )
    }
}
