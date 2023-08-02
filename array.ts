const array = [1, 2, 3, 4, 5];

// Accessing elements
console.log("Accessing elements:");
console.log(array[2]); // Output: 3

// Modifying elements
console.log("\nModifying elements:");
array[1] = 10;
console.log(array); // Output: [1, 10, 3, 4, 5]

// Adding elements
console.log("\nAdding elements:");
array.push(6);
array.unshift(0);
array.splice(3, 0, 20);
console.log(array); // Output: [0, 1, 10, 20, 3, 4, 5, 6]

// Removing elements
console.log("\nRemoving elements:");
array.pop();
array.shift();
array.splice(3, 1);
console.log(array); // Output: [1, 10, 20, 4, 5]

// Finding elements
console.log("\nFinding elements:");
const index = array.indexOf(10);
console.log("Index of 10:", index); // Output: Index of 10: 1

const foundElement = array.find((element) => element > 10);
console.log("First element > 10:", foundElement); // Output: First element > 10: 20

const filteredArray = array.filter((element) => element % 2 === 0);
console.log("Filtered array (even elements):", filteredArray); // Output: Filtered array (even elements): [10, 20, 4]

// Array Length
console.log("\nArray length:");
const len = array.length;
console.log("Length:", len); // Output: Length: 5

// Joining and Splitting
console.log("\nJoining and Splitting:");
const joinedArray = array.join(", ");
console.log("Joined array:", joinedArray); // Output: Joined array: 1, 10, 20, 4, 5

const splittedArray = joinedArray.split(", ");
console.log("Splitted array:", splittedArray); // Output: Splitted array: ['1', '10', '20', '4', '5']

// Sorting
console.log("\nSorting:");
const sortedArrayAsc = array.slice().sort((a, b) => a - b);
console.log("Sorted array (ascending):", sortedArrayAsc); // Output: Sorted array (ascending): [1, 4, 5, 10, 20]

const sortedArrayDesc = array.slice().sort((a, b) => b - a);
console.log("Sorted array (descending):", sortedArrayDesc); // Output: Sorted array (descending): [20, 10, 5, 4, 1]

// Iterating
console.log("\nIterating:");
array.forEach((element) => console.log(element));

// Mapping
console.log("\nMapping:");
const mappedArray = array.map((element) => element * 2);
console.log("Mapped array:", mappedArray); // Output: Mapped array: [2, 20, 40, 8, 10]

// Reducing
console.log("\nReducing:");
const sum = array.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // Output: Sum: 40

// Concatenating
console.log("\nConcatenating:");
const anotherArray = [6, 7, 8];
const concatenatedArray = array.concat(anotherArray);
console.log("Concatenated array:", concatenatedArray); // Output: Concatenated array: [1, 10, 20, 4, 5, 6, 7, 8]

// Checking Elements
console.log("\nChecking Elements:");
const allPositive = array.every((element) => element > 0);
console.log("All positive?", allPositive); // Output: All positive? true

const somePositive = array.some((element) => element > 10);
console.log("Some positive?", somePositive); // Output: Some positive? true

// Slicing
console.log("\nSlicing:");
const slicedArray = array.slice(1, 4);
console.log("Sliced array:", slicedArray); // Output: Sliced array: [10, 20, 4]

// Spreading
console.log("\nSpreading:");
const spreadedArray = [...array];
console.log("Spreaded array:", spreadedArray); // Output: Spreaded array: [1, 10, 20, 4, 5]
