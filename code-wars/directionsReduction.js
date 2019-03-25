

const dirReduc = (directionsArr) => {
    let filteredArr = []

    for (let i=0;i<directionsArr.length;i++){
        console.log(filteredArr)
        switch (directionsArr[i]) {
            case "NORTH":
                if(filteredArr.indexOf("SOUTH")<0) filteredArr.push("NORTH")
                else filteredArr.splice(filteredArr.indexOf("SOUTH"),1)
                break;
            case "SOUTH":
                if(filteredArr.indexOf("NORTH")<0) filteredArr.push("SOUTH")
                else filteredArr.splice(filteredArr.indexOf("NORTH"),1)
                break;
            case "WEST":
                if(filteredArr.indexOf("EAST")<0) filteredArr.push("WEST")
                else filteredArr.splice(filteredArr.indexOf("EAST"),1)
                break;
            case "EAST":
                if(filteredArr.indexOf("WEST")<0) filteredArr.push("EAST")
                else filteredArr.splice(filteredArr.indexOf("WEST"),1)
                break;
        
            default:
                break;
        }
    }

    return filteredArr


}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])) //WEST
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])) //["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])) //[]