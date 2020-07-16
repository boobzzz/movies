import { createContext } from 'react';

export const DetailsContext = createContext({
    loading: undefined,
    details: {},
    videos: [],
    actors: []
})
