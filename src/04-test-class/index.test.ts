// Uncomment the code below and write your tests
import { InsufficientFundsError, TransferFailedError, getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const account = getBankAccount(300);
    const balance = account.getBalance();
    expect(account).toEqual({ _balance: 300 });
    expect(balance).toBe(300);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const account = getBankAccount(100);
    const result = () => account.withdraw(500);
    expect(result).toThrow(InsufficientFundsError);
    expect(result).toThrow(
      `Insufficient funds: cannot withdraw more than ${account.getBalance()}`,
    );
  });

  test('should throw error when transferring more than balance', () => {
    const account = getBankAccount(100);
    const newAccount = getBankAccount(400);
    const result = () => account.transfer(500, newAccount);
    expect(result).toThrow(InsufficientFundsError);
    expect(result).toThrow(
      `Insufficient funds: cannot withdraw more than ${account.getBalance()}`,
    );
  });

  test('should throw error when transferring to the same account', () => {
    const account = getBankAccount(300);
    const result = () => account.transfer(200, account);
    expect(result).toThrow(TransferFailedError);
    expect(result).toThrow('Transfer failed');
  });

  test('should deposit money', () => {
    const account = getBankAccount(100);
    const result = account.deposit(400);
    const balance = account.getBalance();
    expect(result).toEqual({ _balance: 500 });
    expect(balance).toBe(500);
  });

  test('should withdraw money', () => {
    const account = getBankAccount(400);
    const result = account.withdraw(300);
    const balance = account.getBalance();
    expect(result).toEqual({ _balance: 100 });
    expect(balance).toBe(100);
  });

  test('should transfer money', () => {
    // Write your test here
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
