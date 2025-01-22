const readline = require('readline');
const express = require('express');
const bodyParser = require('body-parser');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const app = express();
const port = 5200;
const game = {};

app.use(bodyParser.json());

app.post('/start', (req, res) => {
    game.start();
    res.send("Game started. Check the console for the game progress.");
});

app.post('/choosePath', (req, res) => {
    const direction = req.body.direction;
    game.choosePath(direction, res);
});

game.choosePath = function(direction, res) {
    switch(direction.toLowerCase()) {
        case 'north':
            this.northPath(res);
            break;
        case 'south':
            this.southPath(res);
            break;
        case 'east':
            this.eastPath(res);
            break;
        case 'west':
            this.westPath(res);
            break;
        default:
            res.send("Invalid direction. Please choose north, south, east, or west.");
            break;
    }
};

game.northPath = function(res) {
    res.send("You head north and find a river. You can either swim across or go back.");
};

game.southPath = function(res) {
    res.send("You head south and encounter a wild animal. You can either fight or run.");
};

game.eastPath = function(res) {
    res.send("You head east and find a village. The villagers welcome you and offer you food and shelter. You win!");
};

game.westPath = function(res) {
    res.send("You head west and find a mountain. You can either climb the mountain or go back.");
};


module.exports = app;