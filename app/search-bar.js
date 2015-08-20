import React from 'react';

export default class SearchBar extends React.Component {
  
  // = (e) => requires ES7 - es7.classProperties but means you dont have to use .bind(this)
  inputChangeEvent (e)  {
    /// callback to parent via props
    /// e.terget.value || this.refs.searchInput.getDOMNode().value
    this.props.onUserInputChangeCallback(this.refs.searchInput.getDOMNode().value);
  }

  render () {
    return <div>
      <button>All</button>
      <button>Male</button>
      <button>Female</button>
      <form>
        <label>Filter Data</label>
        <input type="text" ref="searchInput" onChange={this.inputChangeEvent.bind(this)} />
      </form>
    </div>;
  }
}