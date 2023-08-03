
const number = [1234, 23, 232, 434, 4, 45, 12312, 2131, 1212];
const max = Math.max(...number);
const min = Math.min(...number);
console.log(max);
console.log(min);

const element = [1, 2, 3, 4, 5];
let maxElement = element[0];
let minElement = element[0];
for (const i of element) {
    if (i > maxElement) {
        maxElement = i;
    }
}
for (const i of element) { 
    if (i < minElement) {
        minElement = i;
    }
}
console.log(minElement);
console.log(maxElement);

