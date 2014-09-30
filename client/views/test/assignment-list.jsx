/**
 * @jsx React.DOM
 */

var React = require('react');

var AssignmentList = React.createClass({

  render: function() {
    var assignments = this.props.assignments.map(function(assignment) {
      return (
        <li key={assignment.id}>
          {assignment.name} - {assignment.points} points
        </li>
      );
    });
    return (
      <ul>
        {assignments}
      </ul>
    );
  }

});

module.exports = AssignmentList;
