module.exports = function BasicCards(front, back) {
  "use strict"

  if (this instanceof BasicCards) {
    this.front = front;
    this.back = back;
    this.fixText = function () {
      front = front.toLowerCase();
      front = front.trim();
      back = back.toLowerCase();
      back = back.trim();
    }
  }
  else return new BasicCards(front, back);

}






