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
	},
	'a': {
		name: 'Anna',
		color: '#EADDCA'
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
		'Your name is Selena and you are a 10th grader at the LeX Academy. Jonathan, who is also a 10th grader, is a member of your High School’s varsity basketball team. You and him are good friends who usually hang out. However, Jonathan did not know that you have had a deep crush on him for 6 months.',
		'Today, you decided to tell Jonathan about your feelings towards him.',
		'After School',
		's Hey Jonathan, could you come with me real quick? I have something to tell you. ',
		'j Sure. Give me one second. ',
		'You brought Jonathan to the back of the Science building. ',
		'You start a deep breathing…',
		's This may come as a surprise, but I want to say I’ve developed feelings for you. I know we have always been really good friends, but I think I should tell you that lately I have been thinking about more than just friendship. What do you think?',
		'Your heart starts racing and hands start sweating. You even couldn’t make eye contact with Jonathan. ',
		's You don’t have to give me an answer now. It is okay, I understand that this is a little bit abrupt…',
		'j Selena, I… I’m sorry. I always treat you as sisters and … Thank you for telling me these, really. We can still be best friends.',
		{
			'Choice': {
				'A': {
					'Text': 'Show your understanding and pretend nothing is happening',
					'Do': 'jump CA1'
				},
				'B': {
					'Text': 'Refuse to give up and keep asking Johnathan',
					'Do': 'jump CB1'
				}
			}		
		}

	],
	'CA1': [
		's I totally understand. It’s fine haha, it’s okay… Well, I have something coming up and have to go. See you tomorrow.',
		'You quickly ran away and a tear rolled down your face. ',
		'jump C2'
	],
	'CB1': [
		's So no chance at all? Could you think about it more? I really like you, Jonathan. Maybe we can be the cutest couple in our high school. ',
		'j Sorry, I don’t think we are a good fit. You deserve someone better, Selena. ',
		's You are the best person I’ve ever met. Jonathan, you were being so nice to me, and I thought you liked me, not as a friend. We shared ice cream, went to the movies, played arcade games together… Could you please, please, rethink about it? ',
		'j … Selena, I don’t want to hurt your feelings, but you are making things harder for us to go back to what we were. I don’t think I will change my mind. Sorry, I have to go. You know I have my basketball training. Time will be a good healer and I hope you will meet someone else…',
		'Jonathan left. You feel sad and cannot accept the outcome.',
		'jump C2'
	],
	'C2': [
		'At Home',
		'You cried hard in your bedroom. After 3 hours, you were still not feeling well. You want to find ways to mitigate your feelings.',
		{
			'Choice': {
				'A': {
					'Text': 'Call your friend',
					'Do': 'jump CA2'
				},
				'B': {
					'Text': 'Acknowledge feelings yourself',
					'Do': 'jump CB2'
				},
				'C': {
					'Text': 'Destroy or break things to relieve stress',
					'Do': 'jump CC2'
				}
			}		
		}
	],
	'CA2': [
		'You decided to call your friend, Anna, to release emotion. You told Anna all the details.',
		'a Do you want me to come over? ',
		's I’m fine, thank you for asking though. I feel so much better after talking to you. ',
		'a Tomorrow will be easier. I’ll always be there with you.',
		's Thank you so much! Maybe it’s because I am not prettier enough… ',
		'a Never say that to yourself! The fact that he doesn’t like you doesn’t mean you are not attractive or pretty. You shouldn’t blame yourself for this!',
		's I cannot stop thinking this way. Ok, I will try to be positive. I got rejected this time. Maybe next time, I will get a "yes" or "Oh, well. This is what happened. I do not like it. It is not how I wanted things to work out. But everyone gets rejected — and I can try again.',
		'a Exactly! Selena, you are brave. Give yourself credit for trying! One refusal means nothing.',
		'…',
		'You chatted with Anna for an hour and you felt so much better. She encouraged you to be positive and her warm words worked pretty well. It was reassuring to know that someone understands what you are going through and how it feels. You decided to make things move on and maintain the friendship between you and Jonathan. ',
		'end'
	],
	'CB2': [
		'You decided to calm down a little bit and really figure out your feelings to cope with Jonathan’s refusion. You pulled out a blog about how to handle refusion and followed the steps on it.',
		's Okay, I acknowledge my feelings. I shouldn’t pretend it’s not painful. It is normal to feel like I do given the situation. ',
		'Take a deep breath…',
		's I will name what I am feeling. I feel really sad and frustrated that Jonathan doesn’t want to have a relationship with me. I like him a lot and I tried hard. I have to think positively to cope with my feelings. ',
		's I got rejected this time. Maybe next time, I will get a "yes" or "Oh, well. This is what happened. I do not like it. It is not how I wanted things to work out. But everyone gets rejected — and I can try again.',
		'Being rejected does not mean you are not liked, valued, or important. It just means that one time, in one situation, with one person, things did not work out. You were being honest with yourself and felt much better. You learned how to deal with rejection. You decided to make things move on and maintain the friendship between you and Jonathan. ',
		'end'
	],
	'CC2': [
		'You were so sad and frustrated that you decided to throw and break things in your room. ',
		's Ahhhhh, why!!! ',
		'Throwing a book to the closet and crying,',
		'Soon, your room became a mess. Although you release some of the stress after throwing things, you still feel down. You couldn’t accept the fact that you got rejected and even felt anger towards Jonathan. It was hard for you to pretend nothing happened between you and Jonathan for the next couple of weeks. Jonathan got tired of you and you two got drifted apart.',
		'end'
	],


	'StoryD': [
		'Selena has just gotten back home from school to find Jonathan looking unhappy.',
		's What’s wrong with you? Why do you seem so down?',
		'j Just deep in thought…',
		's About what?',
		'j Nothing, I’m alright. Don’t really want to get into it.',
		's …I wasn’t going to say anything because I already knew that that would be your response, Jonathan. For the past month you’ve been going through some sort of man period. On and off, hot and cold, happy, sad. Not acting like yourself at all. I want to know what’s up. Tell me what’s bothering you lately. Is it me? Not happy with me?',
		'j It is about you but not like what you think.',
		's Great. Now you’re talking to me in riddles. Can’t you give me a straight answer and tell me what the hell is going on already? How does it involve me?',
		'j You know, there are some freaking things I just don’t want to talk about and you have to keep pushing me and pushing me. Why isn’t that ever good enough? Why can’t you back off?',		
		's If I was acting up and down like you’ve been, I guarantee you would be more pissed off about it.',
		'j Yeah, well I don’t want to talk about it. So leave it alone…',
		{
			'Choice': {
				'A': {
					'Text': 'Leave jonathan alone and pretend everything’s ok',
					'Do': 'jump DA1'
				},
				'B': {
					'Text': 'Express your annoyance',
					'Do': 'jump DB1'
				},
				'C': {
					'Text': 'Keep asking jonathan what’s wrong',
					'Do': 'jump DC1'
				}
			}
		}
	],
	'DA1': [
		's Ok whatever, guess I’ll just shut up about it.',
		'j Sure, but I know you’re upset too?',
		's Just shut up now why are you talking anymore? I’m not upset!',
		'j Fine, I guess we’ll both shut down then.',
		's Alright, do what you feel like you want to do. What do you want to eat for dinner? I’m starving.',
		'j I don’t know. Chinese? In the mood for sesame chicken?',
		's Not sure…',
		'j Selena, okay…listen…this is hard for me because I don’t–I’m not…I have a hard time being open like, you know? (beat) I have a difficult time sharing things that go on inside me, things that matter to me a great deal…I was brought up in a certain environment and I don’t know, it’s sometimes hard for me to connect.',
		's I understand.',
		'j You know…I think about things, things I shouldn’t think about. I get caught up with all this nonsense in my head and I get stressed and it brings me down.',
		's What things, baby? What things do you think about?',
		'j I feel like such a bitch telling you this…that’s my problem though…I don’t want to be soft.',
		's You’re not soft. I don’t look at you that way.',
		'end'
	],
	'DB1': [
		's Ok whatever, I don’t want to be responsible for your inability to communicate anyways',
		'j Oh so now it’s my fault just because I’m not ready to tell you?',
		's I don’t know when you will be ready or whatever your problem is, I’m tired of having to always take care of you emotionally rather than having you directly communicate with me. ',
		'j Whoa ok, so I guess I will just never be able to have different communication than you do?',
		's Fine, then don’t tell me! ',
		'j If I tell you it’s because I want to tell you. It’s that sort of thing!',
		'end'
	],
	'DC1': [
		's I’m not going to leave it alone. I feel that this is something serious and I won’t back away until you tell me.',
		'j Really?',
		's Really.',
		'j You will be waiting a very long time.',
		's I don’t care.',
		'...',
		'j Don’t play these stupid games with me, okay? Cause this shit is for real. I’m feeling real emotions about certain things and I don’t want to be played with.',
		's I don’t care.',
		'j You drive me crazy.',
		's You drive ME crazy.',
		'j I don’t want to tell you just because you want me to tell—',
		's Fine!! Don’t!!!',
		'j If I tell you it’s because I want to tell you. It’s that sort of thing!',
		'end'
	]	
});
