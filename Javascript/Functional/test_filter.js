const assert = require('chai').assert;
const filter = require('./func_filter');

const user = [
    {id: 1, name: 'A', age: 32},
    {id: 2, name: 'B', age: 33},
    {id: 3, name: 'C', age: 21},
    {id: 4, name: 'D', age: 25},
    {id: 5, name: 'E', age: 18},
];

describe('Test Filter', () => {
    it('age > 30  length : 2', () => {
        assert.deepEqual(filter(user, (u) => u.age > 30).length, 2);
    });
    it('age < 30  length : 3', () => {
        assert.deepEqual(filter(user, (u) => u.age < 30).length, 3);
    });
});