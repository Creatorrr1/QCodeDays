// Description
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arr) {
    return arr.filter(Boolean).length;
}

let array = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

console.log(`Q) countSheeps(array) =>`,'A)', countSheeps(array))

// function countSheeps(arrayOfSheep) {
//     let count = 0;
    
//     arrayOfSheep.forEach( function (sheep) {
//       if (sheep)
//         count++;
//     });
    
//     return count;
// }

// function countSheeps(arrayOfSheep) {
//     return arrayOfSheep.reduce(function(result, current) {
//       if (current) result++;
//       return result;
//     }, 0);
// }

// function countSheeps(arrayOfSheep) {
//     let count = 0;
//   arrayOfSheep.map(function(current){
//     if(current){
//       count += 1;
//   }
//   });
//   return count;
// }

// function countSheeps(arrayOfSheep) {
//     let count = 0;
//     arrayOfSheep.forEach(sheep => sheep ? count++ : count)
//     return count
// }

// const countSheeps = arrayOfSheep => arrayOfSheep.filter(x => x == true).length

// function countSheeps(arrayOfSheep) {
//     let arr = arrayOfSheep.filter( sheep => sheep === true);
//     return `${arr.length} `;
//     //return  arr.length;
// }

// function countSheeps(arrayOfSheeps,x) {
//     return arrayOfSheeps.reduce(function(count,sheep){return count+ !!sheep},0)
// }

// describe("Tests", () => {
//     it("test", () => {
//   let array1 = [true,  true,  true,  false,
//                 true,  true,  true,  true ,
//                 true,  false, true,  false,
//                 true,  false, false, true ,
//                 true,  true,  true,  true ,
//                 false, false, true,  true ];
              
//   let array2 = [];
//   for (let index = 0; index < 500; index++)
//     array2.push(true);
//   for (let index = 0; index < 5; index++)
//     array2.push(undefined);
//   for (let index = 0; index < 100; index++)
//     array2.push(false);
                
//   let array3 = [];
//   for (let index = 0; index < 500; index++)
//     array3.push(null);
//   for (let index = 0; index < 5; index++)
//     array3.push(undefined);
//   for (let index = 0; index < 100; index++)
//     array3.push(false);
    
//   Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total, not " + countSheeps(array1))
//   Test.assertEquals(countSheeps(array2), 500, "There are 500 sheeps in total, not " + countSheeps(array2))
//   Test.assertEquals(countSheeps(array3), 0, "There are no sheeps at all, you counted " + countSheeps(array3))
//     });
// });
