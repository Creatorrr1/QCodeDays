/* HANDSHAKE ALGORITHM */

// DESCRIPTION:
// Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

// Every year he takes photos of farmers handshaking. 
// Johnny knows that no two farmers handshake more than once. 
// He also knows that some of the possible handshake combinations may not happen.

// However, Johnny would like to know the minimal amount of people that participated this year 
// just by counting all the handshakes.

// Help Johnny by writing a function, that takes the amount of handshakes 
// and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).


function getParticipants(handshakes){
    let x = handshakes
  let participants = 0
  while (x > 0) {
      x = x - participants
      participants++
  }
  return participants
}

console.log('1st Q) getParticipants(0) and A) =>', getParticipants(0))
console.log('2nd Q) getParticipants(1) and A) =>', getParticipants(1))
console.log('3rd Q) getParticipants(6) and A) =>', getParticipants(6))


// function getParticipants(handshakes){
//     let farmers = 0
//     while(handshakes > farmers * (farmers - 1) / 2){
//       farmers++
//     }
//     return farmers
// }

// function getParticipants(handshakes){
//     if(handshakes === 0) return 0;
//     const d = 1 + 4 * 2 * handshakes;
//     const result = (-1 + Math.ceil(Math.sqrt(d))) / 2;
//     return Math.round(result) + 1;
// }

// function getParticipants(handshakes){
//     if((handshakes <= 0)) return 0
    
//   //   no of handshakes = people * ((people-1)/2)
//   //   no of people = -b + √(b^2 - 4*a*c)/2a
//     const inputA = 1,
//       inputB = -1,
//       inputC = -2 * Number(handshakes);
    
//     const root = Math.pow(inputB, 2) - 4 * inputA * inputC;
//     const root1 = (-inputB + Math.sqrt(root)) / (2 * inputA);
  
//     return Math.ceil(root1)
// }

// function getParticipants(handshakes){
//     let n = 0, max = 0;
//     while (handshakes > max) {
//       n++;
//       max = n + (n-3)*n/2;
//     }
//     return n;
// }

// function getParticipants(handshakes){
//     let item = 0
//     while(handshakes > 0){
//       handshakes -=item
//       item++
//     }
//     return item
// }

// function getParticipants(handshakes){
//     if(!handshakes) return 0;
  
//     let answer = 0;
//     let sum = 0
  
//     while(handshakes > sum) {
//       sum = answer * (answer + 1) / 2;
  
//       answer++;
//     }
  
//     return answer;
// }
