//
//58
//todo 콤마 찍기
// 원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
// 정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

// **숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.**
// 예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.

// let input = prompt('숫자를 입력해주세요');
// // let input = '1234567';
// let reverseInputArr = input.split('').reverse();
// let tempArr = [];
// let count = 0;

// for (let a of reverseInputArr) {
//   if (count !== 0 && count % 3 === 0) {
//     tempArr.push(',');
//   }
//   tempArr.push(a);
//   count += 1;
// }

// console.log(tempArr.reverse().join(''));

//
//59
//todo 빈칸채우기

// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면
// 그 문자열을 가운데 정렬을 해주고,
// 나머지 빈 부분에는 '='을 채워 넣어주세요.

// 입력
// hi
// 출력
// ========================hi========================

// let input = prompt('문자를 입력해주세요(50자 이내)');
// let input = 'hi';
// let symbolNum = 50 - input.length;
// let symbolLeft = parseInt(symbolNum / 2);
// let answer = '';
// for (let i = 0; i < 50; i++) {
//   if (i === symbolLeft) {
//     answer += input;
//     i += input.length - 1;
//     continue;
//   }
//   answer += '=';
// }
// console.log(answer);

//
//60
//todo 번호 매기기

// 새 학기가 되어
//* 이름을 가나다 순서대로 배정하고 번호를 매기려고 합니다.
// 데이터에 입력된 이름을 아래와 같이 출력해 주세요.

// 데이터
// students = ['강은지','김유정','박현서','최성훈','홍유진','박지호','권윤일','김채리','한지호','김진이','김민호','강채연']

// 출력
// 번호: 1, 이름: 강은지
// 번호: 2, 이름: 강채연
// 번호: 3, 이름: 권윤일
// 번호: 4, 이름: 김민호
// 번호: 5, 이름: 김유정
// 번호: 6, 이름: 김진이
// 번호: 7, 이름: 김채리
// 번호: 8, 이름: 박지호
// 번호: 9, 이름: 박현서
// 번호: 10, 이름: 최성훈
// 번호: 11, 이름: 한지호
// 번호: 12, 이름: 홍유진

// let students = [
//   '강은지',
//   '김유정',
//   '박현서',
//   '최성훈',
//   '홍유진',
//   '박지호',
//   '권윤일',
//   '김채리',
//   '한지호',
//   '김진이',
//   '김민호',
//   '강채연',
// ];

// let sortedArr = students.sort();
// let index = 1;
// for (let a of sortedArr) {
//   console.log(`번호: ${index++}, 이름: ${a}`);
// }

//
//61
//todo 문자열 압축하기
// *문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.
// 입력
// aaabbbbcdddd
// 출력
// a3b4c1d4

// let input = prompt('문자열을 입력하세요');
// // let input = 'aaabbbbcaaaaaddddz';
// let count = 1;
// let arr = Array.from({ length: 26 }, () => 0);
// let answer = '';
// for (let value of input) {
//   arr[value.charCodeAt() - 'a'.charCodeAt()] += 1;
// }
// // console.log(arr);
// for (let i = 0; i < 26; i++) {
//   if (arr[i] !== 0) {
//     answer += `${String.fromCharCode(97 + i)}${arr[i]}`;
//   }
// }
// console.log(answer);

/* [ 자바스크립트 아스키코드 ]
- 대문자 A~Z : 65~90
- 소문자 a~z : 97~122
- 문자열.charCodeAt(index) : 문자열에서 index번째 문자의 아스키코드 값을 반환. 한 글자인 경우 index값 입력 안해도 됨
- String.fromCharCode(아스키코드값) : 아스키코드 값에 해당하는 문자를 반환함 */
