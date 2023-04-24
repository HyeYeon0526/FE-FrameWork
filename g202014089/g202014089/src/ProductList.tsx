import React from "react";
import ProductItem from "./ProductItem";

function ProductList({ productList }: Props) {
    const productlist = productList.map(product => <ProductItem product={product} key={product.id} />)
    return (
        <table>
            <thead>
                <tr><td>id</td><td>제품</td><td>가격</td></tr>
            </thead>
            <tbody>
                {productlist}
            </tbody>
        </table>
    )
}

export default ProductList;