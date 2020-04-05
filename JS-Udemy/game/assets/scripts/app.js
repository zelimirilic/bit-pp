const ATTACK_VALUE = 10;
const MONSTERATTACK_VALUE = 13;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Maximum life for player and monster.....', '100');
let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;


adjustHealthBars(chosenMaxLife);

function writeToLog(event, value, playerHealth, monsterHealth) {
    let logEntry = {
        event: event,
        value: value,
        finalPlayerHealth: playerHealth,
        finalMonsterHealth: monsterHealth
    };
    switch (event) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = 'PLAYER';
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = 'PLAYER';
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry;
            break;
    };
    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTERATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentPlayerHealth, currentMonsterHealth);

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be death but Bonus Life saved you !!!');
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You win !');
        writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentPlayerHealth, currentMonsterHealth);
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost !');
        writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentPlayerHealth, currentMonsterHealth);
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('You have a draw !');
        writeToLog(LOG_EVENT_GAME_OVER, 'NOBODY WON', currentPlayerHealth, currentMonsterHealth);
    }
    if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
        reset()
    }
}

function attackMonster(mode) {
    const maxDamage = mode === 'ATTACK' ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent = mode === 'ATTACK' ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(logEvent, damage, currentPlayerHealth, currentMonsterHealth);

    endRound();
}

function attackHandler() {
    attackMonster('ATTACK');
}

function strongAttackHandler() {
    attackMonster('STRONG_ATTACK');
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert('You can not heal more than your maximum life is! ')
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentPlayerHealth, currentMonsterHealth);
    endRound();
}

function printLog() {


    for (const logEntry of battleLog) {
        console.log(logEntry);
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLog);