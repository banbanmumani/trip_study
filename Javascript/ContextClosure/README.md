# 실행컨텍스트와 클로저 

실행컨텍스트란?    
자바스크립트 코드가 실행될때 생성되는 하나의 실행단위를 실행컨텍스트라고 부른다.  

## 개념 
자바스크립트에서는 함수를 호출할때마다 (실행컨텍스트가) **콜스택**에 쌓인다.   

"실행되고 있는 컨텍스트에서 다른 함수가 실행되면 새로운 컨텍스트에게 제어권을 넘긴다."

```js
console.log('global area');

function a(){
  b();
  console.log('A area');
}

function b(){
  console.log('B area');
}

a();
```

위 코드의 실행결과는 출력결과는 아래와 같다. 

1. global area
2. B area
3. A area 

## 생성과정 

1. 활성객체 생성 
실행 컨텍스트가 생성되면 컨텍스트에서 필요한 여러가지 정보들을 담을 객체를 생성한다 (이때 호이스팅이 일어난다.) 이를 "활성객체"리고한다.   
사용자가 정의한 변수및 객체를 저장한다.  

2. arguments 객체생성
우리가 넘겨준 매개변수들을 arguments 객체에 담는다. (arguments는 유사배열이다) 
 
3. 스코프 정보생성 
컨텍스트의 유효범위를 나타내는 스코프정보를 (리스트생성) 생성한다. 컨텍스트내에 특정변수에 접근을 해야할경우 이 리스트에 접근한다.   
내부에서 외부로의 접근이 가능하다. 탐색시 내부를 먼저찾고 없을시 외부를 탐색하게되는데 이를 스코프 체인이라고한다.   
외부에서도 탐색하지 못할시 에러를 검출한다. 

4. 변수생성 
컨텍스트 내부의 지역변수를 생성한다. (앞단계에서는 변수만 선언하고 이때 할당이 일어난다.) 

5. this 바인딩 
this 키워드를 사용하는 값이 할당된다. 이때의 this는 함수 호출 패턴에 따라 달라진다. this를 참조하는 객체가 없으면 window를 바라본다.  
strict 모드에서는 undefined를 할당한다.  


# 클로저 
생명주기가 끝난 외부함수의 변수를 참조하는 것을 클로저라고한다.    

#### lexical scope
클로저를 이해하시려면 자바스크립트의 lexical scope 라는 특징을 알고 있어야합니다. 
자바스크립트의 스코프는 함수를 호출할 때가 아니라 선언할 때 생깁니다.  

````js
function outter(){
  var a = 5; // 너는 스코프영역은 이미 ouuter 안이야
  function inner(){
    var b = 10; // 너는 스코프영역은 이미 inner 안이야 하지만 ouuter의 a를 바라볼 수 있어
  }
}
````

#### 클로저의 목적 
자바스크립트에는 기본적으로 변수를 private하게 사용하는 방법이 없습니다.   
그렇기 떄문에 클로저를 이용하여 변수를 private하게 사용합니다.   
나아가서 모듈패턴의 근간이 됩니다.  

1. 변수를 숨기자
```js
function calc(){
  var result = 0;
}

console.log(result); // error 
``` 

2. 내부에서 변수를 사용해보자
```js
function calc(){
  var result = 0;
  console.log(result + 10); // 10
}
```

3. 내부에서 함수를 만들어서 변수를 다뤄보자
```js
function calc(){
  var result = 0;
  
  function add(num){
    result += num;
  }
}
```

4. 밖에서도 사용할 수 있게 함수를 던져주자 

```js
function calc(){
  var result = 0;
  
  function add(num){
    result += num;
    console.log(result);
  }
  
  return add;
}

var add = calc(); 
add(10); // 10
add(20); // 30
```

위의 코드에서 이상한점을 발견할 수 있습니다. add(10)을 하면 생명주기가 끝나고 result 가 0 으로 초기화되야하는데 값이 누적됩니다.  
lexical scope 의 특성 떄문입니다. 함수안에서 밖으로 내부변수를 참조하고 있는 함수가 리턴되어 사용된다면 참조되어있는 변수는 죽지않습니다.
또, 자신의 lexical scope를 따릅니다.  

이것이 클로저입니다.
 
   
