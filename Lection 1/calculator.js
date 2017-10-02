const readline = require('readline');
let operators = ['+','-','*','/'];
function calc(expression)
 {
   console.log(expression);
   let x;
   let y='';
   let operator;
   for (i=0; i<expression.length; i++)
   {
     if (expression[i]=='-') {y=y+'-'; i++}
     if (operators.indexOf(expression[i])!=-1) 
     {
      x=+y;
      y='';
      operator=expression[i];
      if (expression[i]=='-') {y=y+'-'; i++};
     } 
     else
      {y+=expression[i]};
 }
   y=+y;
   // console.log(x);
   // console.log(operator);
   // console.log(y);
    switch (operator)
    {
      case '+':
        return(x+y);
        break;
      case '-':
        return(x-y);
        break;
      case '*':
        return(x*y);
        break;
      case '/':
        return(x/y);
        break;
      case '^':
        break;
      default:
        return 0;
        break;
    }

}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter an expression: ', (expression) => {
  // TODO: Log the answer in a database
  console.log(calc(expression));

  rl.close();
});