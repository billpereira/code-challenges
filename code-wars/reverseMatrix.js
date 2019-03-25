function reverseOnDiagonals(matrix) {

    for(let i=1;i<matrix.length;i++){
        let a = matrix[0][0+i-1]
        let b = matrix[0][matrix[0].length-i]
        let c = matrix[matrix[0].length-i][0]
        let d = matrix[matrix[0].length-i][matrix[0].length-i]
        matrix[0][0] = d
        matrix[0][matrix[0].length-i] = c
        matrix[matrix[0].length-i][0] = b
        matrix[matrix[0].length-i][matrix[0].length-i] = a
    }

   
   return matrix
    
     
   }

console.log(reverseOnDiagonals([[43,455,32,103],  [102,988,298,981],  [309,21,53,64],  [2,22,35,291]]))


// [43 ,455,32 ,103]
// [102,988,298,981]
// [309,21 ,53 , 64]
// [2  ,22 ,35 ,291]

// [291,455,32 ,  2]
// [102,53 ,21 ,981]
// [309,298,988, 64]
// [103,22 ,35 , 43]
