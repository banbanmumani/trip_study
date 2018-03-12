const assert = require('chai').assert;
const Set = require('./set');

// push
describe('Set Test', () => {
    const s = new Set();
    s.add(0);
    s.add(1);
    s.add(2);
    
    it('add Test', () => {
        assert.deepEqual(JSON.stringify(s.show()), '[0,1,2]'); // show 
        assert.deepEqual(s.size(), 3); // size
    });

    it('contains Test', () => {
        assert.deepEqual(s.contains(3), false); // size 
        assert.deepEqual(s.contains(1), true); // contains 
    });
    
    it('remove Test', () => {
        s.remove(1);
        assert.deepEqual(s.size(), 2);
        assert.deepEqual(JSON.stringify(s.show()), '[0,2]'); // show 
    });
    // new Set
    const n = new Set();
    n.add(2);
    n.add(3);
    n.add(4);

    const unionSet = s.union(n);

    it('union Test', () => {
        assert.deepEqual(unionSet.size(), 5);
        assert.deepEqual(JSON.stringify(unionSet.show()), '[0,1,2,3,4]'); // union 
    })

    const intersectSet = s.intersect(n);

    it('intersect Test', () => {
        assert.deepEqual(intersectSet.size(), 1);
        assert.deepEqual(JSON.stringify(intersectSet.show()), '[2]'); // intersect
    })

    const differenceSet = s.difference(n); 

    it('difference Test', () => {
        assert.deepEqual(differenceSet.size(), 2);
        assert.deepEqual(JSON.stringify(differenceSet.show()), '[0,1]'); // intersect
    })

    const subSet = new Set();
    subSet.add(0);

    it('subSet Test', () => {
        assert.deepEqual(s.subSet(n), false);
        assert.deepEqual(subSet.subSet(s), true);
    })
  });
  