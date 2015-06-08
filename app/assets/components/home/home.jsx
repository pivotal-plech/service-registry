/** @jsx React.DOM */
var React = require('react');
var DefaultButton = require('pui-react-buttons').DefaultButton;
var PrimaryButton = require('pui-react-buttons').PrimaryButton;

(function () {
  'use strict';

  var Home = React.createClass({

    render: function() {
      return (
        <div className="bg-neutral-11">
          <div className="animated fadeInUp pvxxxl">
            <div className="container">
              <h1 className="title txt-c em-low mvn type-dark-1">Prototyping with React and Node</h1>
              <p className="h2 txt-c mvn type-dark-3">You can do all sorts of fun things with this!</p>
              <DefaultButton>Default Button</DefaultButton>
              <PrimaryButton>Default Button</PrimaryButton>
            </div>
          </div>
          <hr className="mvn" />
        </div>
      );
    }
  });

  module.exports = Home;

}());
