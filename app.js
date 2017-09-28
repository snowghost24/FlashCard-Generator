var BasicCards = require('./basicCards');


// app choosing function
var inquirer = require('inquirer');
var clozeCardArray = [];
var basicCardsArray = [];
var qnumb = 1;
var totalCards = "";
var correctAnswer = 0;
var wrongAnswer = 0;
var atQuestion = 0;
var obj;


// ask first two questions 
inquirer.prompt([{
  name: 'choosing',
  message: 'Welcome! Choose a study card method.',
  type: 'list',
  choices: ['Create Basic Study Cards', 'Study Cards My Cards']
}, {
  name: 'numbquestions',
  message: 'How many of these flashcards would you like to make?',
  type: 'number'
}
]).then(function (answer) {
  if (answer.choosing == 'Create Basic Study Cards') {
    totalCards = answer.numbquestions;
    // provides instructions after the first set of questions
    console.log(answer.numbquestions + " " + answer.choosing + ". Great I can help you with that.\n");
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
    fs.readFile(__dirname +'/one.json',"utf8", function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      console.log(obj);
      runMycards(obj)
    
    });
  }
});



// prompts if you are ready to study after creating cards
function readyToStudy() {
  inquirer.prompt([{
    name: 'ready',
    message: 'Are you ready to Study.',
    type: 'confirm',

  }]).then(function (answer1) {
    // start asking questions
    if (answer1.ready == true) {
      showquestion(answer1)
    } else {
      console.log("No problem. You can study later");
    }
  })
}


// ───────────────────────────────────────────────────────── BASIC STUDY CARD ─────
// Creates basic cards based on number of questions to be generated
function runBasic() {
  // if the number of cards is less than the number of cards to be created run this function
  if (qnumb <= totalCards) {
    console.log("Card " + qnumb);
    inquirer.prompt([{
      name: 'question',
      message: 'Create Card->',
      type: 'text'
    }]).then(function (answer) {

      //separates questions from answers 
      var splitThis = answer.question;
      var splitLocation = splitThis.search('~');
      var leftText = splitThis.slice(0, splitLocation);
      splitLocation += 2
      var rightText = splitThis.slice(splitLocation);

      // create a new instance of the constructor basic card
      var newBasicCard = new BasicCards(leftText, rightText);
      newBasicCard.fixText();
      basicCardsArray.push(newBasicCard);
      qnumb++;
      runBasic()

    })
  } else {
    // study card is build now start study question
    readyToStudy();
  }
}


basicCardsArray = JSON.stringify(basicCardsArray, null, 2);
basicCardsArray = JSON.parse(basicCardsArray);
function showquestion() {

  if (atQuestion < totalCards) {
    // prompt questions 
    inquirer.prompt([{
      name: 'qaa',
      message: basicCardsArray[atQuestion].front,
      type: 'string',

    }]).then(function (answer) {
      answer.qaa = answer.qaa.toLowerCase();
      answer.qaa = answer.qaa.trim();


      if (answer.qaa == basicCardsArray[atQuestion].back) {
        // console.log(basicCardsArray[atQuestion].back);
        console.log(' Correct');
        atQuestion++
        correctAnswer++;
        showquestion()

      } else {
        // console.log(basicCardsArray[atQuestion].back);
        console.log(" Incorrect");
        atQuestion++
        wrongAnswer++
        showquestion()
      }
    });
  } else {
    console.log(`you had ${correctAnswer} question right and ${wrongAnswer} questions wrong`);
    askReplay();
  }
}

function askReplay() {


  inquirer.prompt([{
    name: 'question',
    message: 'Would you like to play again?',
    type: 'confirm'

  }]).then(function (answer) {
    if (answer.question) {
      qnumb = 1;
      correctAnswer = 0;
      wrongAnswer = 0;
      atQuestion = 0
      readyToStudy();
    } else {
      console.log('Thanks for studying. Make sure to come back. Good Bye :)');
    }
  })
}







// ──────────────────────────────────────────────────── HOME BREWED QUESTIONS ─────  



var fs = require('fs');
var localCard = 0;





// create cloze cards

function runMycards(obj) {
  console.log("I made it this far");
  console.log(obj[0].question);
  // console.log(obj.lenght);
  if ( localCard < 2 ){
  inquirer.prompt([{
    name: 'question',
    message: obj[localCard].question,
    type: 'string'
  }]).then(function (answer) {
    if (answer.question == obj[localCard].answer){
      console.log("correct");
    }else{ console.log("incorrect");}

  })
}
}
