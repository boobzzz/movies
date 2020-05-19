import { createContext } from 'react';

export const DetailsContext = createContext({
    details: {},
    videos: [],
    actors: [],
    loading: undefined,
})
