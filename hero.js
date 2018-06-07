// A. Create a constructor to create a Hero character
//
//     A Hero has a name
//     A Hero has health
//     A Hero has a favourite food
//     A Hero can talk saying their name
//     A Hero has a collection of tasks to complete

// D. Extend your hero.
//
//     A hero should be able to eat food, and health should go up by the replenishment value
//     If the food is their favourite food, their health should go up by 1.5 * value.
//     A hero should be able to sort their tasks by difficulty, urgency or reward.
//     A hero should be able to view tasks that are marked as completed or incomplete.
//

var Hero = function(name, health, favouriteFood) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.quests = new Array();
}

Hero.prototype.talk = function() {
  return "I am the incredible " + this.name;
}

Hero.prototype.eat = function(food) {
  if (this.favouriteFood === food.name){
    this.health += (food.replenishmentValue * 1.5);
    } else {
    this.health += food.replenishmentValue;
  }
}

module.exports = Hero;
