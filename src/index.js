module.exports = function solveEquation(equation) {
var uravnenie =  {
         answer: [0, 0],
         a: equation.replace(/\s/g, '').match(/[^\^]\d+/g)[0],
         b: equation.replace(/\s/g, '').match(/[^\^]\d+/g)[1],
         c: equation.replace(/\s/g, '').match(/[^\^]\d+/g)[2]

     }
     uravnenie.answer[0] = Math.round(( (-1) * uravnenie.b + Math.sqrt( Math.pow(uravnenie.b,2) - 4 * uravnenie.a * uravnenie.c)) / (2 * uravnenie.a));
     uravnenie.answer[1] = Math.round(( (-1) * uravnenie.b - Math.sqrt( Math.pow(uravnenie.b,2) - 4 * uravnenie.a * uravnenie.c)) / (2 * uravnenie.a));

        var finalAnswer=uravnenie.answer.sort((right, left) => {return right - left});
        return finalAnswer;

 }
