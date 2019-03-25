'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());
    
    main();
});

let readLine = () => inputString[currentLine++];


// Complete the calculateArea function below.
// It returns a Promise which on success, returns area of the shape, and on failure returns [-1].
let calculateArea = (shape, values) => {
        let pi = 3.14;

        return new Promise(function (resolve, reject) {
            switch (shape) {
                case 'square':
                    resolve(values[0] * values[0]);
                    break;

                case 'rectangle':
                    resolve(values[0] * values[1]);
                    break;

                case 'circle':
                    resolve(parseFloat((pi * values[0] * values[0]).toFixed(2)));
                    break;

                case 'triangle':
                    resolve((values[0] * values[1]) / 2);
                    break;

                default:
                    reject(-1);
                    break;
            }
        });
}

// Complete the generateArea function below.
// It returns a Promise which on success, returns an array of areas of all the shapes and on failure, returns [-1].
let getAreas = (shapes, values_arr) => {
    let areas = [];
    let pi = 3.14;
    let sides =[]
    for (let i = 0; i < shapes.length; i++) {
        switch (shapes[i]) {
            case 'square':
                sides = values_arr[i];
                areas.push(sides[0] * sides[0]);
                break;

            case 'rectangle':
                sides = values_arr[i];
                areas.push(sides[0] * sides[1]);
                break;

            case 'circle':
                sides = values_arr[i];

                areas.push(parseFloat((pi * sides[0] * sides[0]).toFixed(2)));
                break;

            case 'triangle':
                sides = values_arr[i];
                areas.push((sides[0] * sides[1]) / 2);
                break;

            default:
                areas.push(-1);
                break;
        }
        }

        return new Promise(function (resolve, reject) {
            if (areas.indexOf(-1) !== -1) reject([-1]);
            else resolve(areas);
        });
}
    // let callCalculateArea = async (shapes, values) => await calculateArea(shapes[0], values[0]).catch(error => error) 
let callCalculateArea = async (shapes, values) => await calculateArea(shapes[0], values[0]).catch(error => error) instanceof Promise;