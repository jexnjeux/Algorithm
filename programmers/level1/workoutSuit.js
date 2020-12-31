/*
문제 설명
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
*/

function solution(n, lost, reserve) {
  let answer = 0;
  let arr = Array(n).fill(1);
  for (let i in lost) {
    arr[lost[i] - 1]--;
  }
  for (let i in reserve) {
    arr[reserve[i] - 1]++;
  }

  for (let i = 0; i < n; i++) {
    if (!arr[i] && arr[i - 1] === 2) {
      arr[i]++;
      arr[i - 1]--;
    }
    if (!arr[i] && arr[i + 1] === 2) {
      arr[i]++;
      arr[i + 1]--;
    }
  }

  for (let i in arr) {
    if (arr[i]) {
      answer++;
    }
  }
  return answer;
}

/*
공부할 코드 1
function solution(n, lost, reserve) {      
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}
*/

/*
공부할 코드2 - 통과 안되는 코드
  function solution(n, lost, reserve) {
  let answer = 0;
  let arr = Array(n).fill(1)
  for (let i in lost) {
   arr[lost[i]-1]--;
  } for (let i in reserve){
    arr[reserve[i]-1]++;
  }
  
for(let i in arr){
  if( !arr[i] && arr[i-1]===2){
    arr[i-1]++;
    arr[i]--;
  } if(!arr[i] && arr[i+1] ===2){
    arr[i+1]++;
    arr[i]--;
  }
}
  
  for(let i in arr){
    if (arr[i]){
        answer++;
        }
  } return answer
}
*/
