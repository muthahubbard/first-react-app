//import 'fetch'; // planning to use fetch to hookup proper api


import React from 'react';

import _ from 'lodash';

import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import Router from 'react-router';  
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

/// import default 
import SearchBar from './search-bar';
import ListContainer from './list-container';

/// flux / Alt (http://alt.js.org/)
import FamilyStore from './stores/my-store';
import FamilyActions from './actions/my-actions';


class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = FamilyStore.getState();
  }

  componentWillMount () {
    FamilyStore.listen(this.onChange.bind(this));
  }
  componentWillUnmount() {
    FamilyStore.unlisten(this.onChange);
  }

  onChange() {
    this.setState(FamilyStore.getState());
  }

  componentDidMount() {
    FamilyActions.getFamilyDataFromAPI();

  }



  filterDataByTag (tag) {
    
    if(tag !== 'all') {
      var filteredApiData = _.filter(this.state.orginalApiData, function(person) {
        return _.include(person.tags, tag);
      });

      this.setState( {apiData: filteredApiData} );
    } else {
      this.setState( {apiData: this.state.orginalApiData} );
    }

  }

  /// Need to use ALT
  /// = (e) => requires ES7 - es7.classProperties but means you dont have to use .bind(this)
  handleSearchInputChange (searchText) {
   this.setState( { searchString: searchText } );
 
   if(searchText.length === 0) {
    /// revert to original data
    this.setState( {apiData: this.state.orginalApiData} );
   } else {
   
    /// replace lodash with es6 array stuff
    var filteredApiData = _.filter(this.state.orginalApiData, function(person) {
      /// works for now :) replace later with regex
      return (person.name.includes(searchText) || person.age === parseInt(searchText, 10));
    });

    this.setState( {apiData: filteredApiData} );
   }

  }

  render() {
    return <div className="wrapper">
      
      <section className="grid">
        <SearchBar 
          tagData={this.state.tagData} 
          onUserInputChangeCallback={this.handleSearchInputChange.bind(this)} 
          onTagButtonClickCallback={this.filterDataByTag.bind(this)} 
        />
        <ListContainer 
          searchText={this.state.searchString} 
          apiData={this.state.apiData} 
        />
      
          <ReactCSSTransitionGroup component="div" transitionName="example">
          <RouteHandler />
        </ReactCSSTransitionGroup>

      </section>

    </div>
  }
}


class Details extends React.Component {

  constructor (props, context) {
    super(props, context);
  }


  render() {
     var param = this.context.router.getCurrentParams().name;

    return <div className="details__wrapper"><p>Hello Routes - {param}</p></div>;
  }

}

Details.contextTypes = {
    router: React.PropTypes.func.isRequired
  }

let routes = (

    <Route name="app" path="/" handler={App}>
      <Route name="tab" path="/tag/:uid"  />
      <Route name="details" path="/person/:name" handler={Details}  />
    </Route>
);

Router.run(routes, function (Handler) {  
  React.render(<Handler/>, document.getElementById('app'));
});