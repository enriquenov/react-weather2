var React = require('react');
var Nav = require('./Nav');
var Home = require('./Home');
var Forecast = require('./Forecast');
var ReactRouter = require('react-router-dom');
var BrowserRouter = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route>
            <Nav />
          </Route>
          <Route>
            <Home />
          </Route>
        </div>
      </BrowserRouter>
    )
  }
}

module.exports = App;
