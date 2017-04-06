var assert = require ('assert')
var Hero = require('../hero.js')

describe('hero tests', function(){

  var hero = new Hero('Irene', 'schnitzel')

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


})