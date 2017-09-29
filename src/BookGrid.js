import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
//TODO: Proptypes and sortBy

class BookGrid extends Component {
    state = {
        bookShelf: '',
    }

    handleShelfChange = (shelf, book) => {
        alert(`${book.title} should go to ${shelf}`);
        
        this.setState({ bookShelf: shelf });
        BooksAPI.update(book, this.state.bookShelf);
        
    }

    render() {
        return (
            <ol className="books-grid">
                {this.props.books.map((book) => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                                <div className="book-shelf-changer">
                                <select value={this.state.bookShelf} onChange={(event) => this.handleShelfChange(event.target.value, book)}>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                            <p>{book.shelf}</p>
                        </div>
                    </li>
                ))}
            </ol>
        )
    }
}

export default BookGrid; 