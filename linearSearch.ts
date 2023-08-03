let values: number[] = [12, 23, 3, 45, 9, 56, 344, 323, 2];
let target: number = 9;

let linearSearch: any = (arr: number[], target: number) => {
    for (let i in arr) {
        if (arr[i] == target) {
            return i;
        }  
    }
    return -1;
};
 
const val:any = linearSearch(values, target);
console.log(val);
