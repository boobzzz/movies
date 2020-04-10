import React , { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import fetchJSON from '../../utils/api.js';

import MovieCard from './MovieCard/MovieCard';
import Button from '../Button/Button';

const url = 'https://api.themoviedb.org/3/discover/movie';
const options = {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDUzZWU5NjVlNjMxNThkMjE4Y2M2ZGU5ZjIwNzk4OCIsInN1YiI6IjVkZjY2MjBmMGQxZTdmMDAxNTcxZjEyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EmR74K8s26d5IUQwwyDtxY8DZS6WLoLbeB8rvZH6mGc',
        // 'Authorization': 'Bearer cd53ee965e63158d218cc6de9f207988',
    }
}
const perPage = 20;

const MoviesList = (props) => {
    const [ loading, setLoading ] = useState(false);
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await loadMore()
        }
        fetchData()
    }, [])

    const loadMore = async () => {
        let page = Math.floor(movies.length / perPage) + 1;
        let path = url + `?page=${page}`;
        setLoading(true)

        const data = await fetchJSON(path, options)

        setLoading(false)
        setMovies([...movies, ...data.body.results])
    }

    return (
        loading
        ? <div>Loading...</div>
        : <div>
            <div className="row">
                {movies.map(movie =>
                    <MovieCard
                        key={movie.id}
                        source={"http://image.tmdb.org/t/p/original/" + movie.poster_path}
                        title={movie.title}
                        score={movie.vote_average}
                        overview={movie.overview} />
                    )}
            </div>
            <Button
                loading={loading}
                itemsPerPage={perPage}
                clicked={loadMore} />
        </div>
    )
}
export default MoviesList;

// const mapStateToProps = (state) => {
//     return {
//         loading: state.movies.isLoading,
//         movies: state.movies.movies
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         loadMore: () => dispatch({type: 'FETCH_MOVIES'})
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
