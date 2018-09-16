import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import pdfFile from '../../../public/Resume.pdf'

import { Link } from 'react-router-dom';

const textstyles = {
	width: '500px',
	textAlign: 'left',
	margin: '0 auto',
	marginTop: '30px',
}

const dividerStyles = {
	marginTop: '10px',
	marginBottom: '10px',
}

class About extends React.Component {
	constructor(props) {
		super(props)
		console.log('Match URL is ' + this.props.match.url);
		console.log('Path is ' + this.props.location.pathname);
	}

	render() {
		const { match, location, history } = this.props;
		return (
			<div>
				<div style={textstyles}>
					<Typography variant="body2" align="left">
						Hello there! I am a 4th year computer science and engineering student at UCLA
						with a passion for learning new things and expanding my horizons! 
					</Typography>
					<Typography variant="body2" align="center" style={dividerStyles}> &#9679; &emsp; &#9679; &emsp; &#9679;</Typography> 
					<Typography variant="body2" align="left">
						Most recently, I was an instructor at iD Tech Camps for the past two summers teaching a variety of
						weekly courses to high schoolers, such as Machine Learning, Cryptography and Cybersecurity,
						Unity Game Design, and C++ Programming.
					</Typography>
					<Typography variant="body2" align="center" style={dividerStyles}> &#9679; &emsp; &#9679; &emsp; &#9679;</Typography>
					<Typography variant="body2" align="left">
						I also happen to be an amateur musician! I play the guitar, double bass, and electric bass, and I
						am currently the Chamber Music Director at the Game Music Ensemble at UCLA (GME@UCLA). I get to do
						a lot of cool stuff, like arrange and compose chamber pieces for our chamber program, and organize
						performances with organizations within and outside of UCLA.
					</Typography>
					<Typography variant="body2" align="center" style={dividerStyles}> &#9679; &emsp; &#9679; &emsp; &#9679;</Typography>
					<Typography variant="body2" align="left">
						I love learning and experiencing new things. Learn more about me by checking out my 
						resume <a href={pdfFile} target="_blank">here</a>, or by browsing my different projects!
					</Typography>
				</div>
				<Route path={match.url + '/testcell'} component={TestCell}/>
				<Link to={match.url + '/testcell'}> Link to TestCell </Link>
				<div> You are now at {location.pathname} </div>
				<div> The matched url is {match.url} </div>
			</div>
		)
	}
}

class TestCell extends React.Component {
	render() {
		return (
			<div> This is a TestCell! </div>
		)
	}
}

export default withRouter(About);