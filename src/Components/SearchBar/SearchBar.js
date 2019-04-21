import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search() {
    this.state.searchTerm && this.props.onSearch(this.state.searchTerm);
  }

  handleTermChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
        {/* eslint-disable-next-line */}
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;
