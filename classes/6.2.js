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

let rectangleOne = new Rectangle(1, 1, 10, 20);
let rectangleTwo = new Rectangle(19, 15, 10, 20);

console.log(rectangleOne.collides(rectangleTwo))