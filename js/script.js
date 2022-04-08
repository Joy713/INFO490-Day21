/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
// monogatari.action ('notification').notifications ({
// 	'Welcome': {
// 		title: 'Welcome',
// 		body: 'This is the Monogatari VN Engine',
// 		icon: ''
// 	}
// });

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'start-background': 'starting-background.png'
});


// Define the Characters
monogatari.characters ({
	's': {
		name: 'Selena',
		color: '#5bcaff'
	},
	'j': {
		name: 'Jonathan',
		color: '#0000FF'
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene start-background',
		{
			'Input': {
				'Text': 'What is your name?',
				'Validation': function (input) {
					return input.trim ().length > 0;
				},
				'Save': function (input) {
					this.storage ({
						player: {
							name: input
						}
					});
					return true;
				},
				'Revert': function () {
					this.storage ({
						player: {
							name: ''
						}
					});
				},
				'Warning': 'You must enter a name!'
			}
		},
		'Hi {{player.name}}, Welcome to LeX!',
		{
			'Choice': {
				'Dialog': 'Do you want an introduction about the LeX Project',
				'Yes': {
					'Text': 'Yes',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': 'No',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'Thats awesome!',
		'Then you are ready to go ahead and create an amazing Game!',
		'I can’t wait to see what story you’ll tell!',
		'end'
	],

	'No': [

		'Okay. Let’s start the game then.',
		'In the game, you will be playing the role of Selena, who is a high school student. You will go through her concerns or problems in her relationship and make decisions for her.',
		{
			'Choice': {
				'Dialog': 'Choose an alphabet to start your game. Different alphabet corresponds to a different story!',
				'A': {
					'Text': 'A',
					'Do': 'jump StoryA'
				},
				'B': {
					'Text': 'B',
					'Do': 'jump StoryB'
				},
				'C': {
					'Text': 'C',
					'Do': 'jump StoryC'
				},
				'D': {
					'Text': 'D',
					'Do': 'jump StoryD'
				}
			}
		}
	],

	'StoryA': [
		'Your name is Selena and you are a 10th grader at the LeX Academy. You have a boyfriend whose name is Jonathan. You two have dated for 2 months now',
		'j Hey love, Netflix and chill at your place tonight?', 
		's Sure bb!',
		'7p.m. at Jonathan’s home',
		'Jonathan and Selena cuddle in bed and watch Euphoria together, aftering 20 minutes they’re making out a bit. Jonathan gradually makes the kisses more sexual and makes it clear that he wants to have sex.',
		''

		


	],

	'StoryB': [
		'Your name is Selena and you are a 10th grader at the LeX Academy. You have a boyfriend, Jonathan, who is also a 10th grader at your High School.',
		'One day at school',
		's Hey babe! Do you want to have dinner and hang out tonight with my friends?',
		'j Oh, sure!',
		's Do you know Anna? She is in your grade as well. You guys might have taken the same classes. Also, Jack and Alison will join us later tonight.',
		'j Sounds cool.'
	],

	'StoryC': [
		'Your name is Selena and you are a 10th grader at the LeX Academy.'
	],

	'StoryD': [
		'StoryD'
	]
});