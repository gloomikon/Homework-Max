const readline = require('readline');
let interval = [];
function cycle(x,y)
{
	pointer = 0;
	if (x<y)
	{
		for (let i=x;i<=y;i++)
		{
			interval[pointer]=i;
			pointer++;
		}
	}
	else
	{
		for (let i=x;i>=y;i--)
		{
			interval[pointer]=i;
			pointer++;
		}
	}
}
function num(expression)
{
	var numbers=expression.split(' ',2);
	cycle(+numbers[0],+numbers[1]);
	return interval;
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter an expression: ', (expression) => {
  // TODO: Log the answer in a database
  console.log(num(expression));

  rl.close();
});