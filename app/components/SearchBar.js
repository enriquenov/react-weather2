var React = require('react');

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <h1 className="header">Enter a City and State</h1>
        <input className="search" placeholder="St. George, Utah" />
        <button className="btn btn-success">Get Weather</button>
      </div>
    )
  }
}

module.exports = SearchBar;
