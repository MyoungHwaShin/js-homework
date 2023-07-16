# 네이버 로그인 페이지 구현


---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

# issue

<img width="556" alt="스크린샷 2023-07-16 오후 5 04 09" src="https://github.com/MyoungHwaShin/js-homework/assets/73214037/6edaa440-f86e-47ec-bc1b-ceb964b4f519">

## 다른 창으로 이동 선택시 미확인 오류 (crbug/1173575, non-js module files deprecated.) 

<img width="1440" alt="스크린샷 2023-07-16 오후 4 47 48" src="https://github.com/MyoungHwaShin/js-homework/assets/73214037/98820a91-38e9-45bb-9f0a-4f5cfe3e2d58">

## user Id & Pw 일치시 알림창 띄우기로 변경

<img width="1440" alt="스크린샷 2023-07-16 오후 5 01 54" src="https://github.com/MyoungHwaShin/js-homework/assets/73214037/6bb25b86-6e97-4ee8-8d09-772debebf040">

## user Id & Pw 불일치시 알림창

<img width="1440" alt="스크린샷 2023-07-16 오후 5 02 18" src="https://github.com/MyoungHwaShin/js-homework/assets/73214037/5290f988-b86f-4595-842c-be90f2ff0e86">

# issue solving

## button event 적용 로직
```
button 태그 클릭 -> event.preventDefault()를 통해 잠시 이벤트를 막음 -> form태그 안의 내용의 유효검사 실시 -> return 혹은 form.submit()
//결론: button type에 따른 고유의 동작을 preventDefalut()로 컷하고 지정된 action을 수행하게 한다.
```
## 로직에 따라 e.preventDefalut() 적용



<img width="551" alt="스크린샷 2023-07-16 오후 6 15 39" src="https://github.com/MyoungHwaShin/js-homework/assets/73214037/b6a5a368-b93d-4efd-b3eb-34721807883c">

## 로그인 성공시 페이지 welcome.html로 이동

<img width="551" alt="스크린샷 2023-07-16 오후 6 15 53" src="https://github.com/MyoungHwaShin/js-homework/assets/73214037/bdf3bf9e-57e3-4568-9257-914384aece5f">





