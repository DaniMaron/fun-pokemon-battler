const inquirer = require('inquirer');
const {Pokemon,Grass,Water, Fire,Normal, Charmander, Squirtle, Bulbasaur, Rattata } = require("./pokemon");
const Pokeball = require("./pokeball");
const Trainer = require("./trainer");
const Battle = require('./battle')


const trainer = new Trainer();
const charmander = new Charmander(44, 17);
const squirtle = new Squirtle(44, 16);
const rattata = new Rattata(47, 15, 'uselesness');
const bulbasaur = new Bulbasaur(45,16);


// const player2 = new Trainer("Misty");
// const newBattle = new Battle(newTrainer, newTrainer2, newPokemon, newPokemon2)

const firstQuestions= [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    default: 'Ash',
  },
  {
    type: 'list',
    name: 'choice',
    message: 'There is a wild Charmender, what do you wanna do?',
    choices: ['Throw', 'Leave'],
  },
];
const secondQuestions = [
  {
    type: 'list',
    name: 'choice',
    message: 'There is a wild Rattata, what do you wanna do?',
    choices: ['Throw', 'Leave'],
  }
];
const thirdQuestions = [
  {
    type: 'list',
    name: 'choice',
    message: 'There is a wild Squirtle, what do you wanna do?',
    choices: ['Throw', 'Leave'],
  }
];
const fourthQuestions = [
  {
    type: 'list',
    name: 'choice',
    message: 'There is a wild Bulbasaur, what do you wanna do?',
    choices: ['Throw', 'Leave'],
  }
];
const fifthQuestions = [
  {
    type: 'list',
    name: 'choice',
    message: 'Misty wants to battle you, what do you wanna do?',
    choices: ['Fight', 'Run'],
  }
];

function playGame() {
  inquirer
    .prompt(firstQuestions)

    .then(function (firstAnswers) {
      trainer.name = firstAnswers.name
      if (firstAnswers.choice === 'Throw') 
        trainer.catch(charmander)
      else
        console.log('You decided to leave');
      
      return inquirer.prompt(secondQuestions);
    })

    .then(function (secondAnswers) {
      if (secondAnswers.choice === 'Throw') 
        trainer.catch(rattata)
      else
        console.log('You decided to leave');
      if (trainer.belt.length !== 2)
        return inquirer.prompt(thirdQuestions);
      else
        return inquirer.prompt(fifthQuestions);
      
    })
    
    .then(function (thirdAnswers) {
      if (trainer.belt.length !== 2)
{
      if (thirdAnswers.choice === 'Throw') 
      trainer.catch(squirtle)
    else
    console.log('You decided to leave');
      if (trainer.belt.length !== 2)
        return inquirer.prompt(fourthQuestions);
      else
          return inquirer.prompt(fifthQuestions);
      }
})

    .then(function (fourthAnswers) {
      if (trainer.belt.length !== 2)
    {
      if (fourthAnswers.choice === 'Throw') 
        trainer.catch(bulbasaur)
      else
        console.log('You decided to leave');
      
      return inquirer.prompt(fifthQuestions);
      }
    })

    .then(function (fifthAnswers) {
       if (fifthAnswers.choice === 'Fight') 
         console.log('You decided to fight');
      
      else
        console.log('You decided to run away');
    
    
      return inquirer.prompt(fifthQuestions);
    
      // do stuff with the answers to the secondQuestions, e.g. choose moves to use / fight / run away / select pokemon to fight with
    })
    
    
}

playGame();
