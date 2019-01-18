import {
    ACTION_REMOVE_BOOK,
    ACTION_UPDATE_BOOK,
    ACTION_ADD_BOOK,
    ACTION_SET_ACTIVE_BOOK,
} from '../store/actionConsts';

export const removeBook = ( id ) => {
    return {
        type: ACTION_REMOVE_BOOK,
        payload: id
    }
};

export const setActiveBook = (id ) => {
    return {
        type: ACTION_SET_ACTIVE_BOOK,
        payload: id
    }
};

export const updateBook = ( book ) => {
    return {
        type: ACTION_UPDATE_BOOK,
        payload: book
    }
};

export const addBook = ( book ) => {
    return {
        type: ACTION_ADD_BOOK,
        payload: book
    }
};



