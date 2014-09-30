/**
 * @jsx React.DOM
 */

var React = require('react');
var moment = require('moment');

var MailDetailView = React.createClass({

  getDefaultProps: function() {
    return {
      message: {}
    };
  },

  render: function() {
    var date = moment(this.props.message.sentOn);
    var prettyDate = date.format('MMM D');
    var fromNow = date.fromNow();
    return (
      <div className="msg-detail">
        <button className="tiny" onClick={this.props.dismiss}>Back</button>
        <div className="subject">{this.props.message.subject}</div>
        <div className="meta">
          <div className="author">{this.props.message.author}</div>
          <div className="date">{prettyDate} ({fromNow})</div>
        </div>
        <div>{this.props.message.body}</div>
      </div>
    );
  }

});

module.exports = MailDetailView;
