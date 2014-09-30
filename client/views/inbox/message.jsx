/**
 * @jsx React.DOM
 */

var React = require('react');
var moment = require('moment');

var Message = React.createClass({

  propTypes: {
    unRead: React.PropTypes.bool,
    author: React.PropTypes.string,
    subject: React.PropTypes.string,
    sentOn: React.PropTypes.number,
    clicked: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      unRead: true,
      author: 'Bubba',
      subject: 'Talk to me',
      sentOn: +new Date()
    };
  },

  clicked: function () {
    this.props.clicked();
  },

  render: function() {
    var now = moment();
    var prettyDate = moment(this.props.sentOn);
    var format = 'foo';
    if (now.date() === prettyDate.date()) {
      format = 'HH:mm a';
    } else if (now.year() === prettyDate.year()) {
      format = 'MMM D';
    } else {
      format = 'M/D/YY';
    }
    var myClass = this.props.unRead ? 'msg unread' : 'msg';
    return (
      <div className={myClass} onClick={this.clicked}>
        <div className="author">{this.props.author}</div>
        {this.props.subject}
        <div className="date">{prettyDate.format(format)}</div>
      </div>
    );
  }

});

module.exports = Message;
