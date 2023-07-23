
function bindEvent(node,type,handler) {
    if(typeof node === 'string'){
      node === getNode(node);
    }

    //!듣도 보도 못한 거지같은 이벤트를 가져오면 사망시켜
    //정규표현식을 활용해보자. '|'는 또는 이라는 뜻으로 가져옴
    if(!(/\b(mouseenter|click|mousemove|mouseout|mouseover)\b/g).test(type)){
      throw new TypeError('bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입 이어야 합니다.')
    }
    node,addEventListener(type,handler);

    return ()=>{
      node,addEventListener(type,handler);
    }//closure함수가 함수를 내보냅니다. 안에 살고 있던 애들은 자신의 환경을 다 기억하기 때문에 ? 뭐 ?

}

