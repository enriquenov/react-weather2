var React = require('react');
var PropTypes = require('prop-types');

class SearchBar extends React.Component {
  render() {
    return (
      <div
        className="search-bar"
        style={{flexDirection: this.props.direction}}>
        <input className="search" placeholder="St. George, Utah" />
        <button
          type="button"
          className="btn btn-success">
            Get Weather
        </button>
      </div>
    )
  }
}

SearchBar.defaultProps = {
  direction: 'column'
}

SearchBar.propTypes = {
  direction: PropTypes.string.isRequired
}

module.exports = SearchBar;
