// let my_string = "24Hello0981World"
// let sort_string = my_string.split('').sort().join('')
// console.log(sort_string)




let my_string = "24Hello981World"
let sort_string =  my_string.split("")
let fil = sort_string.filter(checkNumber).sort()
let fil2 = sort_string.filter(checkString).join("")

a = Array.from(sort_string)


function checkNumber(str) {
 return str*1
}

function checkString(str) {

 return  str === 'hello';
}

const array3 = fil.concat(fil2);
console.log(a )


