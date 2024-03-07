function solution(n) {
    const sum = String(n).split("").reduce((acc, cur) => acc + Number(cur), 0)
    return sum;
}