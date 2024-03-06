function solution(array, n) {
    const newArr = array.filter(item => item === n);
    return newArr.length;
}