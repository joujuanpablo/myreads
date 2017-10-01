import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import BookGrid from './BookGrid';

class BookShelf extends Component {
    state = {
      shelves: [
        {
          name:'Currently Reading',
          id: 'currentlyReading',
        }, 
        {
          name: 'Want to Read',
          id: 'wantToRead',         
        }, 
        {
          name: 'Read',
          id: 'read',        
        },
      ]
    }

 
    render() {
      let showingBooks      
        return (
          <div>
            {this.state.shelves.map((shelf) => (
              <div className="bookshelf" key={shelf.id} id={shelf.id}>
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                    <BookGrid books={this.props.books.filter((c) => c.shelf === shelf.id)} onChangeShelf={this.props.onChangeShelf} shelf={shelf.id}></BookGrid>                  
                </div>
              </div>
            ))}
          </div>
        )
    }
}

export default BookShelf;