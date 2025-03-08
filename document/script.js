let val;

// val = document;

// val = document.baseURI // 웹 페이지의 절대 URI 반환
// val = document.head // <head>를 반환
// val = document.body //<body>를 반환

// val = document.forms; //<form>를 다 반환
// val = document.forms[0].id;
// val = document.forms[0].classList;
// val = document.forms[0].className;

// val = document.scripts[2].getAttribute('src');

const headerContainer = document.getElementById('header-container');
// headerContainer.style.display = 'none';


// console.log(headerContainer);

headerContainer.textContent = 'Text Content';
headerContainer.innerText = 'Inner Text';
headerContainer.innerHTML = '<span>Inner HTML</span>';

const items = document.getElementsByClassName('list-group-item');
// console.log(items);

items[0].style.color = 'blue';
items[3].textContent = 'Hi';

let lists = document.getElementsByTagName('li');
console.log(lists);

// lists.forEach((list) =>{
//     console.log(lists);
// })

lists = Array.from(lists);
console.log(lists);

lists.forEach((list, index) =>{
    list.textContent = `${index}. List`
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach((li) =>{
    li.style.background = 'gray';
})