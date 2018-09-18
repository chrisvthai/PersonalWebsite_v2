import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
//import { browserHistory } from 'react-router'; // TODO: Migration from react-router v3 to 4?
import HomePage from './HomePage.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Banner from './Banner.jsx';
import About from './About.jsx';
import Work from './Work/Work.jsx';
import Projects from './Projects/Projects.jsx';
import ForFun from './ForFun.jsx';

import './styles.css'

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div className="site" style={{backgroundColor: '#e2e2e2'}}>
					<div className="site-content">
						<Banner />
						<NavBar />
						<Switch>
							<Redirect exact from='/' to='/about' />
							<Route path="/about" component={About} />
							<Route path="/work" component={Work} />
							<Route path="/projects" component={Projects} />
							<Route path="/forfun" component={ForFun} />
						</Switch>
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}

export default App;