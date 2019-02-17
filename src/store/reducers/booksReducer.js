import {
    ACTION_REMOVE_BOOK,
    ACTION_UPDATE_BOOK,
    ACTION_ADD_BOOK,
    ACTION_SET_ACTIVE_BOOK,
} from '../actionConsts';

import books from '../../data/books';

const initialState = {
    books: books,
    activeBook: null
};

const booksReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ACTION_REMOVE_BOOK:
            {
                let books = [];

                books = state.books.filter(book => {
                    return book.id !== action.payload
                });

                return { ...state, books };
            }

        case ACTION_SET_ACTIVE_BOOK:
            {
                return { ...state, activeBook: action.payload };
            }

        case ACTION_UPDATE_BOOK:
            {
                let books = [];

                books = state.books.map(book => {
                    if ( book.id === action.payload.id ) {
                        return {...action.payload}
                    } else {
                        return book;
                    }
                });

                return { ...state, books };
            }

        case ACTION_ADD_BOOK:
            {
                action.payload.id = state.books[ state.books.length - 1 ].id + 1;
                let books = [ ...state.books, action.payload ];
                return { ...state, books };
            }
        default: break
    }
    return state;
};

export default booksReducer;