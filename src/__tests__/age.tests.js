import Person from '../age';
import Planet from '../planet';
describe('Age', () => {

test("Should correctly construct a person with a past, current, and future age", () => { 
const person = new Person(31, 28, 33);
  expect(person.currentAge).toEqual(31);
  expect(person.pastAge).toEqual(28);
  expect(person.futureAge).toEqual(33);
  });
  
test("Should correctly construct Mercury and tell you how old you are on Mercury", () => {
  const person = new Person(31, 28, 33);
  const Mer = new Planet("Mer", .24);
  const merAge = Mer.checkType(person.currentAge);
  expect(Mer.name).toEqual("Mer");
  expect(merAge).toBeGreaterThanOrEqual(129)
  });

  test("Should correctly construct Venus and tell you how old you are on Venus", () => {
    const person = new Person(31, 28, 33);
    const Ven = new Planet("Ven", .62);
    const venAge = Ven.checkType(person.currentAge);
    expect(Ven.name).toEqual("Ven");
    expect(venAge).toBeGreaterThanOrEqual(50)
  });

  test("Should correctly construct Mars and tell you how old you are on Mars", () => {
    const person = new Person(31, 28, 33);
    const Mar = new Planet("Mar", 1.88);
    const marAge = Mar.checkType(person.currentAge);
    expect(Mar.name).toEqual("Mar");
    expect(marAge).toBeGreaterThanOrEqual(16)
});

  test("Should correctly construct Mars and tell you how old you are on Mars", () => {
    const person = new Person(31, 28, 33);
    const Jup = new Planet("Jup", 11.86);
    const jupAge = Jup.checkType(person.currentAge);
    expect(Jup.name).toEqual("Jup");
    expect(jupAge).toBeGreaterThanOrEqual(2)
  });

  test("Should correctly tell you how long since you've had a birthday on Earth", () => {
    const person = new Person(31, 28, 33);
    const Ear = new Planet("Ear", 1);
    const earAge = Ear.checkType(person.currentAge);
    const earPastAge = Ear.checkType(person.pastAge);
    expect(earAge-earPastAge).toBeGreaterThanOrEqual(3)

  });

test("Should correctly tell you how long since you've had a birthday on Mercury", () => {
  const person = new Person(31, 28, 33);
  const Mer = new Planet("Mer", .24);
  const merAge = Mer.checkType(person.currentAge);
  const merPastAge = Mer.checkType(person.pastAge);
  expect(merAge-merPastAge).toBeGreaterThanOrEqual(12)
});

test("Should correctly tell you how long since you've had a birthday on Venus", () => {
  const person = new Person(31, 28, 33);
  const Ven = new Planet("Ven", .62);
  const venAge = Ven.checkType(person.currentAge);
  const venPastAge = Ven.checkType(person.pastAge);
  expect(venAge-venPastAge).toBeGreaterThanOrEqual(4)
});

test("Should correctly tell you how long since you've had a birthday on Mars", () => {
  const person = new Person(31, 28, 33);
  const Mar = new Planet("Mar", 1.88);
  const marAge = Mar.checkType(person.currentAge);
  const marPastAge = Mar.checkType(person.pastAge);
  expect(marAge-marPastAge).toBeGreaterThanOrEqual(1.5)
});

test("Should correctly tell you how long since you've had a birthday on Jupiter", () => {
  const person = new Person(31, 28, 33);
  const Jup = new Planet("Jup", 11.86);
  const jupAge = Jup.checkType(person.currentAge);
  const jupPastAge = Jup.checkType(person.pastAge);
  expect(jupAge-jupPastAge).toBeGreaterThanOrEqual(0.2)
});

});