function sameFrequency(num1, num2) {
  let fc1 = {}
  let fc2 = {}
  const num1Arr = String(num1).split("")
  const num2Arr = String(num2).split("")

  for (let i of num1Arr) {
    (fc1[i] > 0) ? fc1[i]++ : fc1[i] = 1
  }
  for (let j of num2Arr) {
    (fc2[j] > 0) ? fc2[j]++ : fc2[j] = 1
  }

  let vals1 = Object.values(fc1)
  let vals2 = Object.values(fc2)
  if (vals1.length !== vals2.length) return false

  for (let i = 0; i < vals1.length; i++) {
    if (vals1[i] != vals2[i]) {
      return false
    }
  }
  return true
}

sameFrequency(182, 281) // t
sameFrequency(3323232324, 14) // f
sameFrequency(22, 222) // f 
sameFrequency(224, 244) // f 
sameFrequency(0, 0) // t
sameFrequency(5353663463675488, 624263463734575456645234234) // f