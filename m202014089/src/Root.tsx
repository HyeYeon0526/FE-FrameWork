import React, { useReducer, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Header'
import List from './List'
import Edit from './Edit'
import Add from './Add'
import { reducer, initialState } from './productReducer';
import { reloadProduct } from './productService';


const Root = React.memo(() =>  {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => { reloadProdudct(dispatch); }, []);
  const clearErr = () => dispatch({type: 'setErrorMsg', payload: { errorMsg: "" }});

  return (
    <div>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={ <List products={state.products}/>}/>
            <Route path='/edit:id' element={ <Edit dispatch={dispatch}/>}/>
            <Route path='/add' element={ <Add />}/>
          </Routes>
      </BrowserRouter>
      { state.errorMsg && <div id="error">{state.errorMsg}
        <span onClick={clearErr}>x</span></div> }
    </div>

  )
})

export default Root;
