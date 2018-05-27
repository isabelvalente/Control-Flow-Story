// var yes = 'yes' || 'Yes'
// var no = 'no' || 'No'
//
// var alarm = prompt('It\'s a cold Tuesday afternoon and you\'re fast asleep. Your alarm goes off. Do you get up or snooze?');
//
// if (alarm == 'get up' || 'I get up' || 'Get up') {
//   prompt("You get in the shower and 50 seconds in you're spritzed with freezing cold water. Will you get out or stay in the shower?");
//
//   } else  if(alarm == 'snooze' || alarm == 'Snooze') {
//   prompt('You go back to sleep and start dreaming...');
//
// } else if(alarm == 'default') {
//   prompt("Learn to spell bro");
// }

// var questionsA = [
//   {
//     prompt: 'It\'s a cold Tuesday afternoon and you\'re fast asleep. Your alarm goes off. Do you get up or snooze?',
//     a: 'Get up' || 'get up',
//     b: 'snooze' || 'Snooze'
//   },
//   {
//     prompt: "You get in the shower and 50 seconds in you're spritzed with freezing cold water. Will you get out or stay in the shower?",
//     a: 'get out' || 'I will get out' || 'Get out',
//     b: 'stay' || 'Stay' || 'I stay in the shower' || 'I stay',
//   },
//
// ]


// var questionsB = [
//   {
//     prompt: "You go back to sleep and you dream. In your dream you are in an empty room, except for a door or stairs leading to a dark basement. Do you take the stairs or open the door?",
//     a: 'open the door',
//     b: 'take the stairs'
//   }
// ];

// for(var i=0; i < questions.length){
//   var response = window.prompt(questions[i].prompt);
//   if(response == questions[i].a){
//     questionsA;
//   }
// }


var island = prompt("You wake up from a deep slumber and you're shcoked to find out you're in a desserted island. You look around and see nothing but sand, sea and a jungle populated by an array of exotic trees behind you. What do you do?\n a. Go explore the jungle\n b. Walk along the shore")

if (island == 'a'){
  var bushes = prompt("You hear a rustling in the bushes. Do you\n a. Go see what's in the bushes.\n b. Run as fast as you can.");

}else if (island == 'b') {
  var beach = prompt("After what feels like an eternity of walking you spot a paddle boat on the shore.Do you take it or leave it?");
}

if (bushes == 'a') {
  var panther = prompt("You run and suddenly a black panther appears out of the bushes. Do you:\n a. fight \n b. flight");
}else if (bushes == 'b') {
  var coconuts = prompt("You explore the bushes and find 3 coconuts that have just fallen from the tree above. How many do you take?");
}

if (beach == 'take it' || 'Take it') {
  alert("You row into mid ocean, but you're exhausted and you end up being eaten by sharks. LOSER.")
} else if (beach == 'leave it'){
  alert("You leave the boat and end up dying in that island alone. LOSER!")
}

if (coconuts > 0){
  alert("You eat the coconuts and die of food poisoning. LOSER!")
} else if (coconuts =>2) {
  alert("You trip and die")
}else if (coconut = 3) {
  alert("one drops on your foot and you die of an infection")
}
