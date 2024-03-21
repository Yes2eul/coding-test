function solution(s) {
    const numbers = {
        "zero" : 0,
        "one" : 1,
        "two" : 2,
        "three" : 3,
        "four" : 4,
        "five" : 5,
        "six" : 6,
        "seven" : 7,
        "eight" : 8,
        "nine" : 9,
    }
    
    let answer = '';
    let temp = '';

    for (let char of s) {
        if (!isNaN(char)) { // 숫자인 경우 바로 추가
            answer += char;
        } else { // 문자인 경우 임시 저장
            temp += char;
            if (numbers[temp] !== undefined) { // 영단어에 해당하는 숫자를 찾은 경우 추가
                answer += numbers[temp];
                temp = ''; // 임시 저장 변수 초기화
            }
        }
    }

    return parseInt(answer);
}