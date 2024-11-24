const calcualteFactorial = (num) => {
  if (num === 1) return 1;
  return num * calcualteFactorial(num - 1);
};

console.log(calcualteFactorial(5));
