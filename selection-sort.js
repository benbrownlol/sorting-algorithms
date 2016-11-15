const example = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]; // example data

function selectionSort(input) {
  const array = [...input]; // clone input array for Pure Function

  for (let i = 0; i < array.length; i++) {
    let min = i; // store current index
    for (let j = i + 1; j < array.length; j++) { // loop over all array elements after current index
      if (array[j] < array[min]) min = j;
    }
    if (i !== min) [array[i], array[min]] = [array[min], array[i]]; // swap values if min value changed
  }
  
  return array; // return cloned array
}

const output = selectionSort(example);
console.log(output);
