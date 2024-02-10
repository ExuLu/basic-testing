// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 5, b: 2, action: Action.Subtract, expected: 3 },
  { a: 4, b: 2, action: Action.Multiply, expected: 8 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 3, b: 3, action: Action.Multiply, expected: 9 },
  { a: 9, b: 3, action: Action.Divide, expected: 3 },
  { a: 8, b: 2, action: Action.Divide, expected: 4 },
  { a: 25, b: 5, action: Action.Divide, expected: 5 },
  { a: 3, b: 4, action: Action.Exponentiate, expected: 81 },
  { a: 2, b: 4, action: Action.Exponentiate, expected: 16 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 1, b: 2, action: null, expected: null },
  { a: '2', b: 2, action: Action.Add, expected: null },
  { a: true, b: 2, action: Action.Add, expected: null },
  { a: null, b: 2, action: Action.Add, expected: null },
  { a: undefined, b: 2, action: Action.Add, expected: null },
  { a: [2], b: 2, action: Action.Add, expected: null },
  { a: { 2: 2 }, b: 2, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'Should return $expected when $a $action $b',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });
      expect(result).toBe(expected);
    },
  );
});
