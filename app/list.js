import React from 'react';

export default class ListItem extends React.Component {

  render () {
    return <li>
      <p>{this.props.name}</p>
    </li>;
  }

}