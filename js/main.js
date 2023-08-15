import Game from './game.js?version=1';

const game = new Game();
game.start();

window.addEventListener('keydown', (event) => {
    game.handleInput(event.key);
});

window.addEventListener('click', () => {
    if (game.gameOver) {
        game.restart();
    }
});