/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./main.styl');

var React = require('React');

var App = React.createClass({
  render: function() {
    return (
      <div>hey there!</div>
    );
  }
});

React.renderComponent(<App/>, document.body);
