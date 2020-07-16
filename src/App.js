import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ButtonToTop from './components/UI/ButtonToTop/ButtonToTop';

export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Header />
            <Main />
            <Footer />
            <ButtonToTop />
        </Router>
    )
}
