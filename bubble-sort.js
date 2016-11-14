const example = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function bubbleSort(input) {
  const array = [...input];
  let swapping = true;
  while (swapping) {
    swapping = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapping = true;
      }
    }
  }
  return array
}

const output = bubbleSort(example);
console.log(output);
