/* This code is generating a string of numbers in a grid format with 3 rows and 3 columns. It
initializes variables `raw` and `column` to 3, and `counter` and `string` to 0 and an empty string
respectively. It then uses nested for loops to iterate through each row and column, incrementing the
`counter` variable and appending it to the `string`. After each row is complete, a newline character
is added to the `string`. Finally, the `string` is logged to the console. */
const raw = 3;
const column =3;
let counter = 0
let string = ''
for(let i=1;i<=raw;i++){
   for(let j=column;j>=1;j--){
     counter++;
    string +=counter;
}
string += "\n"
}
console.log(string);