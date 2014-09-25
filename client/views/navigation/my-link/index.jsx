/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

var React = require('react');
var {Link, ActiveState} = require('react-router');

var MyLink = React.createClass({

  mixins: [ ActiveState ],

  getInitialState: function () {
    return { isActive: false };
  },

  updateActiveState: function () {
    this.setState({
      isActive: MyLink.isActive(this.props.to, this.props.params, this.props.query)
    });
  },

  render: function() {
    var className = this.state.isActive ? 'active' : '';
    var link = Link(this.props);
    return <li role="menuItem" className={className}>{link}</li>;
  }

});

module.exports = MyLink;
