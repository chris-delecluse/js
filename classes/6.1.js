class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset) {
        this.xPos = xOffset;
        this.yPos = yOffset;
    }

    get surface() {
        let surface = Math.pow(this.radius, 2) * Math.PI;
        return surface;
    }
}

let a = new Circle(3, 5, 10);

console.log(a);

a.move(5, 9);

console.log(a)
console.log(a.surface);