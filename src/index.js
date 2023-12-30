import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

function start(rules, questionsAndAnswers) {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name?');
  console.log(`Hello, ${username}!`);
  console.log(rules);

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
