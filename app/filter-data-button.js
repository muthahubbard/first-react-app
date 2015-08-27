import React from 'react';
import {Link} from 'react-router';

export default class FilterDataButton extends React.Component {

  clickEvent (e) {
    this.props.clickCallBack(this.props.value);
  }

  render() {
    return <Link to="tab" params={{ uid: this.props.value }} onClick={this.clickEvent.bind(this)} className="btn btn-default">{this.props.text}</Link>
  }

}