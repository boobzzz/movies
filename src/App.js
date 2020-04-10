import React from 'react';
// import values from '@bit/ramda.ramda.values';

import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import MoviesList from './components/MoviesList/MoviesList';
import Footer from './components/Footer/Footer';

export default function App() {
    return (
        <div>
            <Header />
            <div className="container-xl">
                <main className="row">
                    <aside className="col-3">
                        <Filters />
                    </aside>
                    <section className="col-9">
                        <MoviesList />
                    </section>
                </main>
            </div>
            <Footer />
        </div>
    )
}
