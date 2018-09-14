import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import { browserHistory } from 'react-router'; // TODO: Migration from react-router v3 to 4?
import HomePage from './HomePage.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import Banner from './Banner.jsx';

import './styles.css'

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="site" style={{backgroundColor: '#e2e2e2'}}>
					<div className="site-content">
						<Banner />
						<NavBar />
						<Route exact path="/" component={HomePage} />
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}

export default App;