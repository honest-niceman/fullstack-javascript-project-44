import getRandomInt from '../utils.js';
import startEngine, { numberOfRounds } from '../index.js';

const max = 100;
const min = 10;
const availableOperators = ['+', '-', '*'];
const calcGameDescription = 'What is the result of the expression?';

function calculate(a, b, sign) {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
}

function createQuestionsAndAnswers(numberOfQuestions) {
  const questionsAndAnswers = [];
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const a = getRandomInt(min, max);
    const b = getRandomInt(min, max);
    const sign = availableOperators[getRandomInt(0, availableOperators.length - 1)];
    const question = `${a} ${sign} ${b}`;
    const answer = `${calculate(a, b, sign)}`;
    questionsAndAnswers.push([question, answer]);
  }
  return questionsAndAnswers;
}

function start() {
  const questionsAndAnswers = createQuestionsAndAnswers(numberOfRounds);
  startEngine(calcGameDescription, questionsAndAnswers);
}

export default start;
