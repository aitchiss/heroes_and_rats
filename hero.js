var Hero = function(name, favouriteFood){
  this.name = name
  this.health = 100
  this.favouriteFood = favouriteFood
  this.tasks = []
}

Hero.prototype = {
  talk: function(){
    return 'Hello - I\'m ' + this.name + '!'
  },

  eat: function(food){
    if (food.name === this.favouriteFood){
      this.health += (1.5 * food.nourishmentFactor)
    } else {
      this.health += food.nourishmentFactor
    }
  }
}


module.exports = Hero