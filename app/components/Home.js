var React = require('react');
var SearchBar = require('./SearchBar');

class Home extends React.Component {
  render() {
    return (
      <div
        className="home-container"
        style={{
          backgroundImage: "url('app/images/pattern.svg')",
          height: "800px"}}>
        <h1 className="header">Enter a City and State</h1>
        <SearchBar />
      </div>
    )
  }
}

module.exports = Home;
