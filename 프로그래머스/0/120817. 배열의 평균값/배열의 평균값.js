function solution(numbers) {
    const len = numbers.length;

    let sum = numbers.reduce(function (acc, num) {
        return acc + num;
    }, 0);

    return sum / len;
}