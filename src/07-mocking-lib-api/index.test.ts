// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

jest.mock('axios');

describe('throttledGetDataFromApi', () => {
  const mockAxios = axios as jest.Mocked<typeof axios>;
  const data = [
    { id: 1, user: 'Bob' },
    { id: 2, user: 'Jason' },
  ];
  const res = { data };
  const path = './path';

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  test('should create instance with provided base url', async () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';
    mockAxios.create.mockReturnThis();
    mockAxios.get.mockResolvedValueOnce(res);
    await throttledGetDataFromApi(path);
    jest.runOnlyPendingTimers();
    expect(mockAxios.create).toBeCalledWith({ baseURL: baseURL });
  });

  test('should perform request to correct provided url', async () => {
    mockAxios.create.mockReturnThis();
    mockAxios.get.mockResolvedValueOnce(res);
    await throttledGetDataFromApi(path);
    jest.runOnlyPendingTimers();
    expect(mockAxios.create().get).toBeCalledWith(path);
  });

  test('should return response data', async () => {
    mockAxios.create.mockReturnThis();
    mockAxios.get.mockResolvedValueOnce(res);
    const result = await throttledGetDataFromApi(path);
    jest.runOnlyPendingTimers();
    expect(result).toEqual(data);
  });
});
