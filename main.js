
var player, current, scores;

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

function convertionLettre1a6(chiffre) {
	let lettre;
	switch (chiffre) {
		case 1:
			lettre = "one";
			break;
		case 2:
			lettre = "two";
			break;
		case 3:
			lettre = "three";
			break;
		case 4:
			lettre = "four";
			break;
		case 5:
			lettre = "five";
			break;
		case 6:
			lettre = "six";
            break;
    }   
		return lettre;
};


function convertion(chiffre) {
	if (chiffre >= 0 && chiffre < 7 ) {
		return convertionLettre1a6(chiffre);
	}
};

function roll () {
    var a = 0;
    a = Math.random();
    a = Math.ceil(6*a);
    dice.setAttribute('class', `fas fa-dice-${convertion(a)} fa-10x`);

    if (a !== 1) {
        current += a;
		document.getElementById('current_' + player ).textContent = current;
    } else {
        nextPlayer();
    }
};

function hold () {
    scores[player] = scores[player] + current;
    document.getElementById('score-' + player).textContent = scores[player];

   if (scores[player] >= 100) {
       let vainqueur = document.getElementById('gagnant');
       vainqueur.setAttribute('class', 'vainqueur');
       vainqueur.textContent = `LE JOUEUR ${player} REMPORTE LA PARTIE`;
       current = 0;
       scores = [0, 0];
   } else {
       nextPlayer();
   };
}

let newGame = document.getElementById('new-game');
let rollDice = document.getElementById('roll-dice');
let holdButton = document.getElementById('hold-button');

newGame.addEventListener('click', nouveau);
rollDice.addEventListener('click', roll);
holdButton.addEventListener('click', hold);


