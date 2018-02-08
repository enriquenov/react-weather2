var React = require('react');

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <input className="search" placeholder="St. George, Utah" />
        <button type="button" className="btn btn-success">Get Weather</button>
      </div>
    )
  }
}

module.exports = SearchBar;
