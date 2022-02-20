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