//
//66
//todo 블럭탑쌓기
// 탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
// 순서에 맞게 쌓지 않으면 무너질 수 있습니다.

// 예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
// 선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

// - B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
// - B 다음 블럭이 C가 될 수 있습니다.

//* 쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

// 1. 블럭은 알파벳 대문자로 표기합니다.
// 2. 규칙에 없는 블럭이 사용될 수 있습니다.
// 3. 중복된 블럭은 존재하지 않습니다.

//? 입력
// 탑 = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'EFGHZ'];
// 규칙 = 'ABD';
//? 출력
// [('가능', '불가능', '가능', '가능', '가능')];
//

// let input = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'EFGHZ'];
// let rule = 'ABD';
// let answer = [];

// for (let tower of input) {
//   let checkIndex = -1;
//   let towerEl = tower.split('');
//   towerEl.forEach((el) => {
//     if (rule.indexOf(el) !== -1) {
//       if (rule.indexOf(el) < checkIndex) {
//         checkIndex = Number.MIN_SAFE_INTEGER;
//         return answer.push('불가능');
//       } else if (
//         rule.indexOf(el) > checkIndex &&
//         checkIndex !== Number.MIN_SAFE_INTEGER
//       ) {
//         checkIndex = rule.indexOf(el);
//       }
//     }
//     // console.log(checkIndex);
//   });
//   if (checkIndex >= -1) {
//     answer.push('가능');
//   }
//   //   console.log('--------------------------------------');
// }

// console.log(answer);

//
//67
//todo 민규의 악수
// 광장에서 모인 사람들과 악수를 하는 행사가 열렸습니다.
// 참가자인 민규는 몇명의 사람들과 악수를 한 후 중간에 일이 생겨 집으로 갔습니다.

// 이 행사에서 진행된 악수는 총 n번이라고 했을 때,
//* 민규는 몇 번의 악수를 하고 집으로 돌아갔을까요?
//* 그리고 민규를 포함한 행사 참가자는 몇 명일까요?

// - 악수는 모두 1대 1로 진행이 됩니다.
// - 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번씩 악수를 합니다.
// - 같은 상대와 중복된 악수는 카운트 하지 않습니다.
// - 민규를 제외한 참가자는 행사를 모두 마쳤습니다.

// 예를들어 행사에서 59회의 악수가 진행되었다면 민규는 4번의 악수를 하였고 민규를 포함한 참가자는 12명이다.

//* 행사에서 진행된 악수 횟수(n)를 입력으로 받으면 민규의 악수 횟수와 행사 참가자 수가 출력됩니다.

//? 입력
// 59
//? 출력
// [4, 12] // [악수 횟수, 행사 참가자 수]
//

// let input = parseInt(prompt('행사에서 진행된 총 악수횟수를 입력해주세요'));
// let input = 59;
// let flag = true;
// let personNum = 3;
// let answer = [];

// while (flag) {
//   if (((personNum - 1) * personNum) / 2 > input) {
//     flag = false;
//   } else if (((personNum - 1) * personNum) / 2 < input) {
//     personNum++;
//   }
// }

// let handShakeCount =
//   input - (((personNum - 1) * personNum) / 2 - personNum + 1);

// answer.push(handShakeCount, personNum);
// console.log(answer);
