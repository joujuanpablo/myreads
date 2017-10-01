import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css';


class BooksApp extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books });
        })
    }
    changeShelf = (newShelf, book) => {
        console.log(`${book.title} should go to ${newShelf}`)
        BooksAPI.update(book, newShelf)
        BooksAPI.getAll().then((books) => {
            this.setState({ books });
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <ListBooks onChangeShelf={this.changeShelf} books={this.state.books} />
                )} />
                <Route exact path='/search' render={() => (
                    <SearchBooks onChangeShelf={this.changeShelf} books={this.state.books} />
                )} />
            </div>
        )
    }
}

export default BooksApp;