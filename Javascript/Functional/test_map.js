const assert = require('chai').assert;
const filter = require('./func_filter');
const map = require('./func_map');

const user = [
    {id: 1, name: 'A', age: 32},
    {id: 2, name: 'B', age: 33},
    {id: 3, name: 'C', age: 21},
    {id: 4, name: 'D', age: 25},
    {id: 5, name: 'E', age: 18},
];

describe('Test Map', () => {
    it('age < 30  length : 3, ages : 21,25,18', () => {
        const users_under_30 = filter(user, (u) => u.age < 30);
        const ages = map(users_under_30, (u) => u.age);

        assert.deepEqual(ages.length, users_under_30.length);
        assert.deepEqual(ages.toString(), '21,25,18');
    });

    it('age < 30  length : 3, ages : 21,25,18', () => {
        const users_under_30 = filter(user, (u) => u.age < 30);
        const names = map(users_under_30, (u) => u.name);

        assert.deepEqual(names.length, users_under_30.length);
        assert.deepEqual(names.toString(), 'C,D,E');
    });

});