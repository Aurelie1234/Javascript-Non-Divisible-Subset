function nonDivisibleSubset(k, s) {
    // Write your code here


let remainders = new Array(k).fill(0);
    s.forEach(num => remainders[num % k]++);
    let result = (remainders[0] ? 2 : 1) - k % 2;
    for (let i = 1; i < k / 2; i++) {
        result += Math.max(remainders[i], remainders[k-i]);
    }
    return result;
}
