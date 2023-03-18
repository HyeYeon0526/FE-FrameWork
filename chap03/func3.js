let rectangle1 = {
    width: 4,
    height: 5,
    method1() {
        let area = this.width * this.height;
        console.log(area);
    }
};

let method1 = rectangle1.method1;
method1();