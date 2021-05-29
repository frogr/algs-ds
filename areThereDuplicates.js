function areThereDuplicates() {
  let argStorage = {}
  for(let i in arguments) {
    if (argStorage[arguments[i]] > 1 ) {
      return true
    } else if (argStorage[arguments[i]] > 0) {
      argStorage[arguments[i]]++
    } else {
      argStorage[arguments[i]] = 1
    }
  }
  let values = Object.values(argStorage)
  return (!(values.every(x => x === 1)))
}


areThereDuplicates(1, 2, 3) // f
areThereDuplicates(1, 2, 2) // t
areThereDuplicates("a", "b", "c", "c") // t
areThereDuplicates("a", "a")
areThereDuplicates("a", "b")
areThereDuplicates(1, 1, 1, 1, 1)
areThereDuplicates(1, 1, 1, 1, 2)