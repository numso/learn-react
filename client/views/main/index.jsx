/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('react');

var Nav = require('../navigation');

var App = React.createClass({
  render: function() {
    return (
      <div>
        possible header somewhere
        <div className="row">
          <div className="small-6 column">
            <Nav/>
          </div>
          <div className="small-6 column">
            <this.props.activeRouteHandler/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
