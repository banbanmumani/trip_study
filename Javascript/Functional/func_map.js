function map(list, iteratee){
    const newlist = [];
    for(let i = 0, len = list.length; i < len; i += 1){
        newlist.push(iteratee(list[i]));
    }
    return newlist;
}

module.exports = map;