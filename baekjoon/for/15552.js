/*
빠른 A+B

입력
첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.

출력
각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

예제 입력 1 
5
1 1
12 34
5 500
40 60
1000 1000
예제 출력 1 
2
46
505
100
2000
*/

// 문자열을 추가하여 마지막에 한 번에 출력해야 하고, 매번 console을 찍으면 시간 초과로 문제를 풀 수 없음

const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');


const T = Number(input[0]);
let result = '';

for (let i= 1; i <= T; i++) {
  let nums = input[i].split(' ');
  result += Number(nums[0]) + Number(nums[1]) + '\n'
}

console.log(result)
