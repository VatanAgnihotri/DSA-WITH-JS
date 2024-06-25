const encode = (strs) => {
  let str = "";
  for (let value of strs) {
    str += `${value.length}#${value}`;
  }
  return str;
};

const decode = (str) => {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "#" && !isNaN(str[i - 1]))
      arr.push(str.substr(i + 1, str[i - 1]));
  }
  return arr;
};

const e = encode(["lint", "code", "love", "you"]);

console.log(e);
console.log(decode(e));
