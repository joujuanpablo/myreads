import React, { Component } from 'react';
import SelectBook from './SelectBook'
//TODO: Proptypes and sortBy

class BookGrid extends Component {

    render() {
        return (
            <ol style={this.props.show} className="books-grid">
                {this.props.books.map((book) => (
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                                <SelectBook book={book} onChangeShelf={this.props.onChangeShelf}/>
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