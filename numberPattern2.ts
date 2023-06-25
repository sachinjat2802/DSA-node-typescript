/* This code is creating a string of numbers in a grid format with 4 rows and 4 columns. It first
initializes the number of rows and columns using `const raw = 4;` and `const column = 4;`. It then
uses a nested loop to iterate through each row and column and add the column number to a string
variable `string`. After each row is complete, it adds a newline character `\n` to the string to
move to the next row. Finally, it logs the resulting string to the console using
`console.log(string);`. */
const raw = 4;
const column =4;
let string = ''
for(let i=1;i<=raw;i++){
   for(let j=1;j<=column;j++){
    string +=j
}
string += "\n"
}
console.log(string);