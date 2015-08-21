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
      searchString: '',
      tagData : []
    };
  }

  filterDataByTag (tag) {
    
    /// should be pushState but just to convey concept
    var tagUrl = '/#!/tag/' + tag;
    window.history.replaceState(null, null, tagUrl);

    if(tag !== 'all') {
      var filteredApiData = _.filter(this.state.orginalApiData, function(person) {
        console.log(person.tags);
        return _.include(person.tags, tag);
      });

      this.setState( {apiData: filteredApiData} );
    } else {
      this.setState( {apiData: this.state.orginalApiData} );
    }

  }

  /// = (e) => requires ES7 - es7.classProperties but means you dont have to use .bind(this)
  handleSearchInputChange (searchText) {
   this.setState( { searchString: searchText } );
 
   if(searchText.length === 0) {
    /// revert to original data
    this.setState( {apiData: this.state.orginalApiData} );
   } else {
   
    /// works for now :) replace later with regex
    var filteredApiData = _.filter(this.state.orginalApiData, function(person) {
      return (person.name.includes(searchText) || person.age === parseInt(searchText, 10));
    });

    this.setState( {apiData: filteredApiData} );
   }

  }

  createUniqueTagArray (data) {

    var tagData = [];

    data.forEach(function(obj, index, array) {
      tagData = _.union(tagData, obj.tags)
    });

    this.setState( {tagData: tagData} );

  }

  loadData() {
    getFamilyData().then( (data) => {
      this.setState( {apiData: data} );
      this.setState( {orginalApiData: data} );
      this.createUniqueTagArray(data);
    });

   

  }

  componentDidMount() {
    this.loadData();
  }

  render() {
    return <div className="wrapper">
      <SearchBar tagData={this.state.tagData} onUserInputChangeCallback={this.handleSearchInputChange.bind(this)} onTagButtonClickCallback={this.filterDataByTag.bind(this)} />
      <ListContainer searchText={this.state.searchString} apiData={this.state.apiData} />
    </div>
  }
}

React.render(<App />, document.getElementById('app'));
