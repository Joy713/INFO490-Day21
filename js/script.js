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
	},
	'm': {
		name: 'Matthew',
		color: '#8B4513'
	},
	'ja': {
		name: 'Jack',
		color: 	'#4B0082'
	}
});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show background start-background',
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
		'Jonathan and you cuddle in bed and watch Euphoria together, aftering 20 minutes you’re making out a bit. Jonathan gradually makes the kisses more sexual and makes it clear that he wants to have sex.',
		{
			'Choice': {
				'Dialog': 'What is your opinion on this?',
				'1': {
					'Text': 'Accept and have sex',
					'Do': 'jump accept'
				},
				'2': {
					'Text': 'Doesn’t want to have sex now',
					'Do': 'jump refuse'
				}
			}
		}
	],
	
	'accept': [
		'j Love you babe!',
		'20 minutes later, you found out that Jonathan did not prepare a condom.',
		's Wait, wait, wait... We don’t have a condom',
		'j It‘s okay babe. There is no need to use it. You are not gonna get pregnant for not using a condom once.',
		{
			'Choice': {
				'Dialog': 'What is your opinion on this?',
				'1': {
					'Text': 'Have sex without condom',
					'Do': 'jump noCondom'
				},
				'2': {
					'Text': 'Refuse to have sex',
					'Do': 'jump refuse'
				}
			}
		}
	],
	
	'noCondom': [
		'You and Johnathan have sex without condom.',
		'After the sex, you is thingking about whether to take an emergency birth control pill. you are concerning that the pill might affect your health.',
		{
			'Choice': {
				'Dialog': 'What is your opinion on this?',
				'1': {
					'Text': 'Take birth control pills',
					'Do': 'jump pill'
				},
				'2': {
					'Text': 'Do not take birth control pills',
					'Do': 'jump noPill'
				}
			}
		}
	],

	'pill':[
		'you don‘t want to get pregnant so she takes birth control pills after sex. One day, you guys want to have sex again…',
		'j  I’m not feeling like using a condom this time. Actually, how about you take pills every time afterwards so that we don’t have to use condoms?',
		{
			'Choice': {
				'1': {
					'Text': 'Accept',
					'Do': 'jump acceptPill'
				},
				'2': {
					'Text': 'Refuse',
					'Do': 'jump refusePill'
				}
			}
		}
	],

	'acceptPill':[
		's Humm… Okay.',
		'After a while, your periods become irregular due to your constant use of emergency birth control pills.',
		'Jonathan also becomes increasingly irresponsible because he thinks you will promise him anything.',
		'Eventually, you two broke up over Jonathan‘s cheating.',
		'end'
	],

	'resusePill':[
		's Why?? There could be serious side effects from taking any pills, and you just let me take the risk even if you can help me avoid this by using a condom??',
		'j Don’t be so dramatic, it’s not a big deal. You are also having a great time, aren’t you?',
		's Is it for me or is it just for you? You are being so selfish!',
		'j All of my friends don’t use condoms with their girlfriends, why are you the only one being such a drama queen?',
		's Then go dating with your friends! Bye bye!',
		'You are irritated by Jonathan’s attitude and breaks up with him.',
		'end'
	],

	'noPill':[
		'You decided to not take the pill. You also think that one time of not using condom won‘t get you pregnanet.',
		'One month later, you noticed that your period was not coming properly and went for a pregnancy test, which revealed that you were pregnant. You are very panicked and told Jonathan about it over message.',
		's Omg… I’m pregnant, babe.',
		'j What??? Didn’t you take birth control pills after that day???',
		's No I didn’t... I didn’t expect this to happen at all!',
		'j Well… You’re the one who didn‘t take the pills, and I don‘t know if this baby is actually mine.', 
		'j Good luck.',
		's Wait what??? What do you mean??!!',
		'(Your message is blocked)',
		's You blacklisted me???',
		'(Your message is blocked)',
		'Jonathan blocked you after he found out you was pregnant. You couldn‘t find him anywhere and falls into despair.',
		'end'
	],

	'refuse': [
		'You think: Hmm I do really like John and he’s very cute, but I’m just not sure about this. I’ve never done this before and neither have I given it too much thought. Also I know even with a condom it’s not guaranteed that I won’t get pregnant, and I would really not like to get pregnant so early.',
		's Hmmm I’m not so sure, I don‘t think it is a proper time for us to do this',
		'j okay, fine.',
		'Two days later. You are texting Jonathan.',
		's Good morning love!! How’s your exam? Omg this the sub is sooo annoying 😩',
		'3 hours passed by and Jonathan has not responded to your text',
		's Are you ghosting me now?? 😶',
		'Johnathan 5 hours later: I was busy all day',
		's You were NOT! You were literally avoiding me. Are you mad cuz I said no on Friday??',
		'j Nooo, it’s just that I know I’m gonna be good for you my bb don’t worry, I’m gonna treat you well. 😙',
		's I said I’m not sure and I’ll know when it’s a good time when I feel like it. 😐',
		'j Ugh you’re so boring, Alex’s gf already had sex with him',
		's 😐',
		'j Now what you doing is wasting my time now 🤬',
		'You did not respond to Jonathan‘s message', 
		'A few days later.',
		's I don’t think the way you’re pressuring me is going to work out for our relationship',
		'j Wdym pressuring you?? I KNOW it’s gonna be good?',
		's Regardless we’re breaking up 😶',
		'j Just because I asked to have sex?? Why you gotta be like this?',
		'You stop responding to Jonathan.',
		'After a couple years, you met your new boyfriend Matthew at your college.',
		'Today, Matthew and you are watching a movie together',
		'Matthew tries to kiss you during an intimate scene, but it brings back bad memories with Jonathan for you.',
		's Wait!!',
		'm What’s wrong?',
		's Sorry, I‘m not in the mood for a movie today. I’ll see you tmrw at school. (stand up and leave)',
		'You got home and Matthew texted you',
		'm Did you get home babe?',
		's Yea',
		'm Did I just do something to make you uncomfortable? I apologize if there is',
		's No it’s not you. It’s just…',
		'm Do you mind telling me what’s wrong?',
		'You told Matthew what happened between you and Jonathan.',
		's It would be really bad for me back then to get pregnant by accident, and I really just needed some time for myself. He didn’t respect me at all and even insulted me which was totally unacceptable. So it‘s not your problem. I just need a little more time. I hope you can understand',
		'm Oh my poor babe🥺 Trust me I wouldn‘t do that to you cuz I love you❤️ I’m not gonna push you until you’re ready. If you have any concerns we can always learn relevant knowledge together. After all, I don‘t want you to get hurt',
		's Awww you’re so sweet🥺',
		'm That’s what a boyfriend should do😽 Also I hope this experience doesn’t make you afraid of sex. It can be a wonderful experience with someone you love when using birth control appropriately. Anyway, I‘m gonna respect you and be with you no matter what you do🥰',
		's Thank you babe🥺',
		'You took PSYCH 210 at school and learned a lot more about sexual psychology; You and Matthew dated for a few more months and got a lot more comfortable with each other…',
		'One day at Matthew‘s house',
		's Babe',
		'm Yes?',
		's I think I’m ready…',
		'm Oh! Are you sure?',
		's Yup! We’ve been learning a lot together, and I think I know how to protect myself in sex now, and I‘m sure you‘ll protect me, too',
		'm I absolutely will! I’ll get what we need real quick',
		'You and Matthew have a nice sexual experience❤️',
		'end'
	],

	'StoryB': [
		'Your name is Selena and you are a 10th grader at the LeX Academy. You have a boyfriend, Jonathan, who is also a 10th grader at your High School.',
		'One day at school',
		's Hey babe! Do you want to have dinner and hang out tonight with my friends?',
		'j Oh, sure!',
		's Do you know Anna? She is in your grade as well. You guys might have taken the same classes. Also, Jack and Alison will join us later tonight.',
		'j Sounds cool.',
		'At the restaurant Selena, Jonathan, and Anna came early.',
		's So, this is Anna. She has been my best friend since middle school. And she is in the band as well.',
		'j Hi! I am Johnathan and I am in the band as well. If you have any questions, feel free to ask me.',
		'a Well, thanks!',
		'At the dinner, Jonathan and Anna talked a lot of things about band experience and complaints about classes. You felt kind of lonely since you did not have the same experience. Then Alison and Jack came. Johnathan and Jack began to talk about games and sports.',
		'j How‘s it going?', 
		'ja Good. I watched the football game yesterday. Great game！',
		'j No way! I missed that. Oh, I was watching a stupid love story at the movie theater.',
		's Yeah, with me. ',
		'ja Interesting. Hey dude, do you wanna play video games this weekend?',
		'j Sure! Why not?',
		's (We said it yesterday to go camping this weekend.) Oh, he can‘t. We have planned to go camping.',
		'j Oh, sorry. I forgot. Yeah, we can meet next time.',
		'ja Alright, bro',
		'You and Jonathan came home from the restaurant',
		'j Hey babe. I saw you were quiet all night. Are you OK?',
		's Yeah, I‘m fine. ....',
		{
			'Choice': {
				'1': {
					'Text': 'Tell him my true feelings',
					'Do': 'jump tell'
				},
				'2': {
					'Text': 'Walked away and pretend to be nothing happen',
					'Do': 'jump noTell'
				}
			}		
		}
	],

	'tell':[
		's I feel that I have been left out when you guys are talking since I was not in the school band. And I am upset that you forgot our plan.',
		's You seem like you only care about your games.I know that I should not think in a negative way. But I just can‘t control my thoughts.',
		'j How come I just focus on my game? I do care about you. I am sorry that I make you uncomfortable. And it‘s Okay to think that way. Thanks for telling me your true feelings. I love you babe.',
		'On the weekend, Selena and Johnathan are at the camping place.',
		'j Holy cow! It‘s raining so bad!',
		's Yeah, it‘s weird. It is supposed to be a sunny day.',
		'j Although it is a little bit annoying, it’s fine. We can still have a good time babe. Let’s build our tent!',
		'You and Jonathan had a great time. Jonathan’s gentleness and understanding makes your relationship with him more stable.',
		'end'
	],
	
	'noTell':[
		's Everything was fine. I was just not that hungry.',
		'j Ok, babe. I am tired. Good night!',
		'On the weekend, Selena and Johnathan are at the camping place.',
		'j Holy cow! It‘s raining so bad!',
		's Yeah, it‘s weird. It is supposed to be a sunny day.',
		'j I can‘t take this anymore. I should play games with Jack. It’s all blamed on you! Selena, you ruined my weekend!',
		's How come it is my fault!!! You decided to go with me. And I prepared all these things. How about you? You did nothing!',
		'j Why are you being so aggressive? Maybe you should learn from Anna to control your bad temper. She is way more mature than you.',
		's ......',
		{
			'Choice': {
				'1': {
					'Text': 'Be quiet and stop the fight ',
					'Do': 'jump suicide'
				},
				'2': {
					'Text': 'Calm down and talk to her friend Anna seeking emotional help',
					'Do': 'jump friend'
				}
			}		
		}
	],

	'suicide':[
		'After several fights, you ran out of your patience and you felt miserable about your life. Your boyfriend Jonathan broke up with you. You tried to commit a suicide​​ at your apartment but your friends found out and sent you to the emergency room.',
		'end'
	],
	'friend':[
		'You called your friend Anna when you got home',
		's Remember that night we were having dinner together with Jonathan?',
		'a Oh yeah? What happened?',
		's Well we went camping that weekend and we had a serious fight.',
		'a About what?',
		's Well, he just complains about the weather, the road...almost everything! And he literally blamed everything on me! Well, I do feel sorry for him can‘t play video games with his friends.',
		'a What? Girl! He‘s trying to gas lighting on you! This is not right!',
		's What does that mean?',
		'a He‘s blaming things on you that are not even your fault!',
		's OMG! I didn’t realize that! This is such a toxic relationship.',
		'a Yeah, talk to him. And see if he doesn‘t change the way he talks, you can just leave him.',
		's Sure do!',
		'You and Anna talked for about an hour',
		's Thanks so much for listening to my issues. I feel much better now!',
		'You talked to Jonathan about the toxic relationship. But Jonathan continued to gaslighting you emotionally. So you broke up with Jonathan and moved on.',
		'end'
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
		'You have just gotten back home from school to find Jonathan looking unhappy.',
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
		'j Yeah…you’re gonna think I’m stupid but I’ll just tell you…for the last couple weeks I’ve been thinking about how much I love you and how I want to grow old with you and how there will come a day when we will have to say goodbye to each other and that…I don’t know how I’m supposed to find you again…',
		'Your eyes fill up with tears.',
		's That’s what’s been going on all this time?',
		'Jonathan nods yes',
		's I love you so much.',
		'j I love you too, baby. I do…I do.',
		's Just please promise me next time you’ll talk to me ok? I feel so beat down when you’re just silent like that.',
		'j Sure I promise you, I’ll talk to you more. I’m sorry I acted like that and made you feel that way.',
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
		's Alright, do what you feel like you want to do. What do you want to eat for dinner? I’m starving.',
		'j I don‘t want to eat. Please just stop talking to me.',
		's Why? I‘m trying to communicate with you and you want me to shut up?',
		's Also you should eat things even if you are angry',
		'You keep going and cannot stop talking',
		'j Oh gosh, shush! I have to leave, I cannot bear this anymore',
		'Jonathan slams the door and left', 
		'You and Jonathan had several fights in the next couple months. You kept talking and Jonathan refused to communicate with you. You two broke up due to this.',
		'end'
	]	
});
