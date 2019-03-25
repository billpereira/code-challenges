const solution = (arr) => {
    arrItems = {}
    for(let i = 0; i<arr.length ; i++){
        if(!arrItems[arr[i]]) arrItems[arr[i]] = [1,i]  
        else if(arrItems[arr[i]][0]===1) delete arrItems[arr[i]]
    }
    for(let key in arrItems)
        return key
    
}

console.log(solution([9,3,9,3,9,7,9]))