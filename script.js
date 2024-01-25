const parseCode = (str) => {
  // your code here
	let arr = str.split('0');
	let filteredArray = arr.filter(str => str !== '');
	let result = { firstName: filteredArray[0], lastName: filteredArray[1], id: filteredArray[2] };
	return result;
	 //  let obj = {};
	 //  let i = 0;
	 //  arr.forEach(e => {
		// if(e !== ""){
		// 	if(i===0){
		// 		obj.firstName = e;
		// 	}else if(i===1){
		// 		obj.lastName = e
		// 	}else{
		// 		obj.id = e;
		// 	}
		// 	i++;     
		// } 
	 //  });
	 //  return obj;
};
// Do not change the code below
// const str = prompt("Enter str: ");
// alert(JSON.stringify(parseCode(str))); 
