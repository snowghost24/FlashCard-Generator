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
     
   


   // function Fubar (foo, bar) {
     
    
   //    if (!(this instanceof BasicConstruct)) {
   //        throw new Error("Fubar needs to be called with the new keyword");
   //    }
    
   //    this._foo = foo;
   //    this._bar = bar;
   //  }
    
   //  Fubar("Situation Normal", "All Fsked Up");
   //    //=> Error: Fubar needs to be called with the new keyword


   // function Fubar (foo, bar) {
   //    "use strict"
    
   //    if (this instanceof Fubar) {
   //      this._foo = foo;
   //      this._bar = bar;
   //    }
   //    else return arguments[0] instanceof Fubar;
   //  }
    
   //  var snafu = new Fubar("Situation Normal", "All Fsked Up");
    