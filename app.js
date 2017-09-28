var BasicCards = require('./basicCards');


// app choosing function
var inquirer = require('inquirer');
var clozeCardArray = [];
var basicCardsArray = [];
var qnumb = 1;
var totalCards = "";
var correctAnswer = 0;
var wrongAnswer = 0;
var atQuestion = 0


// ask first two questions 
inquirer.prompt([{
   name: 'choosing',
   message: 'Welcome! Choose a study card method.',
   type: 'list',
   choices: ['Basic Study Cards', 'Cloze Study Cards']
},{
   name: 'numbquestions',
   message: 'How many of these flashcards would you like to make?',
   type: 'number'
}
]).then(function (answer) {
   if (answer.choosing == 'Basic Study Cards') {
      totalCards = answer.numbquestions;
      // provides instructions after the first set of questions
      console.log(answer.numbquestions +" "+ answer.choosing + ". Great I can help you with that.\n");
      console.log("================ Basic Instruction ==========\n");
      console.log("Make sure to create your cards the following way");
      console.log('use ~ to separate front from back of card');
      console.log("ex: Front of Card text ~ Back of the card text\n");
      console.log("===============================================\n");
      // calls the run basic function
      setTimeout(function () { runBasic(); }, 3000);
   } else {
     // calls the the cloze card creation function
      console.log(answer.choosing + ". Great I can help you with that.");
      setTimeout(function () { runCloze(); }, 3000);
   }
})

// Creates basic cards based on number of questions to be generated
function runBasic() {
  // if the number of cards is less than the number of cards to be created run this function
   if (qnumb <= totalCards ){
   console.log("Card " + qnumb);
   inquirer.prompt([{
      name: 'question',
      message: 'Create Card->',
      type: 'text'
   }]).then(function (answer) {

    //separates questions from answers and stores them as objects into 
      var splitThis = answer.question;
      var splitLocation = splitThis.search('~');
      var leftText = splitThis.slice(0,splitLocation);
       leftText = leftText.toLowerCase();
       leftText = leftText.trim();
      //  console.log(leftText);

      splitLocation+=2
      var rightText = splitThis.slice(splitLocation);
      rightText = rightText.toLowerCase();
      rightText = rightText.trim();
      // console.log(rightText);

      // create a new instance of the constructor basic card
      var newBasicCard = new BasicCards(leftText,rightText); 
      basicCardsArray.push(newBasicCard);
      qnumb++;
      runBasic()

   })
} else{

// parse the data from the constructors
basicCardsArray = JSON.stringify(basicCardsArray, null, 2);
basicCardsArray= JSON.parse(basicCardsArray);
//  console.log(typeof basicCardsArray);
//  console.log(basicCardsArray);

readyToStudy();
}
}

// create cloze cards
function runCloze() {
   inquirer.prompt([{
      name: 'name',
      message: 'what is your name.',
      type: 'list',
      choices: ['Basic Study Cards', ' Cloze Cards']
   }]).then(function (answer) {
      var newClozeCard = new cc( ) 
      clozeCards.push()
   })
}


function readyToStudy (){
  inquirer.prompt([{
    name: 'ready',
    message: 'Are you ready to Study.',
    type: 'confirm',
    
 }]).then(function (answer1) {
 // start asking questions
 if (answer1.ready ==  true){
  showquestion(answer1)
 } else {
   console.log("No problem. You can study later");
 }

 })
}


basicCardsArray = JSON.stringify(basicCardsArray, null, 2);
basicCardsArray= JSON.parse(basicCardsArray);
function showquestion(){
 
  if (atQuestion < totalCards  ){
   
// prompt questions 
inquirer.prompt([{
  name: 'qaa',
  message: basicCardsArray[atQuestion].front,
  type: 'string',
  
}]).then(function (answer) {
  answer.qaa = answer.qaa.toLowerCase();
  answer.qaa = answer.qaa.trim();
 
  
  if (answer.qaa == basicCardsArray[atQuestion].back){
    // console.log(basicCardsArray[atQuestion].back);
    console.log(' Correct');
    atQuestion++
    correctAnswer++;
    
    showquestion()
  
  } else{
    // console.log(basicCardsArray[atQuestion].back);
    console.log(" Incorrect");
    atQuestion++
    wrongAnswer++
    
    showquestion()
  }
});
  }else{
console.log(`you had ${correctAnswer} question right and ${wrongAnswer} questions wrong`);
    askReplay();
  }
} 

function askReplay () {
  inquirer.prompt([{
    name: 'question',
    message: 'Would you like to play again?',
    type: 'confirm'
  
 }]).then(function (answer) {
  if (answer.question){
     qnumb = 1;
     correctAnswer = 0;
     wrongAnswer = 0;
     atQuestion = 0
    readyToStudy ();
  }else{
    console.log('Thanks for studying. Make sure to come back. Good Bye :)');
  }

 })
  
}


//  firstCard = JSON.stringify(firstCard, null, 2);
//  firstCard = JSON.parse(firstCard);

//  var cc = require('./clozeCards');


// BasicCards.prototype.quiz = function (){
//    console.log(this.front);
//    console.log(this.back);
// }