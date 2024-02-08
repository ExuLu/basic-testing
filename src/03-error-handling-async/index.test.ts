// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
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
    const result = () => throwError('Some error');
    expect(result).toThrowError('Some error');
  });

  test('should throw error with default message if message is not provided', () => {
    const result = () => throwError();
    expect(result).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    const result = () => throwCustomError();
    expect(result).toThrow(MyAwesomeError);
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    const result = () => rejectCustomError();
    await expect(result).rejects.toThrow(MyAwesomeError);
  });
});
