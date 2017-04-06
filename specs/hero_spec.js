var assert = require ('assert')
var Hero = require('../hero.js')
var Food = require('../food.js')
var Task = require('../task.js')

describe('hero tests', function(){

  var hero

  beforeEach(function(){
    hero = new Hero('Irene', 'schnitzel')
  })

  

  it('has a name', function(){
    assert.strictEqual('Irene', hero.name)
  })

  it('has an initial health value of 100', function(){
    assert.strictEqual(100, hero.health)
  })

  it('has a favourite food', function(){
    assert.strictEqual('schnitzel', hero.favouriteFood)
  })

  it('can talk and say its name', function(){
    assert.strictEqual('Hello - I\'m Irene!', hero.talk())
  })

  it('starts with empty task array', function(){
    assert.deepEqual([], hero.tasks)
  })

  it('can eat food and increase health', function(){
    var food = new Food('banana', 7)
    hero.eat(food)
    assert.strictEqual(107, hero.health)
  })

  it('can eat fave food, get 1.5 value', function(){
    var food = new Food('schnitzel', 16)
    hero.eat(food)
    assert.strictEqual(124, hero.health)
  })

  it('can add a task', function(){
    var task = new Task("save the world", 10, 9, 2000)
    hero.addTask(task)
    assert.strictEqual(1, hero.tasks.length)
  })


})