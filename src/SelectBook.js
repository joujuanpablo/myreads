import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class SelectBook extends Component {
    state ={
        bookShelf: '',
    }

    handleShelfChange = (e) => {
        const { value: shelf} = e.target
        this.setState({bookShelf: shelf});
        this.props.onChangeShelf(shelf, this.props.book);
        
    }

    render() {
        return(
            <div className="book-shelf-changer">
                <select value={this.props.book.shelf} onChange={this.handleShelfChange}>
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