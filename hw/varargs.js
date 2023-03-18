const addText = (...string) => {
    let alphabet = [];
    let text = [];
    let result ;
    for (let i = 0 ; i < string.length; i++){
        if( i % 2 == 0){ // 홀수번째 문자열  추출, index는 0부터 시작함을 고려하여 조건식 설정 
            alphabet += string[i];
        }
        else{ // 홀수번째 문자열을 추출 
            text += string[i];
        }
    }
    result = alphabet +" "+ text;
    return result;

}

console.log(addText("H","가","e","나","l","다","l","라","o"));
