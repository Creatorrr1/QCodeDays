// DESCRIPTION:
// Your task is to calculate the maximum possible height of a perfectly square pyramid 
// (the number of complete layers) that we can build, given n number of cubes as the argument.

// The top layer is always only 1 cube and is always present.
// There are no hollow areas, meaning each layer must be fully populated with cubes.
// The layers are thus so built that the corner cube always covers the inner 25% of the corner cube 
// below it and so each row has one more cube than the one below it.

// If you were given only 5 cubes, the lower layer would have 4 cubes and the top 1 cube would sit right in the middle of them, 
// where the lower 4 cubes meet.

// If you were given 14 cubes, you could build a pyramid of 3 layers, but 13 wouldn't be enough as you would be missing one cube, 
// so only 2 layers would be complete and some cubes left over!

// What is the tallest pyramid possible we can build from the given number of cubes? Simply return the number of complete layers.

// Examples

// 4  -->  1
// 5  -->  2
// 13  -->  2
// 14  -->  3

function pyramidHeight(n) {
    let count = 0;
    while (n > 0) {
      const squaredBlocks = count * count;
      if (squaredBlocks > n) break;
      n -= squaredBlocks;
      count++;
    }
    return count - 1;
    
}

console.log('Test =>', 'Q => pyramidHeight(4)', ' A from func =>',pyramidHeight(4), 'to equal => 1')
console.log('Test =>', 'Q => pyramidHeight(5)', ' A from func =>',pyramidHeight(5), 'to equal => 2')
console.log('Test =>', 'Q => pyramidHeight(29)', 'A from func =>',pyramidHeight(29), 'to equal => 3')
console.log('Test =>', 'Q => pyramidHeight(30)', 'A from func =>',pyramidHeight(30), 'to equal => 4')
console.log('Test =>', 'Q => pyramidHeight(31)', 'A from func =>',pyramidHeight(31), 'to equal => 4')


// Other Ways =>

// function pyramidHeight(n) {
//     let layer = 0;
//     let total = 0;
//     let remainingCubes = n;
//     let layerCubes = 0
    
//     while (layerCubes <= remainingCubes)
//       {
//         total += layerCubes;
//         remainingCubes = remainingCubes - layerCubes;
        
//         layerCubes = ((layer+1) * (layer+1));
        
//         if(layerCubes <= remainingCubes)
//           {
//             layer++;
//           }
//       }
    
//     return layer;
  
// }

// function pyramidHeight(n) {
//     let counter = 0
//     while (true) {
//         n -= counter ** 2
//         if (n == 0) {
//             return counter
//         } else if (n < 0) {
//             return counter - 1
//         } else {
//             counter++
//         }
//     }
// }

// function pyramidHeight(n) {
//     // Each layer is the layer number squared
//     let layer = 0
//     //forever
//     while (true) {
//       //subtract the amount of cubes in the current layer
//       n -= layer ** 2
//       //if there are no cubes left but the last layer was completed, return the current layer
//       if (n === 0) {
//         return layer
//       }
//       //if there weren't enough cubes left to complete the layer, return the current layer -1
//       else if (n < 0) {
//         return layer - 1
//       }
//       //otherwise go to the next layer
//       layer++
//     }
// }

// function pyramidHeight(cubes) {
//     let levels = 0;
//     let usedCubes = 0;
    
//     while (true) {
//       const nextLevel = levels + 1;
//       usedCubes += Math.pow(nextLevel, 2);
      
//       if (usedCubes > cubes) break;
//       else levels++;
//     }
    
//     return levels;
// }

// function pyramidHeight(n) {
//     let total = 0;
//     let count = 0;
//     let i = 1;
    
//     while (total + (i * i) <= n) {  
//       total += i * i;
//       i++; 
//       count++;
//     } 
  
//     return count;
// }



// const { assert } = require('chai');

// const test = (input, expected, message) => {
//   assert.strictEqual(pyramidHeight(input), expected, message);
// }

// describe('pyramidHeight()', () => {
//   it('fixed tests', () => {
//     const tests = [
//       [1, 1],
//       [4, 1],
//       [5, 2],
//       [29, 3],
//       [30, 4],
//       [31, 4],
//       [1239, 14],
//       [1240, 15],
//       [1495, 15],
//       [1496, 16],
//       [4323, 22],
//       [4324, 23],
//       [4899, 23],
//       [4900, 24],
//       [5524, 24],
//       [5525, 25],
//       [6200, 25],
//       [6201, 26],
//       [6254, 26],
//     ];

//     for (const [input, expected] of tests) {
//       test(input, expected);
//     }
//   });

//   it('random tests', () => {
//     const randomInt = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
//     const solution = (n, i = 1) => n < 0 ? i - 2 : solution(n - i * i, i + 1);

//     for (let i = 0; i < 100; i++) {
//       const input = randomInt(1, 10000);
//       const expected = solution(input);
//       test(input, expected);
//     }
//   });
// });