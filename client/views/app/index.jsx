/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('react');

var Header = require('../header');
var Nav = require('../navigation');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header/>
        <div className="row">
          <div className="small-3 column">
            <Nav/>
          </div>
          <div className="small-9 column">
            <this.props.activeRouteHandler/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;
