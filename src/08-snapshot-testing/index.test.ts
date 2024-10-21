// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    // some comment
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const elements = [5, 6, 7, 8];
    const linkedList = generateLinkedList(elements);

    expect(linkedList).toMatchSnapshot();
  });
});
