class Snake {
    constructor() {
        this.body = [{x: 512, y: 384}];
        this.direction = 'UP';
        this.growth = 0;
        this.speed = 3;
    }

    update() {
        let head = Object.assign({}, this.body[0]); // copy head
        switch(this.direction) {
            case 'UP':
                head.y -= this.speed;
                break;
            case 'DOWN':
                head.y += this.speed;
                break;
            case 'LEFT':
                head.x -= this.speed;
                break;
            case 'RIGHT':
                head.x += this.speed;
                break;
        }

        this.body.unshift(head); // add new head to snake
        if (this.growth > 0) {
            this.growth--;
        } else {
            this.body.pop(); // remove tail
        }
    }

    draw(context) {
        for (let part of this.body) {
            context.fillRect(part.x, part.y, 10, 10);
        }
    }

    checkCollision(apple) {
        return this.body[0].x < apple.x + 5 && this.body[0].x + 10 > apple.x - 5 &&
               this.body[0].y < apple.y + 5 && this.body[0].y + 10 > apple.y - 5;
    }

    checkSelfCollision() {
        for (let i = 1; i < this.body.length; i++) {
            if (this.body[i].x === this.body[0].x && this.body[i].y === this.body[0].y) {
                return true;
            }
        }
        return false;
    }

    checkWallCollision(width, height) {
        return this.body[0].x < 0 || this.body[0].y < 0 || this.body[0].x > width || this.body[0].y > height;
    }

    handleInput(keyCode) {
        switch(keyCode) {
            case 'w':
                if (this.direction !== 'DOWN') {
                    this.direction = 'UP';
                }
                break;
            case 's':
                if (this.direction !== 'UP') {
                    this.direction = 'DOWN';
                }
                break;
            case 'a':
                if (this.direction !== 'RIGHT') {
                    this.direction = 'LEFT';
                }
                break;
            case 'd':
                if (this.direction !== 'LEFT') {
                    this.direction = 'RIGHT';
                }
                break;
        }
    }

    grow() {
        this.growth += 10/this.speed;
    }

    eatApple() {
        this.speed += 0.1; // Increase speed slightly
        this.grow();
    }
}

export default Snake;