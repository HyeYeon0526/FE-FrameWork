function factory() { 
    const width = 4,
    height = 5
    factory: function() {
        let getArea = function() {
            return this.width * this.height;
        }
    };
}

let func = factory();
console.log(func());