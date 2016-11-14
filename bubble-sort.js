const example = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function bubbleSort(input) {
  const array = [...input];
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
  }
  return array
}

const sorted = bubbleSort(example);
console.log(sorted);
