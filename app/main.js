import 'fetch';
import React from 'react';
import _ from 'lodash';
import {getFamilyData} from './api';
// import default 
import SearchBar from './search-bar';
import ListContainer from './list-container';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      apiData: [],
      searchString: ''
    };
  }

  handleSearchInputChange (searchText) {
   this.setState( { searchString: searchText } );
  }

  componentDidMount() {
    getFamilyData().then( (data) => {
      this.setState( {apiData: data} );
    });
  }

  render() {
    return <div className="wrapper">
      <h1>Hello React</h1>
      <SearchBar onUserInputChangeCallback={this.handleSearchInputChange.bind(this)} />
      <ListContainer searchText={this.state.searchString} apiData={this.state.apiData} />
    </div>
  }
}

React.render(<App />, document.body);
