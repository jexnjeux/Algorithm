/*
문제
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

출력
1부터 n까지 합을 출력한다.

예제 입력 1 
3
예제 출력 1 
6
*/

// 128ms
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let result = 0;
for (let i = 1; i <= input; i++) {
  result += i;
}
console.log(result);

/*
input 값을 정수로 바꿔주면 124ms

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const num = parseInt(input)

let result = 0;
for (let i = 1; i <= num; i++) {
  result += i;
}
console.log(result);
*/

/*
줄 단위로 input 배열을 만들면 120ms

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const num = parseInt(input[0])

let result = 0;
for (let i = 1; i <= num; i++) {
  result += i;
}
console.log(result);
*/
