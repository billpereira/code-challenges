function iqTest(numbers){
  const arr = numbers.split(' ')
  const arrOdd = []
  const arrEven = []
  for (let i = 0;i<arr.length;i++){
    if(arr[i]%2===0) arrEven.push(i+1)
    else arrOdd.push(i+1)
  }
  return arrOdd.length < arrEven.length ? arrOdd[0] : arrEven[0]
}

iqTest("2 4 7 8 10") //=> 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") // => 2 // Second number is even, while the rest of the numbers are odd