/** @jsx React.DOM */
var React = require('react');

(function () {
  'use strict';

  var Content = React.createClass({
    getInitialState: function() {
      return {};
    },
    componentDidMount: function () {},
    componentWillUnmount: function() {},

    render: function() {
      return (
      <div className='welcome'>
          <div className='container type-neutral-11 txt-c pvxxxl'>
            <div className='row'>
              <h1 className='mbn em-high'>Ship Better UI, Quicker</h1>
              <h2 className='mtn type-neutral-6 em-low'>This is everything you need to get started building UI at Pivotal.</h2>
              <img src={'images/img--logo.png'} />
            </div>
          </div>
      </div>
      );
    }
  });

  module.exports = Content;

}());
