let array = [];
function genArr(arr,len,from,to)
{
	for (let i=0;i<len;i++)
	{
		array.push(Math.floor(Math.random()*(to-from+1)+from));
	}
	return array;
}
function compareNumbers(a, b) {
  return a - b;
}
let sorrt = arr => arr.sort(compareNumbers);
genArr(array,10,30,110); //генерируем массив
console.log(array);		 //выводим его
sorrt(array);			 //сортируем его
console.log(array);      //опять выводим