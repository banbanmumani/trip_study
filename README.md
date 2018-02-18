# 스터디

## Mocha 환경구성 
혹시 웹스톰에 Node Plugin이 설치가 안되어있다면 설치해주세요
![mocha](./public/mocha00.png)

파일의 구성은 아래와 같습니다.

- index.js (구현체)
- test.js (테스트 파일)
- README.md (구현체에 대한 이론적인 설명)
![mocha](./public/mocha04.png) 

아래는 웹스톰에서 Mocha를 사용하는 방법입니다.
![mocha](./public/mocha01.png)
![mocha](./public/mocha02.png)
![mocha](./public/mocha03.png)

후에 오른쪽 상단에 초록색 재생버튼을 누르면 테스트를 진행할 수 있습니다.
![mocha](./public/mocha05.png)

```js
const assert = require('chai').assert; // chai 를 사용합니다.

describe('테스트의 큰틀 ex. Stack Test', () => {
    it('세부기능 ex. push', () => {
      assert.equal('요청값', '기대값');
    });
});
```

참고 : [mocha](https://mochajs.org/) 사이트


