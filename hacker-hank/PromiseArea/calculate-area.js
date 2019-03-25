let shape="squar"
let values = [4,3]

let calculateArea = (shape, values) => {

    return new Promise(function(resolve,reject){
        if (shape === "square") {
            resolve(values[0]*values[1]);
          }
          else {
            reject(-1);
          }
    })
}

calculateArea(shape,values).then(res=>console.log(res)).catch(e=>console.log(e))
