// Any digit followed by all zeros: 100, 90000

// Every digit is the same number: 1111

// The digits are sequential, incementing†: 1234

// The digits are sequential, decrementing‡: 4321

// The digits are a palindrome: 1221 or 73837

// The digits match one of the values in the awesomePhrases array

const inInteresting = (n,arr) => {

}

console.log(isInteresting(3, [1337, 256]))      //0
console.log(isInteresting(1336, [1337, 256]))   //1
console.log(isInteresting(1337, [1337, 256]))   //2
console.log(isInteresting(11208, [1337, 256]))  //0
console.log(isInteresting(11209, [1337, 256]))  //1
console.log(isInteresting(11211, [1337, 256]))  //2