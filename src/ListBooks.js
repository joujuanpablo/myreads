import React, { Component } from 'react';
import BookShelf from './BookShelf';
import OpenSearch from './OpenSearch';
import propTypes from 'prop-types';

class ListBooks extends Component {
    state = {
    }
    
    static propTypes = {
        books: propTypes.array.isRequired,
        onChangeShelf: propTypes.func.isRequired,
    }

    render() {
        return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf books={this.props.books} onChangeShelf={this.props.onChangeShelf}/>
                <OpenSearch/>
          </div>
        </div>
        )
    }
}  

export default ListBooks 