var assert = require ('assert')
var Task = require('../task.js')

describe('task tests', function(){

  var task = new Task("get the shopping in", 4)

  it('has a difficulty level', function(){
    assert.strictEqual(4, task.difficulty)
  })


})