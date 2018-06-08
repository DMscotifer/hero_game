var assert = require('assert');
var Hero = require('../hero.js');
var Quest = require('../quest.js');
var Food = require('../food.js');

describe('Hero', function() {

  var hero1;
  var food1;
  var food2;

beforeEach(function() {
  quest1 = new Quest("kill all the rats in the sewers", 1, 1, 100);
  food1 = new Food("bacon", 10);
  food2 = new Food("pork chops", 10);
  hero1 = new Hero("Spawn", 100, "bacon");
  hero1.quests.push(quest1);

})

it("should have favourite food", function(){
  assert.strictEqual(hero1.favouriteFood, "bacon");
});

it("should be able to eat food", function() {
  hero1.eat(food2);
  assert.strictEqual(hero1.health, 110);
});

it("should heal x1.5 if favourite food", function() {
  hero1.eat(food1);
  assert.strictEqual(hero1.health, 115);
});

it("should have quests, function", function() {
  assert.strictEqual(hero1.quests[0], quest1);
})

});
