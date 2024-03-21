function solution(s) {
    const sign = s[0] === '-' ? -1 : 1;

    const number = Number(s.slice(s[0] === '-' ? 1 : 0));

    return sign * number;
}