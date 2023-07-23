# Poster

## Goal

썸네일 이미지를 클릭하면 메인 이미지 변경과 동시에 상단 title변경과 포스터 메인컬러와 함께 배경 컬러 그라데이션으로 변경

## Request

- [x] 이벤트 처리 방식을 사용하여 클릭 이벤트 처리<br>
  - [x] 이벤트 위임
  - [x] 반복문 (forEach) 
- [x] 이미지와 색상의 데이터는 `data.js` 에서 불러와주세요. <br> 
- [x] 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.<br>
- [x] 배경색 변경 ( colorB의 기본값은 `#000` 으로 한다 )<br>
- [x] 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.<br>
- [x] 함수를 분리시켜주세요.
  - [x]  `setBgColor` 함수
  - [x]  `setImage` 함수
  - [x]  `setNameText` 함수<br>
- [ ] 가독성이 좋은 코드로 리팩토링 해주세요. :hammer:
    
## view

![화면 기록 2023-07-23 오후 5 40 52](https://github.com/MyoungHwaShin/js-homework/assets/73214037/408b1350-ad6b-4738-82f8-3e8991a2f831)

## Issue solving list

1. Event Delegation (S)<br>
   :hash: 제일 큰 부모에게 이벤트를 걸어서 각 항목이 이벤트를 위임받는다. 
2. 각 li클릭시 `visualImage`를 같은 이미지로 변경 & 삿 포스터 주요 색상 + #000으로 그라데이션 효과 주기 (S)<br>
   :hash: 이벤트 발생 요소에게 접근해 해당 요소의 closest img`<li>`에게서 `Attribute`를 이용해 `data-index` 번호 각 1,2,3,4를 가져온다.<br>
   :hash:  `setBgColor` , `setImage` , `setNameText` 함수를 이용해 `해당 노드`,`data[index]`를 불러 올 수 있도록 `data[index-1].key`로 불러온다.
3. 함수 분리 (F)<br>
   1. 포스터 메인 컬러 기준으로 배경색 변경 (clorB 는 #000 default) `setBgColor`
      ```jsx
      elem.style.background = `linear-gradient(to   bottom, 'colorA','colorB')`;
      ``` 
   2. 각 비주얼에 맞는 비주얼 title 변경 `setNameText`
      ```jsx
      target.textContent = data.name;
      ```
   3. 각 li 클릭시 visulImage 사진 변경 (F)
      ```jsx
      target.src = `./assets/${data.name}.jpeg`;
      target.alt = data.alt;
      ```
