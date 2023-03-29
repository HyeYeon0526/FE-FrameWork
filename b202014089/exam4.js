let person1 = { name: "홍길동", age: 16 }; let person2 = {...person1};

person1.age = 19; 
person2.name = "임꺽정"; 

console.log(person1); 
console.log(person2);