const accounts = [
    [1, 2, 3],
    [3, 2, 2],
    [2, 3, 4]
];

const maximumWealth = (accounts: number[][]) => { 
    let max = 0;
    for (let i in accounts) {
        let sum = 0;
        for (let j in accounts[i]) {
            sum += accounts[i][j];
        }
        if (sum > max) {
            max = sum;
        } else {
            max = max;
        }
    }
    return max;
}
console.log(maximumWealth(accounts));
