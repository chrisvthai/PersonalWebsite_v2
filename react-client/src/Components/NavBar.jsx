import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {value: 'about'};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange (event, value)  {
		this.setState({ value: value });
		console.log(this.state.value);
	};

	render() {
		//const { classes } = this.props;
		//const { value } = this.state;

		return (
			<div>
				<AppBar position="static" style={{backgroundColor: "#6f6f70", boxShadow: "none"}}>
					<Tabs value={this.state.value} onChange={this.handleChange} centered style={{color: "#212121"}}>
						<Tab value='about' label="About" />
						<Tab value='work' label="My Work" />
						<Tab value='projects' label="My Projects" />
						<Tab value='forfun' label="For Fun" />
					</Tabs>
				</AppBar>
			</div>
		)
	}
}

export default NavBar;


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