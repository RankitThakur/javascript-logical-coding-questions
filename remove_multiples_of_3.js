

function displayResult() {
  document.getElementById("output").innerHTML = ("Answer:" + myArray);
}


let array = [1, 2, 30, 9,3, 20, 4, 5, 6, 10, 18, 27];
document.getElementById("input").innerHTML = array
let myArray = array.filter(number => {
  return number%3!=0 ;
});
