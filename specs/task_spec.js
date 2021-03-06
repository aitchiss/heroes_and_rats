var assert = require ('assert')
var Task = require('../task.js')

describe('task tests', function(){

  var task = new Task("get the shopping in", 4, 3, 10)

  it('has a description', function() {
    assert.strictEqual('get the shopping in', task.description)
  })

  it('has a difficulty level', function(){
    assert.strictEqual(4, task.difficulty)
  })

  it('has a reward value', function(){
    assert.strictEqual(10, task.reward)
  })

  it('has an urgency level', function(){
    assert.strictEqual(3, task.urgency)
  })

  it('starts with completed status of false', function() {
    assert.ok(!task.completed)
  })

  it('can be marked completed', function() {
    task.markCompleted()
    assert.ok(task.completed)
  })


})