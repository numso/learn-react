/**
 * @jsx React.DOM
 */

var React = require('react');

var Message = require('./message');

var MailListView = React.createClass({

  getDefaultProps: function() {
    return {
      messages: []
    };
  },

  render: function() {
    var messages = this.props.messages.map(function (msg, i) {
      msg.key = i;
      msg.clicked = function () {
        this.props.clicked(msg);
      }.bind(this);
      return Message(msg);
    }.bind(this));
    return (
      <div>
        <h3>All Messages</h3>
        {messages}
      </div>
    );
  }

});

module.exports = MailListView;
