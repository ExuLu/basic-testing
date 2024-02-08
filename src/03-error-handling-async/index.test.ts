// Uncomment the code below and write your tests
import {
  // throwError,
  // throwCustomError,
  resolveValue,
  // MyAwesomeError,
  // rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const resultNum = await resolveValue(3);
    const resultStr = await resolveValue('Hello');
    const resultBoolean = await resolveValue(false);
    expect(resultNum).toBe(3);
    expect(resultStr).toBe('Hello');
    expect(resultBoolean).toBe(false);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    // Write your test here
  });

  test('should throw error with default message if message is not provided', () => {
    // Write your test here
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    // Write your test here
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // Write your test here
  });
});
