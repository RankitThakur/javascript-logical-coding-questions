 // Write a program to  reverse a string either from beginning or ending and at a specified position


const anyString = prompt("Enter the string");
let position = prompt("Enter the position")
let start =   prompt("Enter the s for start or e for end:").toUpperCase().charAt()

if(start == `S`){
  const newAnyString = anyString
  let result = newAnyString.substr(position)
  let result2 = newAnyString.substr(0,position)
  let reverse = result2.split("").reverse().join("")
  let final = reverse.concat(result)
  console.log(final)
}

else if(start == `E`){
  const newAnyString = anyString
  let result = newAnyString.substr(0,position)
  let result2 = newAnyString.substr(position)
  let reverse = result2.split("").reverse().join("")
  let final = result2.concat(reverse)
  console.log(final)
}





