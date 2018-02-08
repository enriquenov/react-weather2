var React = require('react');
var SearchBar = require('./SearchBar');

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
}

module.exports = Home;
