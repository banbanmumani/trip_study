function addMaker(a) {
    return function (b) { // a값을 참조하고 있는 클로저
        return a + b;
    }
}

module.exports = addMaker;