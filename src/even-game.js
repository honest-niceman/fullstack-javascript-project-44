import readlineSync from 'readline-sync';
import getRandomInt from './utils.js';

const evenGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const numberOfRounds = 3;
const minBound = 1;
const maxBound = 10;

function isEven(number) {
  return (number % 2 === 0);
}

function createQuestionsAndAnswers(numberOfQuestions) {
  const questionsAndAnswers = [];
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const question = getRandomInt(minBound, maxBound);
    const answer = isEven(question) ? 'yes' : 'no';
    questionsAndAnswers.push([question, answer]);
  }
  return questionsAndAnswers;
}

function start() {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name?');
  console.log(`Hello, ${username}!`);
  console.log(evenGameDescription);
  const questionsAndAnswers = createQuestionsAndAnswers(numberOfRounds);
  for (let i = 0; i < questionsAndAnswers.length; i += 1) {
    const question = `Question: ${questionsAndAnswers[i][0]}`;
    console.log(question);
    const rightAnswer = questionsAndAnswers[i][1];
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      break;
    } else {
      console.log('Correct!');
      if (i === numberOfRounds - 1) {
        console.log(`Congratulations, ${username}!`);
      }
    }
  }
}

export default start;
