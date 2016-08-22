var pow = require('../js/pow.js');

describe("function pow", function() {
  it("return right answer", function() {
    // prepare
    var result;
    // act
    var result = pow(4,4);
    // assert
    expect(result).toEqual(256);
  });

  it("return right answer", function() {
    var result = pow(0,4);

    expect(result).toEqual(0);
  });

  it("return right answer", function() {
    var result = pow(4,0);

    expect(result).toEqual(4);
  });

  it("return right answer", function() {
    var result = pow(-4,4);

    expect(result).toEqual(256);
  });

  it("return right answer", function() {
    var result = pow(-4,-4);

    expect(result).toEqual(-4);
  });
});
