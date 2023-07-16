
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}


function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}


function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const email = document.querySelector('.user-email-input');
const pw = document.querySelector('.user-password-input');
const button = document.querySelector('.btn-login');

let emailPass = false;
let pwPass = false;

email.addEventListener('input',function() {
  if (emailReg(this.value)){
    this.classList.remove('is--invalid');
    emailPass = true;
  }else {
    this.classList.add('is--invalid');

    emailPass = false;

  }
})

pw.addEventListener('input',function() {
  if (pwReg(this.value)){
    this.classList.remove('is--invalid');
    pwPass = true;
  }else {
    this.classList.add('is--invalid');

    pwPass = false;

  }

})


button.addEventListener('click',(e)=>{
  e.preventDefault();

  if( email.value === user.id && pw.value === user.pw) {
    window.location.href = 'welcome.html';
    
  }else {
    alert('아이디 또는 패스워드를 확인 해주세요.');
  }
  
})








