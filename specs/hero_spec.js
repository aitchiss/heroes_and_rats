var assert = require ('assert')
var Hero = require('../hero.js')

describe('hero tests', function(){

  var hero = new Hero('Irene')

  it('has a name', function(){
    assert.strictEqual('Irene', hero.name)
  })

  it('has an initial health value of 100', function(){
    assert.strictEqual(100, hero.health)
  })


})