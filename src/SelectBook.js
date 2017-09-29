import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class SelectBook extends Component {
    state ={
        bookShelf: '',
    }

    handleShelfChange = (shelf, book) => {
        alert(`${book.title} should go to ${shelf}`);
        
        this.setState({ bookShelf: shelf });
        BooksAPI.update(book, this.state.bookShelf);
        
    }

    render() {
        return(
            <div className="book-shelf-changer">
                <select value={this.state.bookShelf} onChange={(event) => this.handleShelfChange(event.target.value, this.props.book)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

}

export default SelectBook;