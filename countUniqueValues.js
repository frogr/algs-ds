function countUniqueValues(arr) {
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return console.log(i + 1)
}


countUniqueValues([1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 1, 2]) // 3
countUniqueValues([]) // 0
