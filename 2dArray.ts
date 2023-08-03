const array2d = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const tar:number = 6;

for (const i in array2d) {
    for (const j in array2d[i]) {
        if(array2d[i][j] == tar) {
            console.log(1+parseInt(i), 1+parseInt(j));
        }
    }
}