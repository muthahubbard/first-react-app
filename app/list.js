import React from 'react';

export default class ListItem extends React.Component {

  render () {
    return <li>
      <p>Name: {this.props.name} - Age: {this.props.age}</p>
    </li>;
  }

}