function solution(numbers) {
    const sortedNumbers = numbers.sort((a, b) => b - a); // 내림차순으로 정렬
    return sortedNumbers[0] * sortedNumbers[1];
}