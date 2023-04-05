import React, { useState } from 'react';
import MyTable from './Mytable';
import Message from './Message';
import './App.css';

function App() {
  const [ count, setCount ] = useState(0);
  const increase = () => { setCount(count + 1);};
  const decrease = () => { setCount(count - 1);};
 
  return (
    <div>
      <MyTable />
      <hr />
      <Message value="안녕하세요" color="blue" />
      <hr />
      <p>{ count }</p>
      <button onClick={increase}> 증가 </button>
      <button onClick={decrease}> 감소 </button>
    </div>
  );
}

export default App;
