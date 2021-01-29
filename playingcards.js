var cards = [
	//18 cards with 2 options (red numbered cards 2-10)
	{type: 'N', msg: [
	"When the night wind blows like black satin juggernauts", "over zinc-plated hell"
	]},
	{type: 'N', msg: [
	"When wise men sit in a circle round a mineshaft", "taking care to oil the hinges of chaos"
	]},
	{type: 'N', msg: [
	"When the ringing phone answers its own call to prayer", "across mindless plains of rhinestone"
	]},
	{type: 'N', msg: [
	"When your tea towels won’t dry and three light bulbs blow in a row", "such that the radio plays melted chocolate"
	]},
	{type: 'N', msg: [
	"If you’ve been sleeping badly or well", "on wings fashioned from golden bottle brushes"
	]},
	{type: 'N', msg: [
	"If you sometimes check your watch and it’s later than you think", "with the world howling as it turns"
	]},
	{type: 'N', msg: [
	"If the walls are made of bleached bone", "laid on a plateau of lost passports"
	]},
	{type: 'N', msg: [
	"If you falter at the fork in the road", "over the paisley temptation of over thinking"
	]},
	{type: 'N', msg: [
	"If knives have cut the spoons", "or you’ve started to treat the mundane as ominous"
	]},
	{type: 'N', msg: [
	"When the full moon has a taste for your coppers", "on a red velvet cushion"
	]},
	{type: 'N', msg: [
	"When inflation opens plague-infested cellars", "balanced against uncooked credit default swaps"
	]},
	{type: 'N', msg: [
	"When your next move is decided probabilistically", "having been divided by the grossly domestic"
	]},
	{type: 'N', msg: [
	"When use-value is universally zero", "due to the labour of slicing cold meats"
	]},
	{type: 'N', msg: [
	"When identity fraud is a constant state", "brought on by profit-driven data mining"
	]},
	{type: 'N', msg: [
	"If you can’t stop thinking of the next thing", "buried under books you oppose"
	]},
	{type: 'N', msg: [
	"If the person you were yesterday is already an automaton", "in a two-second clip that keeps replaying"
	]},
	{type: 'N', msg: [
	"If when you look in the mirror you see the mirror’s reflection in your eyes", "repeating and repeating"
	]},
	{type: 'N', msg: [
	"If the latest news is falling like rain", "collecting in pools of reverie"
	]},

	//18 cards with one option (black numbered cards 2-10)
	{type: 'N', msg: 
	"Given the whimsical fluctuations of the market"
	},
	{type: 'N', msg: 
	"Given the top hat, the cane, the tux and the spats" 
	},
	{type: 'N', msg: 
	"Given the witty twinkle of emeralds on a banana leaf"
	},
	{type: 'N', msg: 
	"Given the will to sign on the dotted line"
	},
	{type: 'N', msg: 
	"Given a light breeze over a gentle sea" 
	},
	{type: 'N', msg: 
	"Given the way change arrives like a taxi" 
	},
	{type: 'N', msg: 
	"Given X, Y and Z are in accordance"
	},
	{type: 'N', msg: 
	"Given the conditions under which it’s the case"
	},
	{type: 'N', msg: 
	"Given you inhale deeply and let out a sigh"
	},
	{type: 'N', msg: 
	"On the day the tide gets bored of turning" 
	},
	{type: 'N', msg: 
	"By the time all your investments have grown matted beards"
	},
	{type: 'N', msg: 
	"By the time there’s a word for the taste of dates by a fountain"
	},
	{type: 'N', msg: 
	"By the time two disconnected things are connected"
	},
	{type: 'N', msg: 
	"By the time you love and hate in equal measure" 
	},
	{type: 'N', msg: 
	"By the time everything is the same shade of grey"
	},
	{type: 'N', msg: 
	"By the time gravity makes peace with aspiration"
	},
	{type: 'N', msg: 
	"By the time your cupboards are full of academic stoats"
	},
	{type: 'N', msg: 
	"In the time it takes to see a shooting star" 
	},

	//12 coloured cards
	//red with 2 options 
	{type: 'C', msg: [
	"Only then", "You’ll be a fool for all but a day"
	]},
	{type: 'C', msg: [
	"The bells you hear will be your answer", "The elected representative  of glow worms will delight you"
	]},
	{type: 'C', msg: [
	"The time may well be right", "Quick Jack the alley cat will kiss you"
	]},
	{type: 'C', msg: [
	"The drips you see must be collected", "Your loose change will amount to a magic number"
	]},
	{type: 'C', msg: [
	"You will act as only you are able", "Your decision will feel as soft as a purple petunia"
	]},
	{type: 'C', msg: [
	"On the seventh hour of the seventh day you’ll encounter the number seven", "A happy dog will lick your face"
	]},
	//black with 1 option
	{type: 'C', msg: 
	"Abstractions will become cantankerous cuboids" 
	},
	{type: 'C', msg: 
	"Open every door twice" 
	},
	{type: 'C', msg: 
	"Clean under the pages where forgotten languages live"
	},
	{type: 'C', msg: 
	"You must just scream if you want to go faster" 
	},
	{type: 'C', msg: 
	"The story you tell will grow like a cactus" 
	},
	{type: 'C', msg: 
	"No one will be watching you"
	},

	//4 aces
	{type: 'A', msg: 
	"Please heed all you know you’ve heard before"
	},
	{type: 'A', msg: 
	"Because you have a deep-fried sense of what’s meet and right"
	},
	{type: 'A', msg: 
	"Because your ears have unrolled like an unmade coil pot"
	},
	{type: 'A', msg: 
	"Please heed the purging of chance cut with deft clean craft"
	},

];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
  
function generatereading() {
	var cardimg = Math.floor(Math.random() * 3);
	
	var pack = [...Array(52).keys()];
	shuffle(pack);

	var concluded = false;
	var c = 0;
	var restartnumbered = 1;
	var msg = [];
	
	while (!concluded) {
		var i = pack[c];
		//always stop at the sixth card
		if (c == 5 && cards[i].type != 'C') {
			//search for the next coloured card
			var f = c++;
			while (cards[i = pack[f]].type != 'C') f++;
		}
		
		switch (cards[i].type) {
			case 'N': //N cards continue
				if (typeof cards[i].msg == 'object') {
					restartnumbered = 1 - restartnumbered;
					msg[c] = cards[i].msg[restartnumbered];
				} else {
					msg[c] = cards[i].msg;
				}
				break;
			case 'C': //C cards "stop"
				concluded = true;
				if (typeof cards[i].msg == 'object') {
					msg[c] = cards[i].msg[Math.floor(Math.random() * 2)];
				} else {
					msg[c] = cards[i].msg;
				}
				break;
			case 'A': //A cards "restart"
				msg[c] = cards[i].msg;
				restartnumbered = 1;
				break;
			
		}
		var card = '<div id="card' + c + '"><img class="cardbullet" src="card' + cardimg + '.png" /><p>' + msg[c] + '</p></div>';
		$('.reading').append($(card));
		$('#card' + c).delay(c * 1000).css({display: 'flex'}).animate({opacity: 1}, 1000);
		
		c++;	
	}
	var final = '<div id="final"><p>YOUR READING IS COMPLETE</p></div>';
	$('.reading').append($(final));
	$('#final').delay(c * 1000).css({display: 'block'}).animate({opacity: 1}, 1000);
	
}

$(function () {
	generatereading();
});
