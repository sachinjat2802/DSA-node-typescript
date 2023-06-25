/* This code is generating a string of numbers in a descending order for each row and printing it to
the console. The number of rows and columns is determined by the values of `raw` and `column`
respectively. The outer loop iterates over the rows and the inner loop iterates over the columns.
The string variable is used to store the numbers for each row and a newline character is added at
the end of each row to move to the next line. Finally, the string is printed to the console using
`console.log()`. */
const raw = 4;
const column =4;
let string = ''
for(let i=1;i<=raw;i++){
   for(let j=column;j>=1;j--){
    string +=j
}
string += "\n"
}
console.log(string);