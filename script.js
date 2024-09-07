function stringChop(str, size) {
	let ans=[]
	let j=0;
	let s="";
	for(let i=0;i<str.length;i++){
		s+=str[i];
		j++;
		if(j == size){
			j=0;
			s="";
			ans.push(s);
		}
	}
	ans.push(s);

	return ans;
}

// console.log(stringChop("Hello, world!", 5));

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
