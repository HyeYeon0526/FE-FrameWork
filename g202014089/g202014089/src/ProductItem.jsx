import React from 'react'

type Props = {
    product :types.product
}

function ProductItem({ todo }: Props) { 
    return (
        <tr> <td>{product.id}</td> <td>{product.title}</td><td>product.price</td></tr>
    )
}
    
export default ProductItem;