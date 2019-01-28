const result1 = require('./functions');
test('adds 1 + 2 to equal 3', () => {
  expect(result1(1, 2)).toBe(3);
});

const result2 = require('./functions');
test('adds -2 + 8 to equal 6', () => {
  expect(result2(-2, 8)).toBe(6);
});
