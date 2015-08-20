import React from 'react';

export default class ListItem extends React.Component {

  render () {
    return <li className="card__item">
      Name: {this.props.name} - Age: {this.props.age}
    </li>;
  }

}