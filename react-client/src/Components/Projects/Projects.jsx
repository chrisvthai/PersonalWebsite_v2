import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router'
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';

import list from './project_list.jsx';

const textstyles = {
	width: '50%',
	textAlign: 'left',
	margin: '0 auto',
	marginTop: '30px',
}

const imgStyle = {
	//display: 'inline-block',
	float: 'left',
	marginRight: '20px',
	marginBottom: '10px',
	maxWidth: '100%',
	minWidth: '150px',
	height: 'auto',
	borderRadius: '15px',
}

const gridStyles = {
	width: '60%',
	textAlign: 'left',
	margin: '0 auto',
	marginTop: '10px',
}

const dividerStyles = {
	marginTop: '30px',
	marginBottom: '30px',
}


class Projects extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { match, location, history } = this.props;

		return (
			<Switch>
				<Route exact path={match.url} component={ProjectGrid} />
			</Switch>
		);
	}
}

class ProjectGrid extends Component {
	render() {
		return (
			<div>
			<div style={textstyles}>
				<Typography variant='body2' align='center'>
					Listed below are some of the projects that I have worked on in the past. Come check them out!
				</Typography>
			</div>
			<div style={gridStyles}>
				<ProjectCard project={list.hotdog} />
				<ProjectCard project={list.sc2} />
				<ProjectCard project={list.catbot} />
				<ProjectCard project={list.pianoHero} />
				<ProjectCard project={list.riverfront} />
				<ProjectCard project={list.treeline} />
				<ProjectCard project={list.website} />
			</div>
			</div>
		);
	}
}

class ProjectCard extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Typography variant="body2" align="center" style={dividerStyles}> &#9679; &emsp; &#9679; &emsp; &#9679;</Typography>
				<div style={{textAlign: 'left', margin: '0 auto',}}>
				<div style={{maxWidth: '40%'}}>
					<img src={this.props.project.imgPath} style={imgStyle}/>
				</div>
				<div >
					<Typography variant='title' align='left' style={{marginBottom: '15px'}}>
						{this.props.project.name + '\n'}
					</Typography>
				
					<Typography variant='body2' align='left' style={{marginBottom: '20px'}}>
						{this.props.project.description}
					</Typography>

					{this.props.project.links.map((obj) =>
						<Typography variant='body2' align='left'>{obj.name}: <a href={obj.link} target="_blank">{obj.link}</a></Typography>
					)}
				</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Projects);

