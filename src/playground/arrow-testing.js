//******************************************************************************************
// When you are having undefined problems with map, it is because this is not bound on anonymous Arrow functions!!
// Below is a proper pattern to use to bind (without workaround (this = that))
// So below the this in the multiply function is bound to the parent!!( You have been binding it to the parent page)

const multiplier = {
  numbers: [2,4,6],
  multiplyBy: 6,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};
 console.log(multiplier.multiply());
 //******************************************************************************************
