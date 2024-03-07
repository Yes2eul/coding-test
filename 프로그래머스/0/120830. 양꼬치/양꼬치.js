function solution(n, k) {
    const yaki = n * 12000
    const beve = k * 2000
    const free = Math.floor(n/10) * 2000
    
    return yaki + beve - free;
}