// const numbers = [ 11, 22, 33, 44];
// numbers.filter((number, index, source) => {
//     console.log(number);
//     console.log(index);
//     console.log(source);
//     console.log('');

// })

const guys = [
    { name : 'hy', money : 1000 },
    { name : 'kh', money : 10000 },
    { name : 'yj', money : 10 },
    { name : 'wj', money: 100000}
];

const rich = guys.filter(man => man.money > 1000 );
const richNames = guys.filter(man => man.money > 1000).map(man => man.name)
const moneyAverage = guys.reduce((prev, curr) => {
    console.log("prev : ", prev, " ");
    console.log("curr : ", curr ," ");
    return prev + curr.money;
}, 0);

console.log(rich);
console.log(richNames);

console.log(moneyAverage/guys.length);