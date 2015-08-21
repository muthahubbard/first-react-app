import React from 'react';
import FilterDataButton from './filter-data-button';

export default class SearchBar extends React.Component {
  
  // = (e) => requires ES7 - es7.classProperties but means you dont have to use .bind(this)
  inputChangeEvent (e)  {
    /// callback to parent via props
    /// e.terget.value || this.refs.searchInput.getDOMNode().value
    this.props.onUserInputChangeCallback(this.refs.searchInput.getDOMNode().value);
  }

  filterDataButtonClick (tag) {
    this.props.onTagButtonClickCallback(tag);
  }

  render () {

    var tagFilterButtons = this.props.tagData.map( (tag) => {
      return <FilterDataButton text={tag} value={tag} clickCallBack={this.filterDataButtonClick.bind(this)} />
    });

    return <div>
      <FilterDataButton text="All" value="all" clickCallBack={this.filterDataButtonClick.bind(this)} />
      {tagFilterButtons}

      <form>
        <label>Filter Data</label>
        <input type="text" ref="searchInput" onChange={this.inputChangeEvent.bind(this)} />
      </form>
    </div>;
  }
}