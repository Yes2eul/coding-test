function solution(my_string) {
    const vowel = ["a", "e", "i", "o", "u"];
    let result = "";

    for (let char of my_string) {
        if (!vowel.includes(char)) {
            result += char;
        }
    }

    return result;
}