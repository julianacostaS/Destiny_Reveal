
const answerElement = document.querySelector("#answer")
const inputQuestion = document.querySelector("#inputQuestion")

const answers = [
  "Sure!",
  "I'm not so sure about that.",
  "Of course!",
  "My answer is no!",
  "Definitely yes!",
  "It's better not to tell you right now!",
  "Try again soon!",
  "Good chances.",
  "Chances are not so good.",
  "Concentrate and ask again.",
  "Signs says yes.",
  "Do not count on it.",
  "No doubt!",
  "My sources say no",
  "It is decidedly so.",
  "Absolutely!",
  "Try again!",
  "It is a matter of time.",
]


  //create a function for the click in 'ask the question' button
  function askQuestion() {

//if no question is typed set an alert and stop the rest of the function using 'return'
  if ( inputQuestion.value == "") {
  alert("Please, type your question!")
  return
  }

//create a div in the HTML concateneating with the inputQuestion value 
  const question = "<div>" + inputQuestion.value + "</div>"

  //get the total lenght of the array 
  const totalAnswers = answers.length

  //use the method Math.floor and Math.random and mutiply Match.random with  the array length to obtain a random answer
  const randomNumber = Math.floor(Math.random() * totalAnswers)

  answerElement.innerHTML = question + answers[randomNumber]

  //Hide the messages after 3 seconds 
    setTimeout(function() {
      answerElement.style.opacity = 0;
    }, 3000)
  }

