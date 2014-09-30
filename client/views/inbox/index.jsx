/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

require('./style');

var React = require('react');
var axios = require('axios');

var MailListView = require('./mail-list-view');
var MailDetailView = require('./mail-detail-view');

var Inbox = React.createClass({

  getInitialState: function() {
    return {
      messages: [],
      message: null,
    };
  },

  componentDidMount: function() {
    axios.get('/messages').then(function (resp) {
      this.setState({
        messages: resp.data
      });
    }.bind(this));
  },

  choose: function (msg) {
    this.setState({
      message: msg
    });
  },

  dismiss: function (msg) {
    this.setState({
      message: null
    });
  },

  render: function() {
    var list, detail;
    if (this.state.message) {
      detail = (<MailDetailView message={this.state.message} dismiss={this.dismiss}/>);
    } else {
      list = (<MailListView messages={this.state.messages} clicked={this.choose}/>);
    }
    return (
      <div id="inbox">
        {list}
        {detail}
      </div>
    );
  }
});

module.exports = Inbox;
