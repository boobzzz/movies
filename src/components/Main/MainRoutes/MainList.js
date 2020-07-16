import React from 'react';

import FiltersForm from '../../Filters/Form/FiltersForm';
import MoviesList from '../../Movies/List/MoviesList';

const MainList = (props) => {
    return (
        <div className="container-lg">
            <div className="row justify-content-center">
                <aside className="col-xl-3 col-lg-4 col-md-4 col-sm-5">
                    <FiltersForm />
                </aside>
                <section className="col-xl-9 col-lg-8 col-md-8 col-sm-7">
                    <MoviesList />
                </section>
            </div>
        </div>
    )
}

export default MainList;
