const example = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function insertionSort(input) {
  const array = [...input];

  for (let i = 0; i < array.length; i++) {
    const temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  
  return array;
}

const output = insertionSort(example);
console.log(output);