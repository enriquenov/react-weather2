var React = require('react');
var SearchBar = require('./SearchBar');

function Home(props) {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: "url('app/images/pattern.svg')",
        height: "800px"}}>
      <h1 className="header">Enter a City and State</h1>
      <SearchBar
        direction='column'
        onSubmitCity={(city) => {
          this.props.history.push({
            pathname: 'forecast',
            search: '?city' + city
          });
        }}
        zipcode={123}/>
    </div>
  )
}

Home.propTypes = {
  history: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired
  })
}

module.exports = Home;
