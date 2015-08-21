import React from 'react';

export default class FilterDataButton extends React.Component {

  clickEvent (e) {
    this.props.clickCallBack(this.props.value);
  }

  render() {
    return <button value="this.props.value" onClick={this.clickEvent.bind(this)}>{this.props.text}</button>
  }

}