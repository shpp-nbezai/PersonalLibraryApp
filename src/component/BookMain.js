import React, { Component } from 'react';
import Datasort from "react-data-sort";
import BooksList from "./BooksList";
import GoToPage from "./GoToPage";
import PageIndicator from "./PageIndicator";
import Navigation from "./Navigation";
import NavBar from "./NavBar";
import connect from "react-redux/es/connect/connect";

import { bindActionCreators } from "redux";
import { setActiveBook } from "../store/actions";

class BooksMain extends Component {
    constructor( props ) {
        super( props );
        const initItemsPerPage = 5;
        const initPages = Math.ceil( props.books.length / initItemsPerPage );

        this.state = {
            sortBy: "id",
            direction: "asc",
            itemsPerPage: initItemsPerPage,
            activePage: 0,
            bookEditor: false,
            paginate: true,
            searchQuery: '',
            data: props.books,
            maxRate: 5, //maximum book rating value
            pages: initPages,
        };

    }

    componentWillReceiveProps( nextProps ) {
        const {
            books,
        } = nextProps;

        this.setState({
            data: books,
            }
        );
    }

    addNewBook = () => {
        const {
            setActiveBook,
        } = this.props;

        //"-1" not existing array index, used as a flag that this is a new book.
        setActiveBook( -1 );

        this.setState({
            bookEditor: true
        });
    };

    getBook = id => {
        let book = {};

        //"-1" not existing array index, used as a flag that this is a new book.
        if ( id === (-1) ) {
            book = {
                id: -1,
                name: 'enter new book',
                author: '',
                date: '',
                rate: 0,
                image: ''
            };
        }

        this.state.data.forEach( item => {
            if ( item.id === id ) {
                book = item;
            }
        });

        return book;
    };

    updateAppData = config => {
        this.setState( config );
    };

    handleChangeSearchQuery = e => {
        this.setState({
            searchQuery: e.target.value
        });
    };

    enableBookEditor = () => {
        this.setState({
            bookEditor: true
        });
    };

    disableBookEditor = () => {
        this.setState({
            bookEditor: false,
            activeBook: null
        });
    };

    setSortBy = sortBy => {
        this.setState({ sortBy });
    };

    toggleDirection = () => {
        this.setState({
            direction: this.state.direction === "asc" ? "desc" : "asc"
        });
    };

    goToPage = activePage => {
        this.setState({ activePage });
    };

    setPaginate = itemsPerPage => {
        const newPages = Math.ceil( this.state.data.length / itemsPerPage );

        this.setState({
            itemsPerPage: itemsPerPage,
            pages: newPages,
        });
    };

    prevPage = () => {
        this.setState(({ activePage }) => ({
            activePage: activePage - 1
        }));
    };

    nextPage = () => {
        this.setState(({ activePage }) => ({
            activePage: activePage + 1
        }));
    };

    render() {
        const {
            activeBook,
        } = this.props;

        const {
            sortBy,
            direction,
            activePage,
            itemsPerPage,
            searchQuery,
            paginate,
            data,
            bookEditor,
            maxRate,
            pages,
        } = this.state;

        let currentBook = this.getBook( activeBook );

        return (
            <Datasort
                data = { data }
                sortBy = { sortBy }
                direction = { direction }
                activePage = { activePage }
                searchQuery = { searchQuery }
                itemsPerPage = { itemsPerPage }
                paginate = { paginate }
                pages = { pages }
                render = {({ data }) => {
                    return (
                        <div className="content">
                            <div className="book-list-wrapper">
                                <section className="section is-gapless">
                                    <BooksList
                                        data = { data }
                                        updateAppData = { (config) => this.updateAppData(config) }
                                        enableBookEditor = { this.enableBookEditor }
                                        disableBookEditor = {  this.disableBookEditor }
                                        addNewBook = { this.addNewBook }
                                    />
                                </section>

                                <div className="level">
                                    <div className="level-item">
                                        <GoToPage
                                            goToPage = { this.goToPage }
                                            pages = { pages }
                                        />
                                    </div>
                                    <div className="level-item">
                                        <PageIndicator
                                            pages = { pages }
                                            activePage = { activePage }
                                        />
                                    </div>
                                    <div className="level-item">
                                        <Navigation
                                            activePage = { activePage }
                                            goToPage = { this.goToPage }
                                            nextPage = { this.nextPage }
                                            prevPage = { this.prevPage }
                                            pages = { pages }
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="navbar has-background-primary">
                                <NavBar
                                    handleChangeSearchQuery = { (e) => this.handleChangeSearchQuery(e) }
                                    searchQuery = { searchQuery }
                                    setPaginate = { this.setPaginate }
                                    setSortBy = { this.setSortBy }
                                    sortBy = { sortBy }
                                    direction = { direction }
                                    toggleDirection = { this.toggleDirection }
                                    bookEditor = { bookEditor }
                                    book = { currentBook }
                                    maxRate = { maxRate }
                                    updateAppData = { (data) => this.updateAppData(data) }
                                />
                            </div>
                        </div>
                    );
                }}
            />
        );
    }

}

const putStateToProps = ( state ) => {
    return {
        books: state.books,
        activeBook: state.activeBook,
    }
};

const putActionsToProps = ( dispatch ) => {
    return {
        setActiveBook: bindActionCreators( setActiveBook, dispatch )
    }
};

export default connect( putStateToProps, putActionsToProps )( BooksMain );