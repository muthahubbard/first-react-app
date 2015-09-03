import React from 'react';

export default class MyAltContainerComponent extends React.Component {

  onClick() {
    console.log('clicked');
    this.props.MyActions.search('sdsdsdsdsds');
  }

  render () {
    console.log(this.props);

    return <div>
      <h3>This is a wrapped component using <a href="http://alt.js.org/docs/components/altContainer/">AltContainer</a></h3>
      <p>{this.props.test}</p>
      <button onClick={this.onClick.bind(this)}>Call Action change testing-testing</button>
      </div>
  }

}