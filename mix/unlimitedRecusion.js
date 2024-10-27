const sum = (num) => {
  let sum = num;
  const recursion = (nextNum = undefined) => {
    if (nextNum) {
      sum += nextNum;
      return recursion;
    } else {
      return sum;
    }
  };

  return recursion;
};

console.log(sum(3)(2)(1)(3)());