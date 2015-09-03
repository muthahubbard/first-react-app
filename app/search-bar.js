import React from 'react';
import FilterDataButton from './filter-data-button';
import MyAltContainer from './altContainerTest';

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
      return <FilterDataButton text={tag} value={tag} clickCallBack={this.filterDataButtonClick.bind(this)}  />
    });

    return <section>
      <div class="row">
        <div className="col-md-12">
          <MyAltContainer />
        </div>
       </div>
        <div class="row">
        <div className="col-md-8">
          <div className="btn-group" role="group">
          <FilterDataButton text="All" value="all" clickCallBack={this.filterDataButtonClick.bind(this)} />
          {tagFilterButtons}
          </div>
        </div>
        <div className="col-md-4">
          <form>
            <div className="input-group">
              <span className="input-group-addon"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></span>
              <input type="text" ref="searchInput" placeholder="Search" className="form-control" onChange={this.inputChangeEvent.bind(this)} />
            </div>
          </form>
        </div>
      </div>
      </section>;
  }
}