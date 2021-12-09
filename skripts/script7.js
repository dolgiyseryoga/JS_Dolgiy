var a=8;
var b=3;

// 1 уравнение
var x = nerdamer.solve('a+2*(x-b)=16', 'x');
console.log(x.toString());
Z=(-1/2)*(-16-2*b+a);
console.log(Z);

// 2 уравнение (по-моему ответ не совпадает с реальностью, библиотека считает как-то по иному.)
var x = nerdamer.solve('b*(x+15)=a+6x', 'x');
console.log(x.toString());
N=(-a+15*b)*(-b+6)^(-1);
console.log(N);

/* 
3(x+15)=8+6x
3x+45=8+6x
3x-6x=8-45
-3x=-37
3x=37
x=37/3
x=12.3
*/

// 3 уравнение (по-моему ответ не совпадает с реальностью, библиотека считает как-то по иному.)
var x = nerdamer.solve('(1*x)+(2*x)+(a*x)+(b*x)=23780', 'x');
console.log(x.toString());
K=-23780*(-3-a-b)^(-1);
console.log(K);

/* 
x+2x+8x+3x=23780
14x=23780
x=23780/14
x=1698.6
*/
