# 모바일 청첩장 React.js 템플릿

결혼식 초대를 위한 청첩장 템플릿입니다.  
이 저장소가 마음에 들거나 사용하게 되신다면, Star와 Fork 부탁드리겠습니다😉

## 👰🏻‍♀️ 미리 보기

https://wedding-templete.netlify.app/

## 📚 내용 및 기능

- 결혼식 날짜, 위치, 인사말 출력
- 사진첩
- 축의금을 보내실 곳 (계좌번호 클립보드 복사 기능 지원)
- 카카오톡 공유 기능 및 링크 공유 기능 -> 안되서 확인중입니다.

## 🚘 시작하기

1. `$ cd WEDDING_INVITATION` - 해당 프로젝트 폴더로 이동
2. `$ npm install` - 디펜던시 설치
3. `$ npm start` - 로컬로 실행

## 🔧 Netlify로 만들기 => 잘 모르겠네요 사용안했습니다.

Netlify로 만드신다면 아래 글을 참고하세요 🕵🏻‍♂️

[Gatsby 테마로 모바일 결혼 청첩장 만들기](https://joy.pe.kr/gatsby-wedding-deploy/)

## ❌ 오류 발생 시

`rm -rf package-lock.json` 과 `rm -rf node_modules` 후 다시 `npm install` 수행

## 🛠 커스터마이징

`./config.js`를 수정하여 사용합니다.

```javascript
export const WEDDING_INVITATION_URL = "http://localhost:8000/";
export const KAKAOTALK_API_TOKEN = "JavaScript 키 입력";
export const KAKAOTALK_SHARE_IMAGE =
  "https://cdn.pixabay.com/photo/2014/11/13/17/04/heart-529607_960_720.jpg";

export const WEDDING_DATE = "1970년 01월 01일, 목요일 오전 12시 00분";
export const WEDDING_LOCATION = "○○○웨딩, ○층 ○○홀";

export const GROOM_NAME = "○○○";
export const GROOM_ACCOUNT_NUMBER = "○○은행 ***-***-******";
export const GROOM_FATHER_NAME = "○○○";
export const GROOM_FATHER_ACCOUNT_NUMBER = "○○은행 ***-***-******";
export const GROOM_MOTHER_NAME = "○○○";
export const GROOM_MOTHER_ACCOUNT_NUMBER = "○○은행 ***-***-******";

export const BRIDE_NAME = "○○○";
export const BRIDE_ACCOUNT_NUMBER = "○○은행 ***-***-******";
export const BRIDE_FATHER_NAME = "○○○";
export const BRIDE_FATHER_ACCOUNT_NUMBER = "○○은행 ***-***-******";
export const BRIDE_MOTHER_NAME = "○○○";
export const BRIDE_MOTHER_ACCOUNT_NUMBER = "○○은행 ***-***-******";
```

`./src/components/location.jsx`를 수정하여 원하는 위치의 카카오 지도를 사용합니다.

```javascript
//  1. `https://map.kakao.com/`로 이동
//  2. 원하는 위치를 검색하여 `HTML 태그 복사`클릭
//  3. `소스 생성하기`클릭
//  4. `timestamp,key` 위의 코드에 알맞게 입력

const executeScript = () => {
  const scriptTag = document.createElement("script");
  const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1652464367301",
    "key" : "2a8fe",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
  scriptTag.appendChild(inlineScript);
  document.body.appendChild(scriptTag);
};
```
