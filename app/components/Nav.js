var React = require('react');
var SearchBar = require('./SearchBar');
var PropTypes = require('prop-types');

function Nav(props) {
  return (
    <div className="nav">
      <h1>Weather App - ReactJS</h1>
      <SearchBar
        direction='row'
        onSubmitCity={(city) => {
          props.history.push({
            pathname: 'forecast',
            search: '?city' + city
          });
        }}
        zipcode={123}/>
    </div>
  )
}

Nav.propTypes = {
  history: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired
  })
}

module.exports = Nav;
