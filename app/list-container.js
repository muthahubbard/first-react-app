import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import ListItem from './list';

import FamilyStore from './stores/my-store';


export default class ListContainer extends React.Component {

  constructor (props) {
    super(props);

    this.state = FamilyStore.getState();
    console.log(this.state);
  }


  componentWillMount() {
    /// listen for changes in store
    FamilyStore.listen(this.onChange.bind(this));
  }
  componentWillUnmount() {
    FamilyStore.unlisten(this.onChange);
  }

  onChange() {
    console.log('store has changed');
    console.log(FamilyStore.getState());
    
    this.setState(FamilyStore.getState());
  }


  render () {

    var family = this.props.apiData.map( (person, index) => {
      return <ListItem key={index} name={person.name} age={person.age} />;
    });

    return <div className="row">
      <div className="col-md-12">
      <p>The search term is: {this.props.searchText} --- {this.state.test}</p>
      <ul className="card-list">
        <ReactCSSTransitionGroup transitionName="example">
        {family}
        </ReactCSSTransitionGroup>
      </ul>
      </div>
    </div>
  }

}
