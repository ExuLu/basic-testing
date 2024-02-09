// Uncomment the code below and write your tests
import { doStuffByInterval, doStuffByTimeout } from '.';

describe('doStuffByTimeout', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const callback = jest.fn();
  const timeout = 1000;

  test('should set timeout with provided callback and timeout', () => {
    jest.spyOn(global, 'setTimeout');
    doStuffByTimeout(callback, timeout);
    expect(setTimeout).toBeCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(callback, timeout);
  });

  test('should call callback only after timeout', () => {
    jest.spyOn(global, 'setTimeout');
    doStuffByTimeout(callback, timeout);
    expect(callback).not.toBeCalled();
    jest.runAllTimers();
    expect(callback).toBeCalled();
  });
});

describe('doStuffByInterval', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  const callback = jest.fn();
  const timeout = 1000;

  test('should set interval with provided callback and timeout', () => {
    jest.spyOn(global, 'setInterval');
    doStuffByInterval(callback, timeout);
    expect(setInterval).toBeCalled();
    expect(setInterval).toBeCalledWith(callback, timeout);
  });

  test('should call callback multiple times after multiple intervals', () => {
    // Write your test here
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
