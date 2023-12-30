import getRandomInt from '../utils.js';
import startEngine, { numberOfRounds } from '../index.js';

const calcGameDescription = 'What number is missing in the progression?';

function generateProgression(firstElem, step, length) {
  const progression = [];
  let currentElem = firstElem;
  for (let i = 0; i < length; i += 1) {
    progression.push(currentElem);
    currentElem += step;
  }
  return progression;
}

function createQuestionsAndAnswers(numberOfQuestions) {
  const questionsAndAnswers = [];
  for (let i = 0; i < numberOfQuestions; i += 1) {
    const length = getRandomInt(5, 10);
    const step = getRandomInt(2, 6);

    const firstElementOffset = step * getRandomInt(1, 10);
    const firstElement = getRandomInt(step, firstElementOffset);

    const progression = generateProgression(firstElement, step, length);
    const indexToHide = getRandomInt(0, progression.length - 1);
    const answer = `${progression[indexToHide]}`;

    progression[indexToHide] = '..';
    const question = `${progression.join(' ')}`;

    questionsAndAnswers.push([question, answer]);
  }
  return questionsAndAnswers;
}

function start() {
  const questionsAndAnswers = createQuestionsAndAnswers(numberOfRounds);
  startEngine(calcGameDescription, questionsAndAnswers);
}

export default start;
