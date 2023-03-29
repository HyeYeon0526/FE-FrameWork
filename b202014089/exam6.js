let rectangle = { 
    width: 4, 
    height: 5, 
    method1() {
        let area = this.width * this.height;
        return (area);
    }
 }; 
 
 let func = rectangle.method1(); 
 console.log(func());