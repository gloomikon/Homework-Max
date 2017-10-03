function genArr(len,from,to)
{
	let array = [];
	for (let i=0;i<len;i++)
	{
		array.push(Math.floor(Math.random()*(to-from+1)+from));
	}
	return array;
}
console.log(genArr(10,30,110)); //10- кол-во элементов в массиве
								//30-110 - пределы Рандома