let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let arrayNovo = [];

//------o que eu fiz :
// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
// 			if (secondIndex === index-1){
// 				arrayNovo.push(numbers[index]*numbers[secondIndex]);
// 			}
      
//     }
//   }

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    arrayNovo.push(numbers[index] * numbers[index + 1]);
  } else {
    arrayNovo.push(numbers[index] * 2);
  }
}

  // console.log(numbers)

	console.log(arrayNovo)