let input = "Don't give up.";
	input = input.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultsArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  //console.log('inputIndex is ' + inputIndex);
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    //console.log('vowelIndex is ' + vowelIndex);
    if (input[inputIndex] === vowels[vowelIndex]) {
      resultsArray.push(input[inputIndex]);
    }
  } 
 if (input[inputIndex] === 'e') {
   resultsArray.push(input[inputIndex]);
 } 
  
 if (input[inputIndex] === 'u') {
   resultsArray.push(input[inputIndex]);
 }
}

console.log(resultsArray.join('').toUpperCase());