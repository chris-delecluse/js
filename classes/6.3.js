class Rectangle {
    constructor (topLeftXpos, topLeftYPos, width, length) {
        this.topLeftXpos = topLeftXpos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides (otherRectangle) {
        if (this.topLeftXpos <= otherRectangle.topLeftXpos + otherRectangle.width &&
            this.topLeftXpos + this.width >= otherRectangle.topLeftXpos &&
            this.topLeftYPos <= otherRectangle.topLeftYPos + otherRectangle.length &&
            this.topLeftYPos + this.length >= otherRectangle.topLeftYPos) {
                return true;
            } else {
                return false;
            }
    }
}


const randomNbr = () => {
    let min = 1;
    let max = 100;
    return Math.round(Math.random() * (max-min) + min);
}


const rectangleGenerator = (n) => {
    let array = [];

    for (let i = 0; i < n; i++) {
        array.push(new Rectangle(randomNbr(), randomNbr(), randomNbr(), randomNbr()));
    }

    return array;
}

const isCollide = (array, srcElement) => {
    for (let i = 0; i < array.length; i++) {
        if (srcElement.collides(array[i]) === true) {
            console.log("colliding");
        } else {
            console.log("not colliding");
        }
    }
}

a = new Rectangle(1, 1, 20, 20);
b = rectangleGenerator(1000);

isCollide(b, a);