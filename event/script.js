// window.onload = function(){
//     // 문서가 load 될 때 이 함수를 실행

//     let text = document.getElementById('text');
//     //아이디가 'text'인 요소를 return

//     text.innerText = 'HTML 문서 loaded';
// }

// const aElement = document.querySelector('a');

// aElement.addEventListener('click', ()=>{
//     alert('a element clicked')
// });

// const buttonElement = document.querySelector('.btn2');

// buttonElement.addEventListener('click', (evnet) =>{
//     let val;
//     val = evnet.target;
//     val = evnet.target.id;
//     val = evnet.target.className;
//     val = evnet.target.classList;

//     val = event.type;

//     // 윈도우로부터의 거리 좌표
//     val = evnet.clientY;

//     // 요소로부터의 거리 좌표
//     val = evnet.offsetY;

//     console.log(val)
// })

// const submitBtn = document.querySelector('.submit-btn');
// const title = document.querySelector('h2');

// // CLICK EVENT
// submitBtn.addEventListener('click', handleEvent);
// submitBtn.addEventListener('dblclick', handleEvent);
// submitBtn.addEventListener('mousedown', handleEvent);
// submitBtn.addEventListener('mouseup', handleEvent);
// submitBtn.addEventListener('mouseenter', handleEvent);
// submitBtn.addEventListener('mouseleave', handleEvent);
// submitBtn.addEventListener('mousemove', handleEvent);

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const title = document.querySelector('h2');
// FORM EVENT
// form.addEventListener('submit', handleEvent);
// emailInput.addEventListener('keydown', handleEvent);
// emailInput.addEventListener('keyup', handleEvent);
// emailInput.addEventListener('keypress', handleEvent);
// emailInput.addEventListener('focus', handleEvent);
// emailInput.addEventListener('blur', handleEvent);
// emailInput.addEventListener('cut', handleEvent);
// emailInput.addEventListener('paste', handleEvent);
emailInput.addEventListener('input', handleEvent);


function handleEvent(e){
    if (e.type ==='submit'){
        e.preventDefault();
    }
    console.log(`Event Type: ${e.type}`);
    // title.textContent = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
    // title.textContent = e.target.value;
}
