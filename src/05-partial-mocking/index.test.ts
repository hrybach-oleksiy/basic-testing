// Uncomment the code below and write your tests
import { mockOne, mockTwo, mockThree, unmockedFunction } from './index';

jest.mock('./index', () => ({
  ...jest.requireActual<typeof import('./index')>('./index'),
  mockOne: jest.fn(),
  mockTwo: jest.fn(),
  mockThree: jest.fn(),
}));

describe('partial mocking', () => {
  afterAll(() => {
    jest.unmock('./index');
  });

  test('mockOne, mockTwo, mockThree should not log into console', () => {
    mockOne();
    mockTwo();
    mockThree();

    expect(mockOne).toHaveBeenCalled();
    expect(mockTwo).toHaveBeenCalled();
    expect(mockThree).toHaveBeenCalled();
  });

  test('unmockedFunction should log into console', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    unmockedFunction();

    expect(consoleSpy).toHaveBeenCalledWith('I am not mocked');

    consoleSpy.mockRestore();
  });
});
