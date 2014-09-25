/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('react');
var MyLink = require('./my-link');

var Nav = React.createClass({
  render: function() {
    var menu = [
      { to: 'inbox',    label: 'Inbox'    },
      { to: 'contacts', label: 'Contacts' },
      { to: 'profile',  label: 'Profile'  },
      { to: 'settings', label: 'Settings' }
    ].map(function (item, i) {
      return (
        <MyLink key={i} to={item.to}>{item.label}</MyLink>
      );
    }.bind(this));
    return (
      <ul id="nav" className="side-nav" role="navigation" title="Link List">
       {menu}
     </ul>
    );
  }
});

module.exports = Nav;
