function fizz (number) {
 
 if (number % 3 === 0) {
 	return "Fizz";
 }else if (number % 5 === 0) {
 	return "Buzz";
 }else if (number % 15 === 0) {
 	return "FizzBuzz";
 }else{
 	return number.toString();
 }
 };

 


function fizzBuzz (start, end) {
  // Write fizzBuzz here once fizz is finished.
};

export { fizz };
