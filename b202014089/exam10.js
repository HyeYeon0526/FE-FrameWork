function merge(x, y ='', z='', k='') {
    let a = x.concat(y).concat(z).concat(k); 
    return a;
}

console.log(merge([1, 2])); 
console.log(merge([1, 2], [3, 4, 5])); 
console.log(merge([1, 2], [3, 4], [5, 6], [7]))