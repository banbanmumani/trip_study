const assert = require('chai').assert;
const addMaker = require('./basic_addMaker');
const basicMaker = addMaker(5); // 항상 동일한 값을 갖는다. a의 값은 상수로서의 의미를 갖는다.

describe('Test addMaker', () => {
    it('4 + 6 = 10', () => {
        assert.deepEqual(addMaker(4)(6), 10);
    });
    it('5(basic Maker) + 5 = 10', () => {
        assert.deepEqual(basicMaker(5), 10);
    });
    it('5(basic Maker) + 10 = 15', () => {
        assert.deepEqual(basicMaker(10), 15);
    });
});