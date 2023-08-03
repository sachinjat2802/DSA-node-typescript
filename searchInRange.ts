const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 17];
const get: number = 10;
const range: number[] = [1, 13]

const searchInRange = (numbers: number[], get: number): number[] => { 
    const allOccurance:number[] = []

    for (let i = range[0]; i<range[1];i++) {
        if (numbers[i] == get) {
            allOccurance.push(i);
        }
    }
    return allOccurance;

}
if (searchInRange(numbers, get).length === 0 ) {
    console.log("Element is not present in array");
}
else {
    console.log("Element is " + searchInRange(numbers, get));
 }