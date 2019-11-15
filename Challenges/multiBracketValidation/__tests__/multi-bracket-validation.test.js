'use strict';

// Require the module we're testing
const Val = require('../multi-bracket-validation.js');

describe('Verify multiBracketValidation function correctly check whether or not the brackets in the string are balanced', () => {
  it('verify balanced Curly Brackets ', () => {   
    let result = Val.multiBracketValidation('{}');
    expect(result).toBeTruthy;
  });

  it('verify balanced Curly Brackets and Round Brackets', () => {   
    let result = Val.multiBracketValidation('{}(){}');
    expect(result).toBeTruthy;
  });

  it('verify balanced Round Brackets, Square Brackets with text incide ', () => {   
    let result = Val.multiBracketValidation('()[[Extra Characters]]');
    expect(result).toBeTruthy;
  });
  it('verify balanced Round Brackets, Curly Brackets and nested Square Brackets ', () => {   
    let result = Val.multiBracketValidation('(){}[[]]');
    expect(result).toBeTruthy;
  });

  it('verify balanced Round Brackets, Curly Brackets and Square Brackets with text incide', () => {   
    let result = Val.multiBracketValidation('{}{Code}[Fellows](())');
    expect(result).toBeTruthy;
  });
  it('verify balanced Curly Brackets and Square Brackets + ubalanced Round Brackets, ', () => {   
    let result = Val.multiBracketValidation('[({}]');
    expect(result).toBeFalsy;
  });
  it('verify unbalanced Round Brackets and Square Brackets ', () => {   
    let result = Val.multiBracketValidation('(](');
    expect(result).toBeFalsy;
  });
  it('verify brackets are not balanced if one from pair is inside other pair of brackets', () => {   
    let result = Val.multiBracketValidation('{(})');
    expect(result).toBeFalsy;
  });


});