var assert = require('assert');
var Hero = require('../hero.js');
var Quest = require('../quest.js');
var Food = require('../food.js');

describe('Hero', function() {
  food1 = new Food("bacon", 10);
  hero1 = new Hero("Spawn", 100, food1);
})

it("should have favourite food", function(){
  assert.strictEqual(hero1.favouriteFood, food1);
});
