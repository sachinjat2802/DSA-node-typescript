function plusMinus(arr: any[]) {
    const n = arr.length;
    let positiveFraction = 0;
    let negativeFraction = 0;
    let zeroFraction = 0;

    for (const num of arr) {
        if (num > 0) {
            positiveFraction++;
        } else if (num < 0) {
            negativeFraction++;
        } else {
            zeroFraction++;
        }
    }

    positiveFraction /= n;
    negativeFraction /= n;
    zeroFraction /= n;

    console.log((positiveFraction * 100).toFixed(2) + "%");
    console.log((negativeFraction * 100).toFixed(2) + "%");
    console.log((zeroFraction * 100).toFixed(2) + "%");
}

plusMinus([-4, 3, -9, 0, 4, 1]);
