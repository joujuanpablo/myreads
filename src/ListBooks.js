import React, { Component } from 'react';
import BookShelf from './BookShelf';
import OpenSearch from './OpenSearch'

class ListBooks extends Component {
    state = {
    }

    render() {
        return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf books={this.props.books}/>
                <OpenSearch/>
          </div>
        </div>
        )
    }
}  

export default ListBooks 