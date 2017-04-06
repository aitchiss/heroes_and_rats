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
    var multiplier = 1
    if (food.isContaminated){
      multiplier = -1
    } else if (food.name === this.favouriteFood){
      multiplier = 1.5
    }
    this.health += food.nourishmentFactor * multiplier
  },

  addTask: function(task){
    this.tasks.push(task)
  },

  sortTasksByDifficulty: function () {
    this.tasks.sort(function(a, b) {
      return a.difficulty - b.difficulty
    })
  },

  sortTasksByUrgency: function () {
    this.tasks.sort(function(a, b) {
      return a.urgency - b.urgency
    })
  },

  sortTasksByReward: function () {
    this.tasks.sort(function(a, b) {
      return a.reward - b.reward
    })
  },

}


module.exports = Hero