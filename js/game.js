import Snake from './snake.js';
import Apple from './apple.js';
import UI from './ui.js';

class Game {
    constructor() {
        this.canvas = document.getElementById('gameCanvas');
        this.context = this.canvas.getContext('2d');
        this.snake = new Snake();
        this.apple = new Apple();
        this.score = 0;
        this.gameOver = false;
        this.startTime = Date.now();
        this.highScore = localStorage.getItem('highScore') || 0;
    }

    start() {
        this.gameLoop();
    }

    gameLoop() {
        if (!this.gameOver) {
            this.update();
            this.draw();
            requestAnimationFrame(() => this.gameLoop());
        }
    }

    update() {
        this.snake.update();
        if (this.snake.checkCollision(this.apple)) {
            this.snake.eatApple();
            this.apple.move();
            this.score += 10;
        }

        if (this.snake.checkSelfCollision() || this.snake.checkWallCollision(this.canvas.width, this.canvas.height)) {
            this.gameOver = true;
            if (this.score > this.highScore) {
                this.highScore = this.score;  // Update the high score
                localStorage.setItem('highScore', this.highScore);
            }
            return;
        }
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.snake.draw(this.context);
        this.apple.draw(this.context);

        if (this.gameOver) {
            UI.drawGameOver(this.context, this.canvas, this.score, this.highScore);
        } else {
            UI.drawScore(this.context, this.canvas, this.score);
            UI.drawTime(this.context, this.canvas, this.startTime);
        }
    }

    handleInput(keyCode) {
        this.snake.handleInput(keyCode);
    }

    restart() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);  // Clear the canvas on restart
        this.snake = new Snake();
        this.apple = new Apple();
        this.score = 0;
        this.gameOver = false;
        this.startTime = Date.now();
        this.start();
    }
}

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

export default Game;

