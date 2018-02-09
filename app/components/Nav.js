var React = require('react');
var SearchBar = require('./SearchBar');

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <h1>Weather App - ReactJS</h1>
        <SearchBar direction='row'/>
      </div>
    )
  }
}

module.exports = Nav;
