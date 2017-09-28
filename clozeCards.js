module.exports = function ClozeCards(text,cloze){
      "use strict"
      // var obj,
      //     ret;
    
      if (this instanceof ClozeCards) {
        this.text = text;
        this.cloze = cloze;
      }
      else return new ClozeCards(text, cloze);
    }
    