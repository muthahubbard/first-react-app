import React from 'react';
import {Link} from 'react-router';
import FamilyActions from './actions/my-actions';

export default class ListItem extends React.Component {

  constructor (props) {
    super(props);
    this.state = { cssClass: 'card__item' }; 
  }

  onClickEvent () {
    
    FamilyActions.search('sjaijsiajs');

    this.setState({ cssClass:  'card__item active' } );
  }

  render () {
    return <li className={this.state.cssClass} onClick={this.onClickEvent.bind(this)}>
        <Link to="details"  params={{ name: this.props.name }}>
          Name: {this.props.name} - Age: {this.props.age}</Link>
    </li>;
  }

}