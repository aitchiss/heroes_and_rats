var assert = require ('assert')
var Rat = require('../rat.js')
var Food = require('../food.js')

describe('rat tests', function(){

  var rat = new Rat()
  var food = new Food("banana", 7)
  
  it('can touch food and contaminate', function(){
    rat.touchFood(food)
    assert.strictEqual(true, food.isContaminated)
  })


})