const grade = (n) => {
    if(n>=25) return 'A'
    if(n>=20) return 'B'
    if(n>=15) return 'C'
    if(n>=10) return 'D'
    if(n>=5) return 'E'
    return 'F'
}

console.log(grade(11))