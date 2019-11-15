exports.multiBracketValidation = (str) => {
  let input = str.split();
  let stack = [];

  for (let i=0; i<input.length; i++){

    if (i==='('||i==='{'||i=='['){
      stack.push(i);
      let temp = i; 
      if (i===')' && temp ===')'||i===']'&& temp ==='['||i==='}'&& temp ==='{'){
        stack.pop();
      }
    } 
    if (stack.length > 0){
      return false;
    }else{
      return true;
    }
  }
};

