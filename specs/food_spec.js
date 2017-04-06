var assert = require ('assert')
var Food = require('../food.js')

describe('food tests', function(){

  var food =  new Food('banana', 7)

  it('has a name', function(){
    assert.strictEqual('banana', food.name)
  })

  it('has a nourishment factor', function(){
    assert.strictEqual(7, food.nourishmentFactor)
  })

  


})