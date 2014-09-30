/**
 * @jsx React.DOM
 */

/* jshint node:true */
'use strict';

var React = require('react');
window.React = React;

var {Routes, Route, DefaultRoute, NotFoundRoute} = require('react-router');

var App = require('./app');
var Inbox = require('./inbox');
var Contacts = require('./contacts');
var Profile = require('./profile');
var Settings = require('./settings');
var Test = require('./test');

var NotFound = require('./not-found');

var routes = (
  <Routes>
    <Route path="/" handler={App}>
      <DefaultRoute name="inbox" handler={Inbox} />
      <Route name="contacts" path="contacts" handler={Contacts}/>
      <Route name="calendar" path="calendar" handler={Contacts}/>
      <Route name="profile" path="profile" handler={Profile}/>
      <Route name="settings" path="settings" handler={Settings}/>
      <Route name="test" path="test" handler={Test}/>
    </Route>
    <NotFoundRoute handler={NotFound}/>
  </Routes>
);

React.renderComponent(routes, document.body);


// <this.props.activeRouteHandler/>

// <Routes>
//   <Route path="/" handler={App}>
//     <DefaultRoute handler={Home} />
//     <Route name="about" handler={About} />
//     <Route name="users" handler={Users}>
//       <Route name="recent-users" path="recent" handler={RecentUsers} />
//       <Route name="user" path="/user/:userId" handler={User} />
//       <NotFoundRoute handler={UserRouteNotFound}/>
//     </Route>
//   </Route>
//   <NotFoundRoute handler={NotFound}/>
//   <Redirect path="company" to="about" />
// </Routes>
