
// function NBAPlayers(name,number){
//    this.teamPlayed = [];
//    this.name = name;
//    this.number = number;
//    this.teamPusher = function (x){
//       this.teamPlayed.push(new TeamConstructor(x))
//    };
//  }

//  function TeamConstructor (newTeam){
//   this.newTeam = newTeam
// }


// var firstPlayer = new NBAPlayers('Dwane Wade',3);
// // var newTeam = new TeamConstructor('Miami')
// firstPlayer.teamPusher('Miami');
// console.log(firstPlayer.name);
// console.log(firstPlayer.teamPlayed)



var fs = require('fs');
var obj;
fs.readFile(__dirname +'/one.json',"utf8", function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  console.log(obj);
});

















//  var firstCard = new BasicCards('Who is unanimous mvp?','Curry');
//  firstCard.pushIt('First Name','Jose');

//  var secondCard = new BasicCards('who','julio');
//  firstCard.pushIt('First Name','Jose');





//  firstCard.pushIt('Last Name ','Guzman');

//  console.log(typeof(firstCard));
//  console.log(firstCard.front);
//  console.log(firstCard.back);
//  console.log(firstCard.blah[0]);
 // what does this do
//  console.log(JSON.stringify(firstCard.blah, null, 2) + "\n");
// console.log(firstCard);
//  firstCard = JSON.stringify(firstCard, null, 2);
//  firstCard = JSON.parse(firstCard); 
//  console.log(firstCard);
