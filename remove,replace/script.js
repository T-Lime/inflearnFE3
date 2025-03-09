 const listParent = document.querySelector('ul');
 const list = document.querySelectorAll('li');

 // 요소 지우기
//  listParent.removeChild(list[1]);

// 요소 교체하기
const oldElemnet = document.getElementById('A');
const newElement = document.createElement('span');

newElement.textContent = "Hi";

// listParent.replaceChild를 해도 되지만 oldElemnet.parentNode 이런식으로 접근이 가능하다
oldElemnet.parentNode.replaceChild(newElement, oldElemnet); 
