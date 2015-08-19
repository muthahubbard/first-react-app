import React from 'react';

export default class SearchBar extends React.Component {
  
  // why can't I use inputChangeEvent = (e) => {} and not bind(this) ?
  inputChangeEvent = (e) =>  {
    // callback to parent via props
    // 
    this.props.onUserInputChangeCallback(e.target.value);
  }

  render () {
    return <form>
      <input type="text" ref="searchInput" onChange={this.inputChangeEvent} />
    </form>;
  }
}