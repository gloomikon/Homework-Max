function reverseStr()
{
	let arr=[];
	for (let i=0;i<arguments.length;i++)
	{
		arr[i]=arguments[i].split('').reverse().join('');
	}
	return arr;
}
console.log(reverseStr('nikolas','gloom','bethany','tusen'));