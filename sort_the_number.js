// let my_string = "24Hello0981World"
// let sort_string = my_string.split('').sort().join('')
// console.log(sort_string)




let my_string = "24Hello981World"
let sort_string =  my_string.split("")
let fil = sort_string.filter(checkNumber).sort().join("")
let fil2 = sort_string.filter(checkString).join("")




function checkNumber(str) {
 return Number(str)
}

function checkString(str) {

 return  isNaN(str);
}

const array3 = fil.concat(fil2);
console.log(array3 )



