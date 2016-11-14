const example = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]; // example data

function mergeSort(input) {
  const array = [...input]; // clone input array for Pure Function
  
  if (array.length < 2) return array; // array small enough, just return

  const middle = Math.floor(array.length / 2); // get middle index of array
  const left = array.slice(0, middle); // split array and store left half
  const right = array.slice(middle); // split array and store right half

  return sort(mergeSort(left), mergeSort(right)); // recursively split & sort array 

  function sort(left, right) {
    const sorted = []; // sorted array

    while (left.length && right.length) { // keep shifting array values until both passed arrays are empty
      if (left[0] < right[0]) sorted.push(left.shift()); // left is smaller, add value to sorted array
      else sorted.push(right.shift()); // right is smaller, add value to sorted array
    }

    return sorted
      .concat(...left)
      .concat(...right);
  }
  
  return array; // return cloned array
}

const output = mergeSort(example);
console.log(output);
