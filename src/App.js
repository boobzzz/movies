import React, { Component } from "react";
import values from "@bit/ramda.ramda.values";
import MoviesList from "./components/MoviesList/MoviesList";
import "./App.module.css";

const urls = {
    trendingNow: ["Trending Now", "https://api.themoviedb.org/3/discover/movie"],
    scifiHits: ["Sci-Fi Hits", "https://api.themoviedb.org/3/genre/878/movies"],
    comedyHits: ["Comedy Hits", "https://api.themoviedb.org/3/genre/35/movies"],
}

export default class App extends Component {
    render() {
        return (
            <div>
                {values(urls).map(item =>
                    <section>
                        <h2>{item[0]}</h2>
                        <MoviesList url={item[1]} />
                    </section>
                )}
            </div>
        )
    }
}
