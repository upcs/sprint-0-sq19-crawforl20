const addTwo = require('./functions');
test('adds 1 + 2 to equal 3', () => {
  expect(addTwo(1, 2)).toBe(3);
});

const addTwo = require('./functions');
test('adds -2 + 8 to equal 6', () => {
  expect(addTwo(-2, 8)).toBe(6);
});
