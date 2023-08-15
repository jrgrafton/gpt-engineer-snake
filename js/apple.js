class Apple {
    constructor() {
        this.x = Math.floor(Math.random() * 1024);
        this.y = Math.floor(Math.random() * 768);
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, 5, 0, 2 * Math.PI, false);
        context.lineWidth = 2;
        context.strokeStyle = '#3C412C';
        context.stroke();
    }

    move() {
        this.x = Math.floor(Math.random() * 1024);
        this.y = Math.floor(Math.random() * 768);
    }
}

export default Apple;