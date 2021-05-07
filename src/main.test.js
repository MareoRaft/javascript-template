/*
Test file for main.js.  See https://jestjs.io/docs/en/getting-started.html for more.
*/
const main = require('./main')

test('adds 1 + 2 to equal 3', () => {
  expect(main(1, 2)).toBe(3)
})

