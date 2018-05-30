//NOTE: TO TEST ME COMMENT OUT APP.JS AND PASTE ME IN IN ENTIRETY
class Person {
  constructor(name = 'anonjackass', age = 0) {
      this.name = name;
      this.age = age;
  }
  getGreeting() {
    // return 'Hi. I am ' + this.name + '!'; OLD WAY
    return  `hi ${this.name} you are an ass`
  }
}

class Student extends Person {
  constructor(name, age, major) {
      super(name, age);
      this.major = major;
  }
  hasMajor() {
    return !!this.major; //this is the opposite of the opposite of undefined i think
  }
  //overriding a class method
  getGreeting() {
    // return 'Hi. I am ' + this.name + '!'; OLD WAY
    return  `hi ${this.name} u are now a snart ass student`
  }
}

class Traveler extends Person {
  constructor(name, age, home) {
    super(name, age);
    this.home = home;
  }
  hasHome() {
    return !!this.home;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    // console.log(`this has home = ${this.hasHome()}`)
    if (this.hasHome()) {
      greeting += ` and u are from ${this.home}`;

    }
    return greeting;
  }
}

const me = new Traveler('vader', 13, 'motown');
const me2 = new Person();
const me3 = new Traveler('ihave no home', 12, ' a shithole country');

console.log(me.getGreeting());
// console.log(me2);
// console.log(me3);
console.log(me2.getGreeting());
console.log(me3.getGreeting());
// console.log(me2);
// console.log(me3.hasMajor());
