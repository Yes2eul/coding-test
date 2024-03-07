function solution(my_string) {
    let answer = "";
    if(my_string.length >= 1 && my_string.length <= 1000) {
        answer = [...my_string].reverse().join("");
    }
    return answer;
}