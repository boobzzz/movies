import React , { Component } from 'react';
import fetchJSON from '../../lib/api.js';
import Button from '../Button/Button';
import classes from './MoviesList.module.css';

const options = {
    headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDUzZWU5NjVlNjMxNThkMjE4Y2M2ZGU5ZjIwNzk4OCIsInN1YiI6IjVkZjY2MjBmMGQxZTdmMDAxNTcxZjEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EmR74K8s26d5IUQwwyDtxY8DZS6WLoLbeB8rvZH6mGc",
    }
}
const perPage = 20;

export default class MoviesList extends Component {
    state = {
        isLoading: false,
        movies: []
    }

    componentDidMount = async () => {
        await this.loadMore(this.props.url)
    }

    loadMore = async () => {
        let { movies } = this.state;
        let page = Math.floor(movies.length / perPage) + 1;
        let path = this.props.url + `?page=${page}`;

        this.setState({
            isLoading: true
        })

        let data = await fetchJSON(path, options)

        this.setState({
            isLoading: false,
            movies: [...movies, ...data.body.results]
        })
    }

    render() {
        let { isLoading, movies } = this.state;

        return (
            isLoading
            ? <div>Loading...</div>
            : <div>
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
                <Button
                    itemsPerPage={this.props.itemsPerPage}
                    clicked={this.loadMore} />
                <hr/>
            </div>
        )
    }
}
