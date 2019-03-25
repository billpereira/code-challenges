function vowelsAndConsonants(s) {
    let vowels = s.match(/[\a\e\i\o\u]/g)
    let consonants = s.match(/[^\a\e\i\o\u]/g)
    for (let i = 0; i < vowels.length; i++)
        console.log(vowels[i])
    for (let i = 0; i < consonants.length; i++)
        console.log(consonants[i])
   
}

vowelsAndConsonants('javascriptloop')