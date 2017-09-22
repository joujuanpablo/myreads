import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// TODO: use the Link component from react-router-dom to make the button take the user to the search page
class OpenSearch extends Component {
    render(){
        return(
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
        )
    }
}

export default OpenSearch;