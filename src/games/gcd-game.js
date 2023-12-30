import getRandomInt from '../utils.js';
import startEngine, { numberOfRounds } from '../index.js';

const calcGameDescription = 'Find the greatest common divisor of given numbers.';
const max = 300;
const min = 10;

function findGcd(a, b) {
  let newA = a;
  let newB = b;
  while (newB !== 0) {
    const temp = newB;
    newB = newA % newB;
    newA = temp;
  }
  return newA;
}

function createQuestionsAndAnswers(numberOfQuestions) {
  const questionsAndAnswers = [];
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const a = getRandomInt(min, max);
    const b = getRandomInt(min, max);
    const question = `${a} ${b}`;
    const answer = `${findGcd(a, b)}`;
    questionsAndAnswers.push([question, answer]);
  }
  return questionsAndAnswers;
}

function start() {
  const questionsAndAnswers = createQuestionsAndAnswers(numberOfRounds);
  startEngine(calcGameDescription, questionsAndAnswers);
}

export default start;
