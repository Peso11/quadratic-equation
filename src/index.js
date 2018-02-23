module.exports = function solveEquation(equation) {
  equation = equation.split('').filter(function (x) {return x!= " "}).join('').split("x");
    let a = parseInt(equation[0]);
    let b = parseInt(equation[1].split('').slice(2, equation[1].length).join(''));
    let c = parseInt(equation[2]);
    let Desc = Math.pow(b,2) - 4*a*c;
      let finalAnswer = [,,];
    if (Desc>0) {
      finalAnswer[0] = Math.round(((-1)*b + Math.sqrt(Math.pow(b,2)-4*a*c)) /(2*a));
      finalAnswer[1] = Math.round(((-1)*b - Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a));

    }
  return finalAnswer.sort(function(x,y) {return x-y});
 }
