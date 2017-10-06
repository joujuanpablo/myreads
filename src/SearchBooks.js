import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import BookGrid from './BookGrid';
import * as BooksAPI from './BooksAPI'


class SearchBooks extends Component {
    state = {
        query: '',
        booksResults: [],
        errorMessageDisplay: 'none',
    }
    updateQuery(query) {
        this.setState({ query: query.trim() })
        if (query) {
            BooksAPI.search(query, 20).then(results => {
                results = results.map(book => {
                    book.shelf = "none";
                    this.props.books.map(v => {
                        if (book.id === v.id) {
                            book.shelf = v.shelf
                        }
                    })
                    return book;  
                })
                this.setState(state => ({
                    booksResults: results,
                    errorMessageDisplay: 'none',
                    allBooksDisplay: 'none',
                }));
            }).catch(() => this.setState(state => ({
                booksResults: [],
                errorMessageDisplay: 'block',
            })))
        } else {
            this.setState({
                errorMessageDisplay: 'none'
            })

        }
    }

    render() {
        const { query } = this.state;

        //TODO: apply sorting of books using sort-by
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                                          You can find these search terms here:
                                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
      
                                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                                          you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event => this.updateQuery(event.target.value))}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <h1 style={{ display: this.state.errorMessageDisplay }}>No results</h1>
                    <BookGrid books={this.state.booksResults} onChangeShelf={this.props.onChangeShelf} />
                </div>
            </div>
        )
    }
}

export default SearchBooks;