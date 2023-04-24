import React, { useState } from 'react'
import ProductInput from './ProductInput';
import ProductList from './ProductList';

function ProductRoot() {
    const [state, dispatch] = useState(initialState)
    return (
        <div className="todoRoot">
            <h1>제품 목록</h1>
            <ProductInput dispatch={dispatch} />
            <ProductList productList={state.productList} dispatch={dispatch} />
        </div>
    )
}
export default ProductRoot;