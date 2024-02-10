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
  const path = './path';

  test('should create instance with provided base url', async () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';
    axios.get = jest.fn().mockResolvedValue(data);
    await throttledGetDataFromApi(path);
    jest.runAllTimers();
    const spyCreateAxios = jest.spyOn(axios, 'create');
    expect(spyCreateAxios).toBeCalledWith({ baseURL: baseURL });
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here
  });

  test('should return response data', async () => {
    // Write your test here
  });
});
