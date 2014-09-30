/**
 * @jsx React.DOM
 */

var React = require('react');

require('./toggle.styl');

var Toggle = React.createClass({

  getInitialState: function() {
    return {
      showDetails: false
    };
  },

  getDefaultProps: function() {
    return {
      summary: 'Title'
    };
  },

  handleClick: function () {
    this.toggle();
  },

  toggle: function () {
    this.setState({
      showDetails: !this.state.showDetails
    });
    this.refs.details.getDOMNode().focus();
  },

  handleKey: function (e) {
    if (e.keyCode === 32 || e.keyCode === 13) {
      this.toggle();
    }
  },

  render: function() {
    var details = this.state.showDetails ? this.props.children : null;
    return (
      <div className="toggle">
        <div tabIndex="0" onKeyDown={this.handleKey} onClick={this.handleClick}>{this.props.summary}</div>
        <div ref="details" tabIndex="-1">
          {details}
        </div>
      </div>
    );
  }

});

module.exports = Toggle;
