const example = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

function mergeSort(input) {
  const array = [...input];

  if (array.length < 2) return array;

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return sort(mergeSort(left), mergeSort(right));

  function sort(left, right) {
    const sorted = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) sorted.push(left.shift());
      else sorted.push(right.shift());
    }

    return sorted
      .concat(...left)
      .concat(...right);
  }
  
  return array;
}

const output = mergeSort(example);
console.log(output);
