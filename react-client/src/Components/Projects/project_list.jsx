import hotDogImg from './images/hotdog.png';
import sc2Img from './images/sc2.png';
import riverfrontImg from './images/riverfront.png';
import catbotImg from './images/catbot.png';
import pianoImg from './images/piano.png';
import treelineImg from './images/treeline.png';
import websiteImg from './images/website.png';

/* List of projects */
/* All images should be 250px wide*/
const hotdog = {
	name: 'Hot dog or not?',
	description: `For all of you who watch 'Silicon Valley', this is the character Jian Yang's 'food classifier', which in the show turned out to be a 
								disappointing binary classifier for hot dogs. As a for fun project, I've recreated this project in Python, implementing a convolutional 
								layer neural network with Tensorflow and outputing the results using matplotlib. This quick project was motivated by my time teaching 
								machine learning at iD Tech.`,
	imgPath: hotDogImg,
	links: [
		{
			name: 'Github repo',
			link: 'https://github.com/chrisvthai/HotDog'
		}
	]
}

const sc2 = {
	name: 'Starcraft II AI',
	description: `You've heard about playing against bot AI in video games, but how about pitting your own bot against the game's AI? Heavily inspired by
								sentdex's Python tutorial for Starcraft II AI, this is a neural network that has learned how to play against Blizzard's own in-game bots.
								It makes use of the python-sc2 API (not to be confused with DeepMind's pysc2 library), Keras, and OpenCV. The idea for this project actually started
								out as a joke among us machine learning instructors at iD Tech Stanford; we teach merely one week courses in an extremely difficult and complex topic, especially for high-schoolers
								not yet exposed to machine learning, yet one of our advanced learning objectives we could write on our camper's certificates was 'Develop Starcraft II AI'. Like that ever happened! 
								The actual bot is a convolutional neural network that reads in images generated from OpenCV and the python-sc2 API and outputs some action. The set of actions I gave the bot
								is very limited in scope: there are only 4 of them. These are 1.) do nothing, 2.) attack the nearest enemy unit, 3.) attack a unit near the
								enemy base, and 4.) attack an enemy structure. Currently, the bot has achieved about a 60% winrate against Hard bots, and sports a much
								higher winrate against Medium bots. I also heavily modified the unit and building production timings and strategy from those of sentdex in his tutorial,
								as I have played the game myself a lot in the past, so I know better than to follow sentdex's 'build only Voidrays' strategy. :)`,
	imgPath: sc2Img,
	links: [
		{ name: 'Github repo', link: 'https://github.com/chrisvthai/SC2-AI'},
		{ name: 'sentdex\'s tutorial', link: 'https://pythonprogramming.net/starcraft-ii-ai-python-sc2-tutorial/'},
		{ name: 'python-sc2 repo', link: 'https://github.com/Dentosal/python-sc2'}
	]
}

const riverfront = {
	name: 'cp_riverfront',
	description: `During my 1st summer teaching at iD Tech, I taught two weeks of Level Design for Team Fortress 2. This inspired me to make a grand project of my own
								incorporating all the things I'd taught my campers. The result: cp_riverfront, a 3 control point map for Team Fortress 2, made using Valve's Hammer Editor. 
								The map supposedly takes place in a manufacturing center near a river (that's the story that makes the most sense in my mind). Check it out on the Steam Workshop!`,
	imgPath: riverfrontImg,
	links: [
		{ name: 'Steam Workshop link', link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1135171237'},
	]
}

const catbot = {
	name: 'cat-bot: A Discord Chatbot',
	description: `On my quest to learn more about modern Javascript, I came up with the idea of making a Discord chat bot for my friend's chat server. For some odd reason, the whole
								server is cat-themed, so I had to design the bot accordingly. Using Node.js and Discord.js, I initially made a simple catpic dispenser, made to send a cute image of 
								a cat whenever somebody in the server typed '!catpic'. It then grew even bigger, with functionalities including querying the Oxford dictionary with the Oxford Dictionaries
								API, storing username mappings to common gaming services like Steam using SQLite, and, currently in the works, returning Overwatch player statistics. The design of the
								chatbot is very modular, so there's plenty of room to improve the bot and augment it with more commands!`,
	imgPath: catbotImg,
	links: [
		{ name: 'Github repo', link: 'https://github.com/chrisvthai/cat_bot'},
		{ name: 'Discord.js', link: 'https://discord.js.org/#/'}
	]
}

const pianoHero = {
	name: 'Piano Hero',
	description: `This was the final group project for CS174A: Introduction to Computer Graphics; I worked on this with my fellow classmates John Stucky and Robert Posada. Using WebGL, 
								we created a web-based game similar to Guitar Hero, except on a piano. Tiles representing the keys required to press fall down towards the rendered piano, and the player
								must hit the corresponding key when the tile falls past the piano keys. Alternatively, one could play this in free mode, in order to just mess around with the piano. I myself
								mainly worked on the sound components and game logic. My classmates worked on the rendering of the actual keyboard and props, as well as some of the logic for the songs being played.`,
	imgPath: pianoImg,
	links: [
		{ name: 'Try it here', link: 'https://chrisvthai.github.io/PianoHero/tinywebglucla/pianohero.html'},
		{ name: 'Github repo', link: 'https://github.com/chrisvthai/PianoHero'}
	] 
}

const treeline = {
	name: 'The Twisted Treeline: Dota Edition',
	description: `I like Dota 2, I like League of Legends, so of course combining the two MOBA games came to my mind at some point. (Dota still remains the superior game, but I digress). 
								This quick project is a remake of the League of Legends 3v3 map in the Dota 2 Engine, made using Valve's Hammer Editor and a smidge of Lua scripting. Check 
								it out on the Steam Workshop!`,
	imgPath: treelineImg,
	links: [
		{ name: 'Steam Workshop link', link: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1169712214'}
	]
}

const website = {
	name: 'This website!',
	description: `Unsurprisingly, this entire website was a hefty project in of itself! It took awhile, but I finally made the move to migrate my personal website, consisting solely
								of static HTML and CSS, to modern Javascript. Developing this website has been a rewarding journey, where I learned a lot about React.js and its component structure.
								I also made use of a lot of other libraries such as React Router, Material-UI, and Babel. At least now I can say I've got a working web-app made with React and
								modern Javascript! It features an unhealthy amount of inline CSS styling, but hey, I'm still extremely happy with the result considering I'd never done this before!`,
	imgPath: websiteImg,
	links: [
		{}
	]
}

const list = {
	hotdog,
	sc2,
	riverfront,
	catbot,
	pianoHero,
	treeline,
	website,
}

export default list;
