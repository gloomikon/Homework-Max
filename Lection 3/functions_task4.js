arr=[];
function max()
{
	let X=arguments[0];
	for (let i=1; i<arguments.length;i++)
	{
		if (arguments[i]>X) {X=arguments[i]}
	}
	return X;
}
console.log(max(1,2,3,4,5,6,7,8,9,10)); //10
console.log(max(40,30,10,20)); //40