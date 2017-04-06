var assert = require ('assert')
var Food = require('../food.js')

describe('food tests', function(){

  var food =  new Food('banana')

  it('has a name', function(){
    assert.strictEqual('banana', food.name)
  })

  


})