import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import ListItem from './list';

export default class ListContainer extends React.Component {

  render () {

    var family = this.props.apiData.map( (person) => {
      return <ListItem name={person.name} age={person.age} />;
    });

    return <div className="row">
      <div className="col-md-12">
      <p>The search term is: {this.props.searchText}</p>
      <ul className="card-list">
        <ReactCSSTransitionGroup transitionName="example">
        {family}
        </ReactCSSTransitionGroup>
      </ul>
      </div>
    </div>
  }

}
