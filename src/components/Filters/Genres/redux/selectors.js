import { createSelector } from 'reselect';

const getGenres = (state) => state.genres.genres
export const getGenresSelector = createSelector(getGenres, (genres) => {
    return genres.map(genre => (
        {id: genre.id + '', name: genre.name, checked: false}
    ))
})
