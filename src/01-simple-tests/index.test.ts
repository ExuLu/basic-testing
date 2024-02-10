// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const resultWithString = simpleCalculator({ a: 2, b: 3, action: '+' });
    const resultWithAction = simpleCalculator({
      a: 4,
      b: 7,
      action: Action.Add,
    });
    expect(resultWithString).toBe(5);
    expect(resultWithAction).toBe(11);
  });

  test('should subtract two numbers', () => {
    const resultWithString = simpleCalculator({ a: 6, b: 1, action: '-' });
    const resultWithAction = simpleCalculator({
      a: 13,
      b: 7,
      action: Action.Subtract,
    });
    expect(resultWithString).toBe(5);
    expect(resultWithAction).toBe(6);
  });

  test('should multiply two numbers', () => {
    const resultWithString = simpleCalculator({ a: 4, b: 9, action: '*' });
    const resultWithAction = simpleCalculator({
      a: 11,
      b: 7,
      action: Action.Multiply,
    });
    expect(resultWithString).toBe(36);
    expect(resultWithAction).toBe(77);
  });

  test('should divide two numbers', () => {
    const resultWithStringFirst = simpleCalculator({
      a: 16,
      b: 4,
      action: '/',
    });
    const resultWithStringSecond = simpleCalculator({
      a: 5,
      b: 2,
      action: '/',
    });
    const resultWithActionFirst = simpleCalculator({
      a: 9,
      b: 3,
      action: Action.Divide,
    });
    const resultWithActionSecond = simpleCalculator({
      a: 7,
      b: 2,
      action: Action.Divide,
    });
    expect(resultWithStringFirst).toBe(4);
    expect(resultWithStringSecond).toBe(2.5);
    expect(resultWithActionFirst).toBe(3);
    expect(resultWithActionSecond).toBe(3.5);
  });

  test('should exponentiate two numbers', () => {
    const resultWithString = simpleCalculator({ a: 3, b: 4, action: '^' });
    const resultWithAction = simpleCalculator({
      a: 11,
      b: 2,
      action: Action.Exponentiate,
    });
    expect(resultWithString).toBe(81);
    expect(resultWithAction).toBe(121);
  });

  test('should return null for invalid action', () => {
    const resultWithString = simpleCalculator({ a: 1, b: 2, action: '**' });
    const resultWithNull = simpleCalculator({ a: 4, b: 3, action: null });
    expect(resultWithString).toBeNull();
    expect(resultWithNull).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result1 = simpleCalculator({ a: '1', b: 2, action: Action.Add });
    const result2 = simpleCalculator({
      a: true,
      b: 2,
      action: Action.Subtract,
    });
    const result3 = simpleCalculator({
      a: null,
      b: 2,
      action: Action.Multiply,
    });
    const result4 = simpleCalculator({ a: [1], b: 2, action: Action.Divide });
    const result5 = simpleCalculator({
      a: { 1: 1 },
      b: 2,
      action: Action.Add,
    });
    const result6 = simpleCalculator({
      a: undefined,
      b: 2,
      action: Action.Add,
    });
    expect(result1).toBeNull();
    expect(result2).toBeNull();
    expect(result3).toBeNull();
    expect(result4).toBeNull();
    expect(result5).toBeNull();
    expect(result6).toBeNull();
  });
});
