import React from 'react';
/// import single function from api.js
import ListItem from './list';

export default class ListContainer extends React.Component {

  render () {

    var family = this.props.apiData.map( (person) => {
      return <ListItem name={person.name} />;
    });

    return <div className="list-wrapper">
      <p>The search term is: {this.props.searchText}</p>
      <ul>
        {family}
      </ul>
    </div>
  }

}
