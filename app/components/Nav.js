var React = require('react');
var SearchBar = require('./SearchBar');

class Nav extends React.Component {
  render() {
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
}

module.exports = Nav;
