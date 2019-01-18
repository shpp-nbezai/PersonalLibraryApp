import React, { Component } from 'react';
import connect from "react-redux/es/connect/connect";

import { bindActionCreators } from "redux";
import { setActiveBook } from "../store/actions";

class BookData extends Component {

    render() {
        const {
            book,
            setActiveBook,
            enableBookEditor,
        } = this.props;

        const divStyle = {
            backgroundImage: 'url(' + book.image + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover',
        };

        return (
            <div
                className="book has-text-white button"
                style={ divStyle }
                onClick={() => {
                        setActiveBook( book.id );
                        enableBookEditor();
                }}
                key={ book.id }>
                <ul >
                    <li>id = { book.id }</li>
                    <li>{ book.name }</li>
                    <li>{ book.author }</li>
                    <li>{ book.rate }</li>
                    <li>Data: { book.date }</li>
                </ul>
            </div>
        );
    }
}

const putActionsToProps = ( dispatch ) => {
    return {
        setActiveBook: bindActionCreators( setActiveBook, dispatch )
    }
};

export default connect( null, putActionsToProps )( BookData );