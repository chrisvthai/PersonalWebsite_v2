import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const imgStyle = {
	width: '105px',
	height: '100px',
	padding: '5px',
	display: 'block',
	marginLeft: 'auto',
	marginRight: '15px',
	marginBottom: '-10px',
	borderRadius: '50%',
	display: 'inline-block',
};

const bannerStyle = {
	paddingTop: '25px',
	paddingBottom: '10px',
	backgroundColor: '#6f6f70',
}



class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			photoURL: '../../../public/formalprofpic.jpg',
		}
	}

	render() {
		return (
			<div align="center" style={bannerStyle}>
				<img src={this.state.photoURL} style={imgStyle}/>
				<div style={{display: 'inline-block'}}>
					<Typography variant='display3'>
						Christopher Thai
					</Typography>
					<Typography variant='subheading'>
						Software Developer // Musician // Instructor // Avid PC Gamer
					</Typography>
				</div>
			</div>
		)
	}
}

export default HomePage;