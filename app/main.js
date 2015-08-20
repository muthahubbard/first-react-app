//import 'fetch'; // planning to use fetch to hookup proper api
import React from 'react';
import _ from 'lodash';
/// import named funciton
import {getFamilyData} from './api';
/// import default 
import SearchBar from './search-bar';
import ListContainer from './list-container';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      apiData: [],
      orginalApiData: [],
      searchString: ''
    };
  }

  /// = (e) => requires ES7 - es7.classProperties but means you dont have to use .bind(this)
  handleSearchInputChange (searchText) {
   this.setState( { searchString: searchText } );
 
   if(searchText.length === 0) {
    /// revert to original data
    this.loadData();
   } else {
   
    var filterApiData = _.filter(this.state.orginalApiData, function(person) {
      return (person.name.includes(searchText) || person.age === parseInt(searchText, 10));
    });

    this.setState( {apiData: filterApiData} );
   }

  }

  loadData() {
    getFamilyData().then( (data) => {
      this.setState( {apiData: data} );
      this.setState( {orginalApiData: data} ); 
    });
  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return <div className="wrapper">
      <h1>Hello React</h1>
      <SearchBar onUserInputChangeCallback={this.handleSearchInputChange.bind(this)} />
      <ListContainer searchText={this.state.searchString} apiData={this.state.apiData} />
    </div>
  }
}

React.render(<App />, document.getElementById('app'));
