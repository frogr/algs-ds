function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return console.log(false)
  }
  const mapped = arr1.map(x => x * x).sort()
  const sorted = arr2.sort()
  mappedStr = JSON.stringify(mapped)
  sortedStr = JSON.stringify(sorted)
  if (sortedStr == mappedStr) {
    return console.log(true)
  } else {
    return console.log(false)
  }
}
same([1, 2, 3], [1, 9]) // false
same([1, 2, 2, 5, 3], [1, 4, 4, 25, 9]) // true 
same([1, 2, 1], [4, 4, 1]) // false