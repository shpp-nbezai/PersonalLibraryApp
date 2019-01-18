import {
    ACTION_REMOVE_BOOK,
    ACTION_UPDATE_BOOK,
    ACTION_ADD_BOOK,
    ACTION_SET_ACTIVE_BOOK,
} from '../store/actionConsts';

import books from '../Data/books';

const initialState = {
    books: books,
    activeBook: null
}

export const rootReduser = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ACTION_REMOVE_BOOK:
            {
                let books = [];
                state.books.forEach( item => {
                    if ( item.id !== action.payload ) books.push( item );
                });
                return { ...state, books: books };
            }

        case ACTION_SET_ACTIVE_BOOK:
            {
                return { ...state, activeBook: action.payload };
            }

        case ACTION_UPDATE_BOOK:
            {
                let books = [];
                state.books.forEach( item => {
                    if ( item.id === action.payload.id )
                    {
                        books.push( action.payload );
                    } else {
                        books.push( item );
                    };
                });
                return { ...state, books: books };
            }

        case ACTION_ADD_BOOK:
            {
                const newBookId = state.books[ state.books.length - 1 ].id + 1;
                action.payload.id = newBookId;
                let books = [ ...state.books, action.payload ];
                return { ...state, books };
            }
        default: break
    }
    return state;
}
