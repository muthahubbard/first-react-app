import 'fetch';
import React from 'react';
import {getFamilyData} from './api';
// import default 
import SearchBar from './search-bar';
import ListContainer from './list-container';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      apiData: []
    };
  }

  componentDidMount() {
    getFamilyData().then( (data) => {
      this.setState( {apiData: data} );
    });
  }

  render() {
    return <div className="wrapper">
      <h1>Hello React</h1>
      <SearchBar />
      <ListContainer apiData={this.state.apiData} />
    </div>
  }
}

React.render(<App />, document.body);

/*
getFamilyData().then( (member) => {
 console.log(member)
});
*/