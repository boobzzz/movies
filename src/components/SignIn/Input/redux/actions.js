import * as T from './types';

export const getValues = (values) => ({
    type: T.GET_VALUES,
    payload: values
})
