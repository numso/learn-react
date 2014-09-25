/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('react');
var profileImg = require('../../img/profile.gif');

var Profile = React.createClass({
  render: function() {
    return (
      <div id="profile">
        <h3>Profile Page</h3>
        <img src={profileImg}/>
        <strong>Your Name Here</strong>
      </div>
    );
  }
});

module.exports = Profile;
