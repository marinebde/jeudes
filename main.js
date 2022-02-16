import {convertion} from './modules/convertion-dice.js';

let player, current, scores;
let myModal = new bootstrap.Modal(document.getElementById('modal1'), {
    keyboard: false
  })

nouveau();

function nouveau() {
    player = 0;
    current = 0;
    scores = [0, 0];
    let dice = document.getElementById('dice');
    dice.setAttribute('class', `fas fa-dice-one fa-10x`);

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current_0').textContent = '0';
    document.getElementById('current_1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    let gagnant = document.getElementById('gagnant');
    gagnant.textContent= "";
    gagnant.removeAttribute('class');
    
};

function nextPlayer() {
    player === 0 ? player = 1 : player = 0;
    current = 0;

    document.getElementById('current_0').textContent ='0';
    document.getElementById('current_1').textContent ='0';
}

let newGame = document.getElementById('new-game');
let rollDice = document.getElementById('roll-dice');
let holdButton = document.getElementById('hold-button');

newGame.addEventListener('click', nouveau);

rollDice.addEventListener('click', () => {
    let a = 0;
    a = Math.random();
    a = Math.ceil(6*a);
    dice.setAttribute('class', `fas fa-dice-${convertion(a)} fa-10x`);

    if (a !== 1) {
        current += a;
		document.getElementById('current_' + player ).textContent = current;
    } else {
        nextPlayer();
    }
});

holdButton.addEventListener('click', () => {
    scores[player] = scores[player] + current;
    document.getElementById('score-' + player).textContent = scores[player];

   if (scores[player] >= 100) {
    myModal.show();
    current = 0;
    scores = [0, 0];
    if (player == 0){
        document.getElementById('modal-body').textContent = `Player 1`;
    } else {
        document.getElementById('modal-body').textContent = `Player 2`;
    }
   } else {
       nextPlayer();
   };
});
