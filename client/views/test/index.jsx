/**
 * @jsx React.DOM
 */

var React = require('react');

var Toggle = require('./toggle');
var AssignmentList = require('./assignment-list');
var AssignmentForm = require('./assignment-form');

var Test = React.createClass({

  getInitialState: function() {
    return {
      assignments: []
    };
  },

  addAssignment: function(assignment) {
    var newAssignments = this.state.assignments.concat([assignment]);
    this.setState({
      assignments: newAssignments
    });
  },

  render: function() {
    return (
      <div>
        <div>This is my test area. just going through Ryan Florences stuff for a bit.</div>
        <hr/>
        <Toggle summary="Tacos">
          <p>I like to eat them.</p>
          <p>They are so good.</p>
        </Toggle>



        <div>
          <h1>Assignment Form</h1>
          <AssignmentForm onCreate={this.addAssignment}/>
          <AssignmentList assignments={this.state.assignments}/>
        </div>



      </div>
    );
  }

});

module.exports = Test;
