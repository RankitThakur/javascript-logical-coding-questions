// Print the keys of a given object in an html tag whose data attribute is data-keys="keys":
//     {key1: 1, key2: 2, key3: 3, key4: 4
let obj =  {key1: 1, key2: 2, key3: 3, key4: 4}

let items = document.querySelector('[data-keys=keys]');
for(let i in  obj){
  let p = document.createElement('p');
  p.textContent = i
  items.appendChild(p);
}














