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
  quest2 = new Quest("kill all the goblins in the sewers", 2, 2 , 200);
  quest3 = new Quest("kill the wyvern in the swamps", 3, 3, 500);
  food1 = new Food("bacon", 10);
  food2 = new Food("pork chops", 10);
  hero1 = new Hero("Spawn", 100, "bacon");
  hero1.quests.push(quest3);
  hero1.quests.push(quest1);
  hero1.quests.push(quest2);

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

it("should have quests", function() {
  assert.strictEqual(hero1.quests[1], quest1);
  assert.strictEqual(hero1.quests[2], quest2);
})

it("should be able to sort quests by reward", function() {
  hero1.questByReward();
  assert.strictEqual(hero1.quests[2], quest3);
})

});
