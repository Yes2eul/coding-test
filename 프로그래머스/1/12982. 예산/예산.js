function solution(d, budget) {
    if(d.reduce((a, b) => a + b) > budget) {
        d.sort((a, b) => a - b); // 오름차순 정렬 
        let sum = 0;
        let count = 0;
        for (let i = 0; i < d.length; i++) {
            sum += d[i];
            if (sum <= budget) {
                count++;
            } else {
                break;
            }
        }
        return count;
    }
    else {
        return d.length;
    }
}