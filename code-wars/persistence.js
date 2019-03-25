function persistence(num) {
    const splittedNum = num.toString().split('')
    if(splittedNum.length === 1 ) return 0
    let realDigits = splittedNum.map(Number)
    let mult = 1;
    for(let i = 0;i<realDigits.length ;i++){
        mult = mult * realDigits[i]
    }
    return 1 + persistence(mult)
 }





console.log(persistence(39)) //=== 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

console.log(persistence(999)) //=== 4 // because 9*9*9 = 729, 7*2*9 = 126,
 // 1*2*6 = 12, and finally 1*2 = 2

console.log(persistence(4)) //=== 0 // because 4 is already a one-digit number
