/** @jsx React.DOM */
var React = require('react');

// npm install --save pui-react-buttons
// uncomment line 6 + 7
// var DefaultButton = require('pui-react-buttons').DefaultButton;
// var PrimaryButton = require('pui-react-buttons').PrimaryButton;

(function () {
  'use strict';

  var Home = React.createClass({

    render: function() {
      return (
        <div>
          <h1>Hello</h1>
        </div>
      );
    }
  });

  module.exports = Home;

}());
