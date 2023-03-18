let testData = ["국어",100,"수학",78,"영어",93];

// 일부 반환값을 무시한 채 배열 요소를 이용할 수 있다. 
let [subject1, ,subject2, ,subject3, ] = testData;

console.log(subject2); 

let [ ,grade1, ,grade2, ,grade3] = testData;

console.log(subject1,grade1);

// 배열에 부여된 값을 바꾸기 위해 새 변수를 만드는 작업 없이도 값의 교환이 가능하다. 
[grade1, grade2] = [grade2,grade1]

console.log(subject1,grade1);

let finalResult = {
    [subject1] : grade1,
    [subject2] : grade2,
    [subject3] : grade3
};

console.log(finalResult);