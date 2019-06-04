const JumbleSentence = (sentence) => {
    const arrWords = sentence.split(' ')
    var reverseStringsArray = []

    for(var i = 0 ; i < arrWords.length ; i++){
        var word = arrWords[i]
        reverseStringsArray.push(arrWords[i].toLowerCase().split('').sort().join(''))
        if(word[0]===word[0].toUpperCase()) 
        reverseStringsArray[reverseStringsArray.length-1] = capitalize(reverseStringsArray[reverseStringsArray.length-1])
        if(reverseStringsArray[reverseStringsArray.length-1].match(/([^A-Za-z0-9\s])/)) 
        reverseStringsArray[reverseStringsArray.length-1] = reverseStringsArray[reverseStringsArray.length-1].substring(1)+reverseStringsArray[reverseStringsArray.length-1].substring(0,1)
    }

    return reverseStringsArray.join(' ')
}

const capitalize = (word) => {
    word = word.substring(0, 1).toUpperCase() + word.substring(1)
    return word
}

console.log(JumbleSentence('The cat sat on the Ikea mat.'))