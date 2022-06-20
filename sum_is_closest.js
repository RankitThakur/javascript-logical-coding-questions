  let arr = [10, 22, 28, 29, 30, 40]
  let length = arr.length-1
  let  sum = 54;
  let low=0
  let high=0;
  let l = 0;
  let h = length;
  let diffrance = Number.MAX_VALUE;
  while (h > l){
    if ((arr[l] +arr[h] - sum) < diffrance){
      low = l;
      high = h;
      diffrance = Math.abs(arr[l] + arr[h] - sum);
    }
    if (arr[l] + arr[h] > sum){
            h --;
    }
            else
            l++;

  }
  document.write(`The closest pair is ${arr[low]} and  ${arr[high]}`)


// for(l=0;l<h;l++){
//      if (Math.abs(arr[l] +arr[h] - sum) < diffrance){
//       low = l;
//       high = h;
//       diffrance = Math.abs(arr[l] + arr[h] - sum);
//             }
//     if (arr[l] + arr[h] > sum)
//             h --;
//             else
//             l++;
//         }

// document.write(`The closest pair is ${arr[low]} and  ${arr[high]}`)


