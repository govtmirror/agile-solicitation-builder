var React = require('react');
var ReactDOM = require('react-dom');

// Dependencies
var View = require('react-flexbox');

// Bootstrap
var PageHeader = require('react-bootstrap').PageHeader;

// Router stuff
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var IndexLink = require('react-router').IndexLink;
var Redirect = require('react-router').Redirect;

// Custom elements
var Welcome = require('./welcome');
var Request = require('./request');
var RequestOverview = require('./request_overview');
var Question = require('./question');
var Results = require('./results');

var App = React.createClass({
	render: function() {
		var appStyle = {
			padding: 8,
		};
		var inheritStyle = {
			color: "inherit",
			textDecoration: "inherit",
		};

		return (
			<View column style={appStyle}>
				<View>
					<PageHeader>
						<IndexLink to="/" style={inheritStyle}>Playbook in Action</IndexLink>
					</PageHeader>
				</View>
				{this.props.children}
			</View>
		);
	},
});

ReactDOM.render(
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Welcome} />
			<Route path="rfp/:id" component={Request}>
				<IndexRoute component={RequestOverview} />
				<Route path="question/:qid" component={Question} />
				<Route path="results" component={Results} />
			</Route>
		</Route>
	</Router>,
	document.getElementById('mount')
);