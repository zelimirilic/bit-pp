const startGameBtn = document.getElementById('start-game-btn');

const KAMEN = 'KAMEN';
const PAPIR = 'PAPIR';
const MAKAZE = 'MAKAZE';
const defaultValue = KAMEN;
const result_draw = 'DRAW';
const result_player_wins = 'PLAYER_WINS';
const result_computer_wins = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = function () {
    const selection = prompt('Please your choice is....' + `${KAMEN}, ${PAPIR} or ${MAKAZE} ? `, '').toLocaleUpperCase();
    if (selection !== KAMEN && selection !== PAPIR && selection !== MAKAZE) {
        alert(`Invalid choice! We choose ${KAMEN} for you ! `);
        return defaultValue;
    }
    return selection;
}

const getComputerChoice = function () {
    const rndVal = Math.random();
    if (rndVal < 0.34) {
        return KAMEN;
    } else if (rndVal < 0.67) {
        return PAPIR;
    } else {
        return MAKAZE;
    }
}

const getWinner = function (cChoice, pChoice = defaultValue) {
    if (cChoice === pChoice) {
        return result_draw;
    } else if (
        (cChoice === KAMEN && pChoice === PAPIR) ||
        (cChoice === PAPIR && pChoice === MAKAZE) ||
        (cChoice === MAKAZE && pChoice === KAMEN)
    ) {
        return result_player_wins;
    } else {
        return result_computer_wins;
    }
};
startGameBtn.addEventListener('click', function () {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is strating.....');
    const playerChoice = getPlayerChoice();
    const computeChoice = getComputerChoice();
    
    let winner;
    if(playerChoice) {
        winner = getWinner(computeChoice, playerChoice);
    }
    else {
        winner = getWinner(computeChoice);
    }

    //const winner = getWinner(computeChoice, playerChoice);
    let message = `You picked ${playerChoice} - computer picked ${computeChoice}, therefore you `;
    if (winner === result_draw) {
        message = message + 'had a draw';
    } else if (winner === result_player_wins) {
        message = message + 'won';
    } else {
        message = message + 'lost';
    }
    alert(message);
    gameIsRunning = false;
});