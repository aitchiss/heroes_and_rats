var Rat = function(){

}

Rat.prototype = {
  touchFood: function(food){
    food.isContaminated = true
  }
}

module.exports = Rat