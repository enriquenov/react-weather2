var React = require('react');
import { Button } from 'reactstrap';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <h1 className="header">Enter a City and State</h1>
        <input className="search" placeholder="St. George, Utah" />
        <Button color="success">Get Weather</Button>
      </div>
    )
  }
}

module.exports = SearchBar;
