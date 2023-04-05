import React from "react";
import './MyTable.css';

function MyTable() {
    let person = [{name : '김혜연', age: 25},   
    {name : '장기홍', age: 24},
    {name : '조윤지', age: 24}];
    let trlist = person.map(person => <tr><td>{ person.name }</td><td>{ person.age }</td></tr>)

    return (
        <table className="MyTable">
            <tr><td>이름</td><td>나이</td></tr>
            { trlist }
        </table>
    );
}

export default MyTable;