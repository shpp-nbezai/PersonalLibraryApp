import React from 'react';
import BookData from '../component/BookData';

export default ({
                    data,
                    enableBookEditor,
                    addNewBook,
                }) => {

    const books = data.map( function( book, index ) {
        return (
            <BookData
                book={ book }
                index={ index }
                enableBookEditor={ enableBookEditor }
                key={ index }
            />
        )
    });

    return (
        <div className="book-list">

            <div
                className="book has-text-white has-background-primary button new-book-button"
                onClick={ () => addNewBook()}
            >
                <h1>+</h1>
            </div>
            { books }
        </div>
    );
};

