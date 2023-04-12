import React, { useState } from 'react';
import Counter from './Counter'; 
import Message from './Message'; 
import { State, IncreaseFunc, SetMessageFunc } from './types'; 

function App() { 
  const initialState: State = { message: 'hello', count: 0 }; 
  const [state, setState] = useState<State>(initialState);
  const increase: IncreaseFunc = () => setState({ ...state, count: state.count + 1 });
  const setMessage: SetMessageFunc = (msg: string) => setState({ ...state, message: msg }) 
  
  return (
    <div className="App" style={{ textAlign: "center" }}> 
      <p>message: {state.message}</p> 
      <Message message={state.message} setMessage={setMessage} /> 
      <hr /> 
      <Counter count={state.count} increase={increase} /> 
    </div>
  );
}

export default App;