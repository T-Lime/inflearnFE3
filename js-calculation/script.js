const num1 = 20;
const num2 = 10;

let val;
// 간단한 연산
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.E;
val = Math.PI;
val = Math.round(2.4); // 결과 : 2 , 가장 가까운 정수로 반환함
val = Math.ceil(2.4); // 결과 : 3 , 올린다.
val = Math.floor(2.8); // 결과 : 2 , 내린다.
val = Math.abs(-2); // 결과 : 2 , 절댓값을 가져온다.
val = Math.min(2,3,4,5,6,7,8,-1); // 결과 : -1, 가장 낮은 숫자를 반환한다.
val = Math.max(2,3,4,5,6,7,8) // 결과 : 8 , 가장 높은 것을 가져온다.
val = Math.random(); // 랜덤한 숫자를 리턴함

// 1 - 20
val = Math.floor(Math.random() * 20 + 1);  // 1 ~ 20까지의 숫자를 랜덤해서 가져옴.

console.log(val);