// predicate 에서 처리를 하기 때문에 filter 는 조건을 모른다

function filter(list, predicate){ // list 와  true, false를 판단해주는 predicate를 받는다.
    // 외부의 값과는 전혀 관계없는 filter 만의 새로운 값이다
    // 부수효과를 일으키지 않는다.
    const newlist = [];
    for(let i = 0, len = list.length; i < len; i += 1){
        if(predicate(list[i])) newlist.push(list[i]);
    }
    // 들어오는 인자가 같다면 항상 동일한 인자를 내보내준다.
    return newlist;
}

module.exports = filter;