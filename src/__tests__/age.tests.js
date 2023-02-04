import Person from '../age';

describe('Age', () => {

test("Should correctly construct a person with a past, current, and future age", () => { 
const person = new Person(31, 28, 33);
  expect(person.currentAge).toEqual(31);
  expect(person.pastAge).toEqual(28);
  expect(person.futureAge).toEqual(33);
  });
  
  test("To accurately calculate what age you currently are on Mercury", () => {
    const currentPerson = new Person(31, 28, 33);
    expect(currentPerson.checkType().toEqual(129.16));
  });
  // test("To accurately calculate how long until your next birthday on each planet", () => {
  //   Code: 
  //   expect()
  // });
  // test("To accurately calculate how long since your last birthday on each planet", () => {
  //   Code:
  //   expect()
  // });
});