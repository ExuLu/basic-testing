// Uncomment the code below and write your tests
import path, { join } from 'path';
import { doStuffByInterval, doStuffByTimeout, readFileAsynchronously } from '.';

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
    expect(setTimeout).toBeCalledWith(callback, timeout);
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
  const interval = 1000;

  test('should set interval with provided callback and timeout', () => {
    jest.spyOn(global, 'setInterval');
    doStuffByInterval(callback, interval);
    expect(setInterval).toBeCalled();
    expect(setInterval).toBeCalledWith(callback, interval);

    // Clear all timers cause without it they will be called in the second test
    jest.clearAllTimers();
  });

  test('should call callback multiple times after multiple intervals', () => {
    jest.spyOn(global, 'setInterval');
    doStuffByInterval(callback, interval);
    expect(callback).not.toBeCalled();
    jest.advanceTimersByTime(3000);
    expect(callback).toBeCalledTimes(3);
  });
});

describe('readFileAsynchronously', () => {
  test('should call join with pathToFile', async () => {
    // Write your test here
    jest.spyOn(path, 'join');
    const pathToFile = './text.txt';
    await readFileAsynchronously(pathToFile);
    expect(join).toBeCalled();
    expect(join).toBeCalledWith(__dirname, pathToFile);
  });

  test('should return null if file does not exist', async () => {
    // Write your test here
  });

  test('should return file content if file exists', async () => {
    // Write your test here
  });
});
