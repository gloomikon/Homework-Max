arr=[];
function sum()
{
	let X=0;
	for (let i=0; i<arguments.length;i++)
	{
		X+=arguments[i];
	}
	return X;
}
console.log(sum(1,2,3,4,5,6,7,8,9,10)); //55
console.log(sum(10,20,30,40)); //100