var questions = [
  {
    question:"How many baseball players are there on a baseball team?",
    answer: 9
  },
  {
    question:"What is the name of Batmans bulter?",
    answer:"Alfred"
  },
  {
    question:"Who was the leader of the wolves in the Jungle Book?",
    answer:"Akala"
  },
  {
    question:"Hg is the chemical symbol of which element?",
    answer:"Mercury"
  },
  {
    question:"What is another word for lexicon?",
    answer:"Dictionary"
  },
  {
    question:" What's 6 * 2?",
    answer: 12
  }
];
var qarray = [];

// loop through each question
for(var i = 0; i < questions.length; i++) {
  // store each question
  qarray.push(questions[i].question);
  // store each element to add questions too
  var el = document.getElementById('question' + [i]);
  //  check what question and element is being selected
  // console.log(question, el);
  // update text content of each element
  //el.textContent = question;
}
console.log(qarray)

 // check results when user submits quiz
function testResults() {
  // console.log(question)
  // store variables to update correct and incorrect totals
  var correct = 0;
  var incorrect = 0;
  // for loop through questions array
  for(var i = 0; i < questions.length; i++) {
    // store each correct answer
    var answer = questions[i].answer;
    // store each user answer
    var guess = document.getElementById('answer' + [i]).value;
    // store element to add a class if correct or incorrect
    var questionSpot = document.getElementById('question' + [i]);
    // check if the user answer matches the correct answer
    if(answer == guess) {
      // update class on questionSpot
      questionSpot.className = 'correct';
      // add one to correct
      correct++;
    } else {
      // update class on questionSpot
      questionSpot.className = 'incorrect';
      // add one to incorrect
      incorrect++;
    };
  };
  // update correct and incorrect values
  document.getElementById('correct').textContent = correct;
  document.getElementById('incorrect').textContent = incorrect;
}
