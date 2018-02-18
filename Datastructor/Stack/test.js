const assert = require('chai').assert;
const Stack = require('./index');

var tests = [
  { given: [], expected: 0, popexpected : 0 },
  { given: [1, 2], expected: 2, popexpected : 1 }
];

// push
describe('stack test push', () => {
  tests.forEach((test, idx) => {
    it(`Given ${JSON.stringify(test.given)} push => Expected ${test.expected}`, () => {
      const stack = new Stack();

      test.given.forEach(data => {
        stack.push(data);
      });

      assert.deepEqual(stack.length(), test.expected);
    });
  })
});

// pop
describe('stack test pop', () => {
  tests.forEach((test, idx) => {
    it(`Given ${JSON.stringify(test.given)} pop => Expected ${test.popexpected}`, () => {
      const stack = new Stack();

      test.given.forEach(data => {
        stack.push(data);
      });

      assert.deepEqual(stack.pop(), stack[stack.length() + 1]);
      assert.deepEqual(stack.length(), test.expected - 1);
    });
  })
});

// peek
describe('stack test peek', () => {
  tests.forEach((test, idx) => {
    it(`Given ${JSON.stringify(test.given)} peek => Expected ${test.expected}`, () => {
      const stack = new Stack();

      test.given.forEach(data => {
        stack.push(data);
      });

      assert.deepEqual(stack.peek(), stack[stack.length()]);
      assert.deepEqual(stack.length(), test.expected);
    });
  })
});

// clear
describe('stack test clear', () => {
  tests.forEach((test, idx) => {
    it(`Given ${JSON.stringify(test.given)} clear => Expected 0`, () => {
      const stack = new Stack();

      test.given.forEach(data => {
        stack.push(data);
      });

      stack.clear();
      assert.deepEqual(stack.length(), 0);
    });
  })
});
