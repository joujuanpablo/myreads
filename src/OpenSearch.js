import React, { Component } from 'react';
// TODO: use the Link component from react-router-dom to make the button take the user to the search page
class OpenSearch extends Component {
    render(){
        return(
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
        )
    }
}

export default OpenSearch;