import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';




class NavBar extends Component {

	/*static propTypes = {
		match: PropTypes.object.isRequired,
		location: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired,
	};*/

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	};

	handleChange (event, value)  {
		console.log('Location of navbar is ' + this.props.location.pathname);
		//console.log('Match URL is ' + this.props.match.url);
		//console.log('Match path is ' + this.props.match.path);
	};

	getFirstPath(url) {
    return '/' + url.split('/')[1]
	}

	render() {
		const location = this.props.location.pathname;
		return (
			<div>
				<AppBar position="static" style={{backgroundColor: "#6f6f70", boxShadow: "none"}}>
					<Tabs value={this.getFirstPath(location)} onChange={this.handleChange} centered style={{color: "#212121"}}>
						<Tab value='/about' label="About" component={Link} to='/about' />
						<Tab value='/work' label="My Work" component={Link} to='/work' />
						<Tab value='/projects' label="My Projects" component={Link} to='/projects' />
						<Tab value='/forfun' label="For Fun" />
					</Tabs>
				</AppBar>
			</div>
		)
	}
}

export default withRouter(NavBar);


/*
class NavBar extends Component {
	render() {
		return (
			<header>
				<ul id="headerButtons">
					<li className="navButton"><Link to="">Home</Link></li>
				</ul>
			</header>
		)
	}
}
*/