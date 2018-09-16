import iDTechPath from '../logos/iDTech.png';
import GMEPath from '../logos/GME.png';
import galileoPath from '../logos/galileo.png';

/* Images should be 225 px wide*/
const iDTech = {
	company: 'iD Tech',
	//imgPath: iDTechPath,
	imgPath: iDTechPath,
	position: 'Instructor, Summer 2017 and 2018',
	location: 'Stanford, CA',
	description: `These two summers were an opportunity to spread my passion for software and coding to up and coming developers.
								iD Tech Camps is a summer program where campers take weekly classes with exciting subject areas. I myself taught
								cool topics like machine learning, C++ coding, Unity game design, and cryptography and cybersecurity to high
								school students. Working at iD Tech allowed me to not only empower individuals to learn and get excited about software development, 
								but also to learn new things I never would've researched myself, like machine learning. In addition, I was surrounded by amazing peers 
								from many different fields, from game design to electrical engineering to graphic arts. My time here allowed me to expand the breadth 
								of my knowledge by networking with these wonderful people. It has been an amazing two summers teaching at iD Tech.`
}

const GME = {
	company: 'Game Music Ensemble @ UCLA',
	imgPath: GMEPath,
	position: 'Chamber Music Director, Fall 2017-Present',
	location: 'Los Angeles, CA',
	description: `As an amateur musician (I've played guitar for about 13 years, and double bass for 10), GME has been a great outlet
								for me to continue pursuing my love for music. GME is a student-run organization comprised of a symphony orchestra, choir,
								and chamber program dedicated to performing video game music, combining two of my favorite hobbies: music and video games.
								Recently I became the Chamber Music Director, in charge of numerous small performance groups. My responsibilities include
								compiling and arranging sheet music for our members to perform and organizing chamber performances with venues both inside and
								outside of UCLA. Being the first chamber music director since the founding of GME in 2014, I've expanded our chamber program to
								be bigger than ever. Last year we organized twice as many chamber events than what we've had in the past, and we were able to connect with many
								different venues in the Westwood area, such as the Hammer Museum and the Fowler Museum at UCLA. This year I hope to continue
								this growth and provide even more opportunities for UCLA students to continue their musical interests, whether they may be
								music majors or not! Shameless plug: come check out our Facebook page and Youtube channel!`
}

const galileo = {
	company: 'Camp Galileo',
	imgPath: galileoPath,
	position: 'Summer Intern/Assistant Instructor, Summer 2015 and Summer 2016',
	location: 'Sunnyvale, CA',
	description: `Fresh out of high school, I was a summer intern for the Galileo Summer Quest program at the Sunnyvale location. I assisted with 
								pretty much whatever needed to be done. These responsibilities included setup for camper check-in and check-out, assisting 
								the various classes who needed additional help, campus decoration, and of course, camper supervision. The next summer, I became
								an assistant instructor, helping teach courses such as Go-Kart Building and Design, Minecraft Mod Design, Video Game Design, and
								Website Design with Wix.`
}

const list = {
	iDTech,
	GME,
	galileo,
}

export default list;