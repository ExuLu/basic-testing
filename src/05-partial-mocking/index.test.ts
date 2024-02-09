// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => {
  const originalModule =
    jest.requireActual<typeof import('./index')>('./index');

  return {
    __esModule: true,
    ...originalModule,
    mockOne: jest.fn(),
    mockTwo: jest.fn(),
    mockThree: jest.fn(),
  };
});

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    const spyFn = jest.spyOn(console, 'log');
    mockOne();
    mockTwo();
    mockThree();
    expect(spyFn.mock.calls).toHaveLength(0);
  });

  test('unmockedFunction should log into console', () => {
    const spyFn = jest.spyOn(console, 'log');
    unmockedFunction();
    expect(spyFn).toBeCalled();
    expect(spyFn).toBeCalledWith('I am not mocked');
  });
});
