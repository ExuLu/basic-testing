// Uncomment the code below and write your tests
import { simpleCalculator } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 2, action: '+', b: 3 })).toBe(5);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 6, b: 1, action: '-' })).toBe(5);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 4, b: 9, action: '*' })).toBe(36);
  });

  test('should divide two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 16, b: 4, action: '/' })).toBe(4);
    expect(simpleCalculator({ a: 5, b: 2, action: '/' })).toBe(2.5);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    expect(simpleCalculator({ a: 3, b: 4, action: '^' })).toBe(81);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    expect(simpleCalculator({ a: 1, b: 2, action: '**' })).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    expect(simpleCalculator({ a: '1', b: 2, action: '+' })).toBe(null);
    expect(simpleCalculator({ a: 1, b: '2', action: '+' })).toBe(null);
    expect(simpleCalculator({ a: '1', b: '2', action: '+' })).toBe(null);
    expect(simpleCalculator({ a: true, b: 2, action: '+' })).toBe(null);
    expect(simpleCalculator({ a: 1, b: true, action: '+' })).toBe(null);
    expect(simpleCalculator({ a: null, b: 2, action: '+' })).toBe(null);
    expect(simpleCalculator({ a: 1, b: null, action: '+' })).toBe(null);
    expect(simpleCalculator({ a: [1], b: 2, action: '+' })).toBe(null);
    expect(simpleCalculator({ a: 1, b: [2], action: '+' })).toBe(null);
    expect(simpleCalculator({ a: { 1: 1 }, b: 2, action: '+' })).toBe(null);
    expect(simpleCalculator({ a: 1, b: { 2: 2 }, action: '+' })).toBe(null);
  });
});
