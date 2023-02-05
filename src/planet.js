export default class Planet {
  constructor(name, ageModifier) {
  this.name = name;
  this.ageModifier = ageModifier;
    }
    checkType(person) {
      let planetAge = person.currentAge / this.ageModifier;
      return planetAge;
    }
  };