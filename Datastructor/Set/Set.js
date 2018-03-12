module.exports = (function() {
    const Set = function() {
        this.dataStore = [];
    }

// 집합은 고유한 값만 넣을 수 있다.
    Set.prototype.add = function(data) {
        if (this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data)
            return true;
        }
        return false;
    }

    Set.prototype.remove = function(data) {
        const pos = this.dataStore.indexOf(data);
        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        }
        return false;
    }

    Set.prototype.show = function() {
        return this.dataStore;
    }

    Set.prototype.size = function() {
        return this.dataStore.length;
    }

    Set.prototype.contains = function(data) {
        return this.dataStore.indexOf(data) > -1 ? true : false;
    }
// 합집합
    Set.prototype.union = function(set) {
        const tempSet = new Set();
        this.dataStore.forEach(function(data, idx) {
            tempSet.add(data);
        });

        set.dataStore.forEach(function(data, idx) {
            if (!tempSet.contains(data)) {
                tempSet.add(data)
            }
        })
        return tempSet;
    }
// 교집합
    Set.prototype.intersect = function(set) {
        const tempSet = new Set();
        this.dataStore.forEach(function(data, idx) {
            if (set.contains(data)) {
                tempSet.add(data);
            }
        });
        return tempSet;
    }

    Set.prototype.subSet = function(set) {
        if (this.size() > set.size()) {
            return false;
        } else {
            for(var i = 0; i < this.size(); i += 1){
                if (!set.contains(this.dataStore[i])) {
                    return false;
                }
            }
        }
        return true;
    }

    Set.prototype.difference = function(set) {
        const tempSet = new Set();
        this.dataStore.forEach(function(data, idx) {
            if (!set.contains(data)) {
                tempSet.add(data);
            }
        });
        return tempSet;
    }

    return Set;
})();
