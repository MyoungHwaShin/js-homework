const navigation = getNode('.nav');
const list = getNodes('.nav li'); 
const visualImage = getNode('.visual img');



const setBgColor = (target,prop) => {target.style.background = prop;};

function setImage(target,prop,value) {
  if(typeof prop !== 'string'){
    throw new Error ('setImage의 prop 값은 문자열이어야 합니다.');
  }
  
  target.setAttribute (prop,value);
  
}

const setNameText = (target,value) => {target.textContent = value;};


function handleClick(e) {
  e.preventDefault();
  const target = e.target.closest('li');
  const button = e.target.closest('button');
  const nickName = getNode('.nickName');
  const elem = getNode('body');
  
  if(!target || !button) return;
  
  const index = attr(target, 'data-index');
  // console.log(index);
  if(!target) return;
 

  
  list.forEach((li)=>{

    removeClass(li, 'is-active');
  })
  addClass(target, 'is-active');
  
  
  setImage(visualImage,'src',`./assets/${data[index-1].src}`);
  setImage(visualImage,'alt',data[index - 1].alt);
  setNameText(nickName,data[index - 1].name);
  setBgColor(elem,`linear-gradient(to bottom, ${data[index - 1].color[0]}, #000)`);




  
}    


navigation.addEventListener('click',handleClick);


