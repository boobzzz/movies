import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import MovieDetails from './components/Movies/Movie/Details/MovieDetails';
import Footer from './components/Footer/Footer';
import ButtonToTop from './components/UI/ButtonToTop/ButtonToTop';

export default function App() {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/movie/:id" component={MovieDetails} />
                </Switch>
            </Router>
            <Footer />
            <ButtonToTop />
        </div>
    )
}
