import React, { Component } from 'react';
import FormErrors from "../component/FormErrors";
import RateSetter from "../component/RateSetter";
import { bindActionCreators } from "redux";
import { removeBook, updateBook, addBook } from "../store/actions";
import connect from "react-redux/es/connect/connect";

class BookEditor extends Component {
    constructor( props ) {
        super( props );

        const book = props.book || {};
        const initValidForm = this.validateBookFields( book );

        this.state = {
            id: book.id,
            name: book.name,
            author: book.author,
            date: book.date,
            rate: book.rate,
            image: book.image,
            formErrors: {
                name: "",
                author: "",
                date: "",
                rate: "",
                image: ""
            },
            nameValid: this.validateName( book.name ),
            authorValid: this.validateAuthor( book.author ),
            dateValid: this.validateDate( book.date ),
            imageValid: this.validateImage( book.image ),
            formValid: initValidForm,
        }
    }

    componentWillReceiveProps( nextProps ) {
        const {
            book
        } = nextProps;

        if ( book.id !== this.state.id ) {
            const initValidForm = this.validateBookFields( book );

            this.setState({
                id: book.id,
                name: book.name,
                author: book.author,
                date: book.date,
                rate: book.rate,
                image: book.image,
                formErrors: {
                    name: "",
                    author: "",
                    date: "",
                    rate: "",
                    image: ""
                },
                nameValid: this.validateName( book.name ),
                authorValid: this.validateAuthor( book.author ),
                dateValid: this.validateDate( book.date ),
                imageValid: this.validateImage( book.image ),
                formValid: initValidForm,
            });
        }
    }

    handleBookInput = e => {
        const name = e.target.name;
        let value = e.target.value;

        if ( name === "rate" ) {
            value = parseInt( e.target.value );
        }

        this.setState(
            { [ name ]: value} ,
            () => { this.validateField( name, value ) },
        );
    };

    validateName = name => {
        return name.length >= 6;
    };

    validateAuthor = author => {
        return author.length >= 6;
    };

    validateDate = date => {
        return date.match(/([12]\d{3}.(0[1-9]|1[0-2]).(0[1-9]|[12]\d|3[01]))/gm);
    };

    validateImage = image => {
        return image.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm);
    };

    validateField = ( name, value ) => {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let authorValid = this.state.authorValid;
        let dateValid = this.state.dateValid;
        let imageValid = this.state.imageValid;

        switch( name ) {
            case 'name':
                nameValid = this.validateName( value );
                fieldValidationErrors.name = nameValid ? '': ' is too short or or contains invalid characters';
                break;

            case 'author':
                authorValid = this.validateAuthor( value );
                fieldValidationErrors.author = authorValid ? '': ' is too short or or contains invalid characters';
                break;

            case 'date':
                dateValid = this.validateDate( value );
                fieldValidationErrors.date = dateValid ? '': ' expected in dd.mm.yyyy format';
                break;

            case 'image':
                imageValid = this.validateImage( value );
                fieldValidationErrors.image = imageValid ? '' : ' is not link';
                break;

            default:
                break;
        }

        let formValid = nameValid && authorValid && dateValid && imageValid ;
        this.setState({
            formErrors: fieldValidationErrors,
            nameValid: nameValid,
            imageValid: imageValid,
            authorValid: authorValid,
            dateValid: dateValid,
            formValid: formValid,
        });
    };

    validateBookFields = book => {
        const nameValid = this.validateName( book.name );
        const authorValid = this.validateAuthor( book.author );
        const dataValid = this.validateDate( book.date );
        const imageValid = this.validateImage( book.image );

        return nameValid && authorValid && dataValid && imageValid;
    };

    getInputclassName = field => {
        return field.length === 0 ? "input" : "input is-danger";
    };

    render() {
        const {
            maxRate,
            updateAppData,
            removeBook,
            updateBook,
            addBook,
        } = this.props;

        const {
            id,
            name,
            author,
            date,
            rate,
            image,
            formValid,
            formErrors,
        } = this.state;

        return (
            <form id="book-form" >
                <label htmlFor="name" className="label">
                    Book name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={
                        this.getInputclassName( formErrors.name )
                    }
                    value={ name }
                    maxLength="30"
                    onChange={ (e) => this.handleBookInput(e) }
                />
                <label htmlFor="author" className="label">
                    Author
                </label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    className={
                        this.getInputclassName( formErrors.author )
                    }
                    value={ author }
                    maxLength="30"
                    onChange={ (e) => this.handleBookInput(e) }
                />
                <label htmlFor="date" className="label">
                    Date
                </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    className={
                        this.getInputclassName( formErrors.date )
                    }
                    value={ date }
                    onChange={ (e) => this.handleBookInput(e) }
                />
                <label htmlFor="rate" className="label">
                    Rate
                </label>
                <RateSetter
                    rate={ rate }
                    maxRate={ maxRate }
                    handleBookRate={ (e) => this.handleBookInput(e) }
                />
                <label htmlFor="image" className="label">
                    Backgraund image URL
                </label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    className={
                        this.getInputclassName( formErrors.image )
                    }
                    value={ image }
                    maxLength="150"
                    onChange={ (e) => this.handleBookInput(e) }
                />
                <div className="panel formErrors">
                    <FormErrors formErrors={ formErrors }/>
                </div>
                <div>
                    <button
                        className="button is-link is-fullwidth"
                        disabled={ !formValid }
                        onClick={ () => {
                            const book = {
                                id: this.state.id,
                                name: this.state.name,
                                author: this.state.author,
                                date: this.state.date,
                                rate: this.state.rate,
                                image: this.state.image,
                            };
                            this.state.id === ( -1 ) ? addBook( book ) : updateBook( book );
                            updateAppData({ bookEditor: false });
                        }}>
                        Save book
                    </button>
                    <button
                        className="button is-link is-fullwidth"
                        onClick={ () => {
                            updateAppData({ bookEditor: false });
                        }}>
                        Cancel
                    </button>
                    <button
                        className="button is-link is-fullwidth"
                        onClick={ () => {
                            removeBook( id );
                            updateAppData({ bookEditor: false });
                        }}>
                        Delete book
                    </button>
                </div>
            </form>
        );
    }
}

const putActionsToProps = ( dispatch ) => {
    return {
        removeBook: bindActionCreators( removeBook, dispatch ),
        updateBook: bindActionCreators( updateBook, dispatch ),
        addBook: bindActionCreators( addBook, dispatch ),
    }
};


export default connect( null, putActionsToProps )( BookEditor );