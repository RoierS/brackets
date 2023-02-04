module.exports = function check(str, bracketsConfig) {
  let stack = [];
  
  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let found = false;
    for (let j = 0; j < bracketsConfig.length; j++) {
      let openingBracket = bracketsConfig[j][0];
      let closingBracket = bracketsConfig[j][1];
      if (currentSymbol === openingBracket) {
        found = true;
        if (openingBracket === closingBracket) {
          if (stack[stack.length - 1] === openingBracket) {
            stack.pop();
            break;
            }
        }
        stack.push(closingBracket);
        break;
      }
    }
    if (!found) {
      if (currentSymbol !== stack[stack.length - 1]) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
  }
