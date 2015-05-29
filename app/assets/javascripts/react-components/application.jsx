// React stuff
var React = require('react');

//Routing stuff
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

//Partials
var Home = require('./views/home.jsx');
var Header = require('./views/shared/header.jsx');
var About = require('./views/about.jsx');
var ProtoPane = require('./protoPane.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header></Header>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Home}/>
    <Route name="/about" handler={About}/>
  </Route>
);


Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});
