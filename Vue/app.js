new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        mosterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.mosterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            this.playerHealth -= this.calculateDamage(3, 10);
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits ' + this.playerHealth
            });

            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },

        specialAttack: function () {
            this.playerHealth -= this.calculateDamage(10, 15);
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits to strong now for ' + this.playerHealth
            });

            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },

        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits for 10'
            });

            this.monsterAttacks();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },

        monsterAttacks: function () {
            this.mosterHealth -= this.calculateDamage(5, 12);
            this.checkWin();
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits ' + this.mosterHealth
            });
        },

        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.playerHealth <= 0) {
                if (confirm('You Lost game ! Another game ?')) {
                    this.startGame();
                } else {
                    gameIsRunning = false;
                }
                return true;
            } else if (this.mosterHealth <= 0) {
                if (confirm('You Won !!! Another game ?')) {
                    this.startGame();
                } else {
                    gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }

});