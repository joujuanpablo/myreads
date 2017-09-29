import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import './App.css'

class BooksApp extends Component {
    state = {
        books: [
            {
                coverImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
                shelf: 'currentlyReading',
                id: '1',
            },
            {
                coverImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
                title: '1776',
                author: 'David McCullough',
                shelf: 'currentlyReading',
                id: '2',
            },
            {
                coverImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
                shelf: 'currentlyReading',
                id: '3',
            },
            {
                coverImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                title: 'To Kill a Mockingbird',
                author: 'Harper Lee',
                shelf: 'currentlyReading',
                id: '4'
            },
        ]

    }
    //TODO: grab books data from the API
    // updateShelf = (book) => {
    //     this.setState((state)=>({
    //         books: state
    //     }))
    // }

    render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <ListBooks books={this.state.books}/>
          )}/>
          <Route exact path='/search' render={() => (
            <SearchBooks books={this.state.books}/>
          )}/>     
      </div>
        )
    }
}

export default BooksApp