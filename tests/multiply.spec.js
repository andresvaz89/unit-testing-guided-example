const { multiply } = require('./../calculator');

describe('Multiply', () => {
  test('should multiply up two positive integers correctly', () => {
    const result = multiply(1, 2);
    expect(result).toBe(2);
  });

  test('should multiply up a negative and a positive number correctly', () => {
    const result = multiply(-1, 2);
    expect(result).toBe(-2);
  });

  test('should return error when function is called without arguments', () => {
    expect(() => multiply()).toThrow();
  });

  test('should return a value with 0 when the second variable is 0', () => {
    const result = multiply(2, 0);
    expect(result).toBe(0);
  });

  test('should return a value with 0 when the first variables is 0', () => {
    const result = multiply(0, 3);
    expect(result).toBe(0);
  });
});
