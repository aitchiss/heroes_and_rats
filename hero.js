var Hero = function(name, favouriteFood){
  this.name = name
  this.health = 100
  this.favouriteFood = favouriteFood
  this.tasks = []
}

Hero.prototype = {
  talk: function(){
    return 'Hello - I\'m ' + this.name + '!'
  }
}


module.exports = Hero