/*
1. push(func) = 요소추가
2. pop(func) = 요소꺼내기
3. peek(func) = 스택의 맨위에 있는 요소 확인 꺼내지는 않습니다.
4. clear(func) = 모든요소 꺼내기
5. length(func) = 스택 사이즈 구하기

6. dataStore(Property) = 저장할 공간
7. top(Property) = 스택에 쌓이거나 꺼낼때 마다 증가 또는 감소
*/

Array.prototype.test = function(){
  console.log('hello');
};

var Stack = (function () {
  var Stack = function () {
    this.dataStore = [];
    this.top = 0;
  };

  Stack.prototype.push = function (data) {
    this.dataStore[this.top++] = data;
  };

  Stack.prototype.length = function () {
    return this.top;
  };

  Stack.prototype.pop = function () {
    return this.dataStore[this.top--];
  };

  Stack.prototype.peek = function () {
    return this.dataStore[this.top];
  };

  Stack.prototype.clear = function(){
    this.top = 0;
  };

  return Stack;
})();

module.exports = Stack;