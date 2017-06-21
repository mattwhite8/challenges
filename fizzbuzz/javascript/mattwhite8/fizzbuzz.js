//we take in a num argument that will represent the length of the array returned
function fizzBuzz(num) {
	//create an empty array that will store the output
	var newArr = [];
	//loop number of times equal to num argument 
	for(var i = 1; i <= num; i++){
		//check for most complicated situation first
		if((i % 3 === 0) && (i % 5 === 0)){
			newArr.push('FizzBuzz');
		}else if (i % 5 === 0){
			newArr.push('Buzz');
		}else if (i % 3 === 0){
			newArr.push('Fizz')
		}else {
			newArr.push(i);
		}
	}
	//return the modified array
	return newArr;
}

