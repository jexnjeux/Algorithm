/*
N 찍기

문제
자연수 N이 주어졌을 때, 1부터 N까지 한 줄에 하나씩 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 100,000보다 작거나 같은 자연수 N이 주어진다.

출력
첫째 줄부터 N번째 줄 까지 차례대로 출력한다.

예제 입력 1 
5
예제 출력 1 
1
2
3
4
5
*/

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const maxNum = Number(input);
let result = '';

for (let i = 1; i <= maxNum; i++) {
  result += i + '\n'
}

console.log(result);

/*
시간 초과

const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString());
for (let i = 1; i <= input; i++) {
  console.log(i)
};
*/
