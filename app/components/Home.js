var React = require('react');
var SearchBar = require('./SearchBar');

class Home extends React.Component {
  render() {
    return (
      <div style={{backgroundImage: "url('app/images/pattern.svg')"}}>
        <SearchBar />
      </div>
    )
  }
}

module.exports = Home;
