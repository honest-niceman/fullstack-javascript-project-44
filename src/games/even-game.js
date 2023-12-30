import getRandomInt from '../utils.js';
import startEngine, { numberOfRounds } from '../index.js';

const evenGameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
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
  const questionsAndAnswers = createQuestionsAndAnswers(numberOfRounds);
  startEngine(evenGameDescription, questionsAndAnswers);
}

export default start;
