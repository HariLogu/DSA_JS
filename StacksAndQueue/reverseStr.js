const reverseString = (str) => {
  let stack = [];
  for (let i of str) {
    stack.push(i);
  }
  let reversed = "";
  while (stack.length > 0) {
    let last = stack.pop();
    reversed =reversed+last;
  }
  return reversed;
};
console.log(reverseString("hello world"));
