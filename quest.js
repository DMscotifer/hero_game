// B. Create a constructor to create Task objects
//
//     A task has a difficulty level
//     A task has an urgency level
//     A task has a reward
//     A task should be able to be marked as completed
//

var Quest = function(description, difficulty, urgency, reward){
  this.description = description;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.completed = false;
}

Quest.prototype.nowCompleted = function(){
  this.completed = true;
}

module.exports = Quest;
