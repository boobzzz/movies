import * as T from './types';

export const toggleCheck = (targetItem) => ({
    type: T.TOGGLE_CHECK,
    payload: targetItem
})
