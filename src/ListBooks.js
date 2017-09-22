import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
                <BookShelf/>
                <OpenSearch/>
          </div>
        </div>
        )
    }
}  

export default ListBooks 