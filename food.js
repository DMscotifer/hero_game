// C. Create a constructor to create Food objects.
//
//     Food should have a name
//     Food should have a replenishment value



var Food = function(name, replenishmentValue) {
  this.name = name;
  this.replenishmentValue = replenishmentValue;
}

module.exports = Food;
