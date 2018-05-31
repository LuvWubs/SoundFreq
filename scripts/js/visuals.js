var divide = function divide(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
      throw new Error("Divide requires two numbers. One or both of your arguments was not a number.");
    }
    else {
      return x / y;
    }
  };
  
  module.exports = divide;