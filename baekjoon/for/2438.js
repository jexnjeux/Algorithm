/*
문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

예제 입력 1 
5
예제 출력 1 
*
**
***
****
*****
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin');

let result = ``;
for (let i = 1; i <= input; i++) {
  for (let j = 1; j <= i; j++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);

/*
let star = '';

for (let i = 0; i < input; i++) {
  star += '*';
  console.log(star)
}
*/

/*
https://velog.io/@dragoocho/%EB%B0%B1%EC%A4%80-2438%EB%B2%88-JavaScript-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin")

let answer = "";

// 1.

for (let i = 1; i <= n; i++) {
  let stars = Array(i + 1).join("*");
  answer += `${stars}` + "\n";
}
console.log(answer)

// 2.

for (let i = 1; i <= n; i++) {
  let stars = "*".repeat(i);
  answer += `${stars}` + "\n";
}
console.log(answer)
*/
