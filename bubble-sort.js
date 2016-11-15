const example = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]; // example data

function bubbleSort(input) {
  const array = [...input]; // clone input array for Pure Function

  let swapping = true; // init swapping variable to start `while` loop
  while (swapping) { // use `while` loop to repeatedly loop through input array
    swapping = false; // stop `while` loop from running again if conditional not met
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) { // if current index value is more than next index value
        [array[i], array[i + 1]] = [array[i + 1], array[i]]; // swap array values
        swapping = true; // conditional met, keep `while` loop running
      }
    }
  }

  return array // return cloned array
}

const output = bubbleSort(example);
console.log(output);
