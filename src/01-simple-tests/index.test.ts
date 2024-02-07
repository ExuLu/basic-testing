// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, action: Action.Add, b: 3 })).toBe(5);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 6, b: 1, action: Action.Subtract })).toBe(5);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 4, b: 9, action: Action.Multiply })).toBe(36);
  });

  test('should divide two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 16, b: 4, action: Action.Divide })).toBe(4);
    expect(simpleCalculator({ a: 5, b: 2, action: Action.Divide })).toBe(2.5);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
  });

  test('should return null for invalid action', () => {
    // Write your test here
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
  });
});
