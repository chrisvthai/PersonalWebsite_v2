import React, { Component } from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const reactLogo = require('./logos/react.png');
const matuiLogo = require('./logos/matui.png');
const nodejsLogo = require('./logos/nodejs.png');
const reactrouteLogo = require('./logos/reactrouter.png');

const footerStyle = {
	backgroundColor: '#6f6f70',
	padding: '10px'
}

const iconStyle = {
	width: '55px',
	height: '40px',
	padding: '1px',
	display: 'inline-block',
};

const iconStyle2 = {
	width: '52px',
	height: '40px',
	padding: '1px',
	display: 'inline-block',
};

const iconStyle3 = {
	width: '50px',
	height: '40px',
	padding: '1px',
	marginLeft: '10px',
	display: 'inline-block',
};

function MediaIcon(props) {
	return(
		<SvgIcon viewBox='0 0 450 450' style={{transform: 'scale(2.0)'}}>
			<path d={props.name} />
		</SvgIcon>
	);
}


const fbDir = `M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085
	h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882
	v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955
	l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087
	c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085
	C408.786,24.662,384.124,0,353.701,0z`

const gitDir = `M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
		c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
		c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
		c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
		c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
		c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
		c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
		c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
		c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
		c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
		c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
		c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
		c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
		c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
		c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
		c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
		c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
		c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
		c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
		C438.536,184.851,428.728,148.168,409.132,114.573z`

const lkDir = `M398.355,0H31.782C14.229,0,0.002,13.793,0.002,30.817v368.471   c0,17.025,14.232,30.83,31.78,30.83h366.573c17.549,0,31.76-13.814,31.76-30.83V30.817C430.115,13.798,415.904,0,398.355,0z    M130.4,360.038H65.413V165.845H130.4V360.038z M97.913,139.315h-0.437c-21.793,0-35.92-14.904-35.92-33.563   c0-19.035,14.542-33.535,36.767-33.535c22.227,0,35.899,14.496,36.331,33.535C134.654,124.415,120.555,139.315,97.913,139.315z    M364.659,360.038h-64.966V256.138c0-26.107-9.413-43.921-32.907-43.921c-17.973,0-28.642,12.018-33.327,23.621   c-1.736,4.144-2.166,9.94-2.166,15.728v108.468h-64.954c0,0,0.85-175.979,0-194.192h64.964v27.531   c8.624-13.229,24.035-32.1,58.534-32.1c42.76,0,74.822,27.739,74.822,87.414V360.038z M230.883,193.99   c0.111-0.182,0.266-0.401,0.42-0.614v0.614H230.883z`

class Footer extends Component {
	render() {
		return (
			<div style={{marginTop: '15px'}}>
			<div name='Frameworks' align='right' style={{transform: 'translateX(-15px)'}}>
				<div style={{display: 'inline-block', position: 'relative', top: '-15px'}}>
					<Typography variant='caption'>
						Made with 
					</Typography>
				</div>
				<div style={{display: 'inline-block', padding: '0px'}}>
					<a href='https://reactjs.org/' target='_blank'><img src={reactLogo} style={iconStyle} /></a>
					<a href='https://material-ui.com/' target='_blank'><img src={matuiLogo} style={iconStyle2} /></a>
					<a href='https://reacttraining.com/react-router/' target='_blank'><img src={reactrouteLogo} style={iconStyle3} /></a>
				</div>
			</div>
			<footer style={footerStyle}>
				<div name='SocialMedia' align='center'>
					<IconButton 
						style={{width: '80px', height: '80px', padding:'0px', margin: '5px'}}
						href='https://www.facebook.com/cthaifood'
						target='_blank' 
						>
						<MediaIcon name={fbDir} />
					</IconButton>
					<IconButton 
						style={{width: '80px', height: '80px', padding:'0px', margin: '5px'}} 
						href="https://github.com/chrisvthai"
						target="_blank"
						>
						<MediaIcon name={gitDir} />
					</IconButton>
					<IconButton 
						style={{width: '80px', height: '80px', padding:'0px', margin: '5px'}}
						href='https://www.linkedin.com/in/christopher-van-thai/'
						target='_blank'
						>
						<MediaIcon name={lkDir} />
					</IconButton>				
				</div>
				<Typography variant='caption' align='center'>
					&copy; 2018 Christopher Thai
				</Typography>
			</footer>
			</div>
		)
	}
}

export default Footer;