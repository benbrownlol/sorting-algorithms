const example = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]; // example data

function insertionSort(input) {
  const array = [...input]; // clone input array for Pure Function

  for (let i = 0; i < array.length; i++) {
    const temp = array[i]; // store current index value
    let j = i - 1;
    while (j >= 0 && array[j] > temp) { // while previous index value is more than current index value
      array[j + 1] = array[j]; // current index value = previous index value
      j--;
    }
    array[j + 1] = temp; // move stored current index value to front of array
  }
  
  return array; // return cloned array
}

const output = insertionSort(example);
console.log(output);
