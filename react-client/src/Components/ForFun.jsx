import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import irisPDF from '../../../public/iris_fullscore.pdf';
import coffeePDF from '../../../public/darkcoffee_fullscore.pdf';
import megamanPDF from '../../../public/megaman_fullscore.pdf';

import irisIMG from './logos/layton.png';
import aceIMG from './logos/aceattorney.png';
import megamanIMG from './logos/smash.jpg';

import irisMP3 from '../../../public/iris.mp3';
import coffeeMP3 from '../../../public/darkcoffee.mp3';
import megamanMP3 from '../../../public/megaman.mp3';

const textstyles = {
	width: '70%',
	textAlign: 'left',
	margin: '0 auto',
	marginTop: '30px',
}

const dividerStyles = {
	marginTop: '10px',
	marginBottom: '10px',
}

const music = [
	{
		title: 'Iris - Professor Layton and the Diabolical Box',
		googdr: 'https://drive.google.com/open?id=1_NatkCHLT8VJvYvoh90qiMOWg-xd_vNn',
		yt: 'https://www.youtube.com/watch?v=uufKI-QHNLI',
		pdf: irisPDF,
		img: irisIMG,
		mp3: irisMP3,
	},
	{
		title: 'The Fragrance of Dark Coffee - Phoenix Wright: Ace Attorney: Trials and Tribulations',
		googdr: 'https://drive.google.com/open?id=147-r0qtWsABoGXbZZKI1XdfT2WrMH8bO',
		yt: 'https://www.youtube.com/watch?v=HMnrl0tmd3k',
		pdf: coffeePDF,
		img: aceIMG,
		mp3: coffeeMP3,
	},
	{
		title: 'Megaman 2 Medley - Super Smash Bros Wii U',
		googdr: 'https://drive.google.com/open?id=1ew5EvIRUFdKm1T6UZixKJWmLhcTYfSDi',
		yt: 'https://www.youtube.com/watch?v=U3VdGw0YmUc',
		pdf: megamanPDF,
		img: megamanIMG,
		mp3: megamanMP3,
	}
]

class ForFun extends Component {
	render() {
		return (
			<div>
				<div style={textstyles}>
					<div>
						<Typography variant="title" align="center" style={{marginBottom: '15px'}}>
							I occasionally arrange music!
						</Typography>
						<Typography variant="body2" align="left" style={{marginBottom: '15px'}}>
							I'm the current chamber music director at GME@UCLA, and that means that sometimes I arrange my own music. Have a look at some of my arrangements! 
						</Typography>
						{music.map((selection) => 
							<Music song={selection} />
						)}
					</div>		
				</div>
			</div>
		)
	}
}

class Music extends Component {
	constructor(props) {
		super(props);
		console.log(props);
		console.log(this.props.pdf)
	}

	render() {
		return (
			<div>
				<Typography variant="body2" align="left">
					{this.props.song.title}
				</Typography>
				<div style={{display: 'table', width: '90%', margin: '10px'}}>
					<Typography variant="body1" align="left">
						<ul>
							<li>Full Score <a href={this.props.song.pdf} target="_blank">here</a></li>
							<li>Google Drive <a href={this.props.song.googdr} target="_blank">here</a></li>
							<li>Youtube Link <a href={this.props.song.yt} target="_blank">here</a></li>
						</ul>
					</Typography>
				</div>	
				<img src={this.props.song.img} style={{ borderRadius: '5px', maxWidth: '50%', transform: 'translateX(40px)'}}/>		
				<div style={{clear:'both', marginTop: '15px', marginBot: '15px'}}>
					<audio controls style={{transform: 'translateX(-60px)', transform: 'scale(0.75)'}}><source src={this.props.song.mp3} type='audio/mpeg' /></audio>
				</div>
			</div>
		)
	}
}


export default ForFun;

/*
					<div>
						<Typography variant="title" align="center" style={{marginBottom: '15px'}}>
							I do a lot of PC gaming!
						</Typography>
						<Typography variant="body2" align="left">
							I love pretty much everything there is about it (Civilization, Bioshock, Half-Life, TF2, Overwatch, Dota, League of Legends, CS:GO, Warframe, you name it!)
							If you want to find me online, you can always find my profiles here: 
							<ul>
								<li>Steam: <a href="https://steamcommunity.com/profiles/76561198045769254/" target="_blank">https://steamcommunity.com/profiles/76561198045769254/</a></li>
								<li>Blizzard: cthaifood#1925</li>
							</ul>
							If you care about competitive stats at all (I'd rather think that I'm pretty decent at the games I play :D), find my Dota, League, and Overwatch profiles below.
							<ul>
								<li>Dotabuff (Dota 2): <a href="https://www.dotabuff.com/players/85503526" target="_blank">https://www.dotabuff.com/players/85503526</a></li>
								<li>Overbuff (Overwatch): <a href="https://www.overbuff.com/players/pc/cthaifood-1925" target="_blank">https://www.overbuff.com/players/pc/cthaifood-1925</a></li>
								<li>op.gg (League): <a href="http://na.op.gg/summoner/userName=christhaifood" target="_blank">http://na.op.gg/summoner/userName=christhaifood</a></li>
							</ul>
						</Typography>
					</div>
					<Typography variant="body2" align="center" style={dividerStyles}> &#9679; &emsp; &#9679; &emsp; &#9679;</Typography>
*/