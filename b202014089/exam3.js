let a1 = [1, 2, 3]; 
let a2 = [...a1];


a1[0] = 10; 
a2[0] = 20;
console.log(a1, a2);