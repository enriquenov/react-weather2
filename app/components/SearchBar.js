var React = require('react');
var PropTypes = require('prop-types');

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    };
    this.handleSubmitCity = this.handleSubmitCity.bind(this);
    this.handleUpdateCity = this.handleUpdateCity.bind(this);
  }

  handleUpdateCity(event) {
    var city = event.target.value;
    this.setState(function(){
      return {
        zipcode: city
      }
    })
  }

  handleSubmitCity() {
    this.props.onSubmitCity(this.state.city)

    this.setState(function(){
      return {
        zipcode: ''
      };
    })
  }

  render() {
    return (
      <div
        className="search-bar"
        style={{flexDirection: this.props.direction}}>
        <input
          type="text"
          autoComplete="off"
          className="search"
          onChange={this.handleUpdateCity}
          placeholder="St. George, Utah"
          value= {this.state.zipcode} />
        <button
          type="button"
          className="btn btn-success"
          onClick={this.handleSubmitCity}>
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
