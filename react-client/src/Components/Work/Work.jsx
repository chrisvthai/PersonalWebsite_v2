import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router'

import list from './work_list.jsx'

const textstyles = {
	width: '75%',
	margin: '0 auto',
	marginTop: '30px',
}

const imgStyle = {
	//display: 'inline-block',
	float: 'left',
	marginRight: '20px',
	marginBottom: '1px',
	maxWidth: '90%',
	minWidth: '150px',
	height: 'auto',
}

const dividerStyles = {
	marginTop: '10px',
	marginBottom: '10px',
}

class Work extends Component {

	constructor(props) {
		super(props)
		console.log('Match URL is ' + this.props.match.url);
		console.log('Path is ' + this.props.location.pathname);
	}

	render() {
		return (
			<div style={textstyles}>
				
				<JobCard job={list.iDTech} />
				<JobCard job={list.GME} />
				<JobCard job={list.galileo} />
			</div>
		)
	}
}

class JobCard extends Component {
	constructor(props) {
		super(props);
		console.log('Image path is ' + this.props.imgPath);
	}

	render() {
		return (
			<div style={{marginBottom: '50px'}}>
				
				<div style={{maxWidth: '30%'}}>
					<img src={this.props.job.imgPath} style={imgStyle}/>
				</div>	
				<div>
					<Typography variant='title' align='left'>
						{this.props.job.company}
					</Typography>
					<Typography variant='subheading' align='left'>
						{this.props.job.position}
					</Typography>
					<Typography variant='subheading' align='left'>
						{this.props.job.location}
					</Typography>
					<Typography variant='body2' align='left'>
						{this.props.job.description}
					</Typography>
				</div>
			</div>
		)
	}
}


export default withRouter(Work);