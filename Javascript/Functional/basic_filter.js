const user = [
    {id: 1, name: 'A', age: 32},
    {id: 2, name: 'B', age: 33},
    {id: 3, name: 'C', age: 21},
    {id: 4, name: 'D', age: 25},
    {id: 5, name: 'E', age: 18},
];

// for 문으로 filter 하기
// case 1 : 나이가 30 미만인 유저의 수

const age_filter = [];
for (let i = 0, len = user.length; i < len; i += 1) {
    if (user[i].age < 30) age_filter.push(user[i]);
}
console.log(`case 1 : 나이가 30 미만인 유저의수는 ${age_filter.length}`);

// case 2 : case 1 에서 필터링된 유저들의 나이
for (let i = 0, len = age_filter.length; i < len; i += 1) {
    console.log(`case 1 에서 필터링된 유저들의 나이는 ${i}번째 사람 ${age_filter[i].age}`);
}

// case 3 : 나이가 30 이상인 유저
const age_filter2 = [];
for (let i = 0, len = user.length; i < len; i += 1) {
    if (user[i].age > 30) age_filter2.push(user[i]);
}
console.log(`case 1 : 나이가 30 이상 유저의수는 ${age_filter2.length}`);

// case 4 : 나이가 30 이상인 유저들의 이름
for (let i = 0, len = age_filter2.length; i < len; i += 1) {
    console.log(`case 1 에서 필터링된 유저들의 나이는 ${i}번째 사람 ${age_filter2[i].name}`);
}
