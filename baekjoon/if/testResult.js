/*
문제
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

출력
시험 성적을 출력한다.

예제 입력 1 
100
예제 출력 1 
A
*/

const fs = require('fs');
const a = fs.readFileSync('/dev/stdin');

if (90 <= a && a <= 100) {
  console.log('A');
} else if (80 <= a && a <= 89) {
  console.log('B');
} else if (70 <= a && a <= 79) {
  console.log('C');
} else if (60 <= a && 69) {
  console.log('D');
} else {
  console.log('F');
}

/*
공부할 코드 1

var num = parseInt(require('fs').readFileSync('/dev/stdin').toString()), rank;
var rankList = ['A', 'B', 'C', 'D', 'F'];
for(var i=9, c=0;i>=0;i--,c=c<4?c+1:c) {
    if(i*10 <= num) {
        rank = rankList[c];
        break;
    }
}
console.log(rank);
*/
