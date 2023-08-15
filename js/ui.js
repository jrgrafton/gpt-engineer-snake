class UI {
    static instance;

    constructor() {}

    static getInstance() {
        if (!UI.instance) {
            UI.instance = new UI();
        }
        return UI.instance;
    }

    drawGameOver(context, canvas, score, highScore) {
        context.fillStyle = 'rgba(0, 0, 0, 0.75)'; // semi-transparent black
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#FFFFFF'; 
        context.font = '48px Arial';
        context.textAlign = 'center';
        context.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 60);

        context.font = '32px Arial';
        context.fillText('Score: ' + score, canvas.width / 2, canvas.height / 2 - 10);
        context.fillText('High Score: ' + highScore, canvas.width / 2, canvas.height / 2 + 40);

        context.font = '24px Arial';
        context.fillStyle = '#FF0000'; // red color
        context.fillText('Click to Restart', canvas.width / 2, canvas.height / 2 + 90);
    }

    drawScore(context, canvas, score) {
        context.fillStyle = '#3C412C';
        context.font = '20px Arial';
        context.textAlign = 'left';
        context.fillText('Score: ' + score, 10, 30);
    }

    drawTime(context, canvas, startTime) {
        const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
        context.fillStyle = '#3C412C';
        context.font = '20px Arial';
        context.textAlign = 'left';
        context.fillText('Time: ' + timeElapsed, canvas.width - 100, 30);
    }
}

export default UI.getInstance();