var React = require('react');
var SearchBar = require('./SearchBar');

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <h1>Clever Title</h1>
        <SearchBar direction='row'/>
      </div>
    )
  }
}

module.exports = Nav;
