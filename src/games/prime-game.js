import getRandomInt from '../utils.js';
import startEngine, { numberOfRounds } from '../index.js';

const evenGameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minBound = 1;
const maxBound = 100;

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function createQuestionsAndAnswers(numberOfQuestions) {
  const questionsAndAnswers = [];
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const question = getRandomInt(minBound, maxBound);
    const answer = isPrime(question) ? 'yes' : 'no';
    questionsAndAnswers.push([question, answer]);
  }
  return questionsAndAnswers;
}

function start() {
  const questionsAndAnswers = createQuestionsAndAnswers(numberOfRounds);
  startEngine(evenGameDescription, questionsAndAnswers);
}

export default start;
