// DESCRIPTION:

// The museum of incredible dull things

// The museum of incredible dull things wants to get rid of some exhibitions. 
// Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, 
// and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, 
// so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
// If there are multiple elements with the same value, remove the one with a lower index. 
// If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples

// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
    numbers = numbers.slice(0);

    const min = Math.min(...numbers);

    numbers.splice(numbers.indexOf(min), 1);
    
    return numbers;
}

console.log('Q) removeSmallest([1,2,3,4,5]) =>','A)',removeSmallest([1,2,3,4,5]))
console.log('Q) removeSmallest([5,3,2,1,4]) =>','A)',removeSmallest([5,3,2,1,4]))
console.log('Q) removeSmallest([2,2,1,2,1]) =>','A)',removeSmallest([2,2,1,2,1]))

// Other Ways =>

// function removeSmallest(numbers) {
//     let copy = [...numbers]
//     let smallest = Math.min(...numbers);
//     let smallestIdx = numbers.indexOf(smallest)
//     copy.splice(smallestIdx, 1)
//     return copy
// }

// function removeSmallest(numbers) {
//     const index = numbers.reduce((m, n, i) => n < numbers[m] ? i : m, 0)
//     return numbers.filter((n, i) => i !== index)
// }

// const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));

// function removeSmallest(numbers) {
//     let clone = numbers.slice(0);
//     clone.splice(numbers.indexOf(Math.min.apply(null,numbers)),1);
//     return clone;
// }

// function removeSmallest(numbers) {
//     let newNumbers = numbers.slice();
//     if (newNumbers == '') {
//         return [];
//     }

//     const minimum = newNumbers.reduce((first, second) => {
//         if (first < second) {
//             return first;
//         }
//         return second;
//     });
//     newNumbers.splice(newNumbers.indexOf(minimum), 1)
//     return newNumbers;
// }

// function removeSmallest(numbers) {
//     const indexSmallest = numbers.indexOf(Math.min(...numbers));
//     return numbers.filter((n, i) => i !== indexSmallest);
// }

// function removeSmallest(numbers) {
//     if (!numbers.length)
//       return [];
//     let inx = 0;  
//     const nums = Array.from(numbers, (x, i) => {  
//       if (x < numbers[inx])
//         inx = i;
//       return x;
//     });
//     nums.splice(inx, 1);
//     return nums;
// }

// describe("removeSmallest", function() {
//     it("works for the examples", function() {
//       Test.assertSimilar(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
//       Test.assertSimilar(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
//       Test.assertSimilar(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
//       Test.assertSimilar(removeSmallest([]), [], "Wrong result for []");
//     });
// })
