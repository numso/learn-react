/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <ul id="nav" className="side-nav" role="navigation" title="Link List">
       <li role="menuitem"><Link to="inbox">Inbox</Link></li>
       <li role="menuitem"><Link to="contacts">Contacts</Link></li>
       <li role="menuitem"><Link to="profile">Profile</Link></li>
       <li role="menuitem"><Link to="settings">Settings</Link></li>
     </ul>
    );
  }
});

module.exports = Nav;
