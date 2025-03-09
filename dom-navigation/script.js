let val;

const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

console.log('list', list);
console.log('listItem', listItem);

val = list.childNodes; // NodeList 반환, line break도 포함 O
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3];
val = list.childNodes[3].nodeType;
// NodeType

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment node
// 9 - Documnet itself
// 10 - Doctype

// children element nodes 반환
val = list.children;
val = list.children[1];
list.children[1].textContent = 'Hi'

// First child
val = list.firstChild; 
//list.firstChild === list.childNodes[0];

val = list.firstElementChild;

// Last child
val = list.lastChild;
//list.firstChild === list.childNodes[list.childNodes.length -1]; //TextNode 포함
val = list.lastElementChild; //Text를 포함 안 함.

// child 요소 count
val = list.childElementCount;

// parent node 반환
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// next sibling 반환 
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// previous sibling 반환
val = listItem.previousSibling;
val = list.previousElementSibling

/**
 * node에는 배열 메서드나 객체 메서드는 사용을 할 수 없다.
 * for...of는 사용이 가능하다
 * Array.from 함수로 배열로 만들어서 사용은 가능하다
 */

for (let node of list.childNodes){
    console.log(node);
}

console.log('val',val)

// const array = [1,2,3];
// console.log(array.filter);
// console.log(list.childNodes);