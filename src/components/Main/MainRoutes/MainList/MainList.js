import React from 'react';

import FiltersForm from '../../../Filters/Form/FiltersForm';
import MoviesList from '../../../Movies/List/MoviesList';

const MainList = (props) => {
    return (
        <div className="container-xl">
            <div className="row">
                <aside className="col-3">
                    <FiltersForm />
                </aside>
                <section className="col-9">
                    <MoviesList />
                </section>
            </div>
        </div>
    )
}

export default MainList;
