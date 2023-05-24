import React from 'react'
import type { Product } from './productReducer'
import { useNavigate } from 'react-router'

type Props = {
    product: Product
}

const Item = React.memo(({ product }: Props) => {
    const navigate = useNavigate(); 
    const onClick = () => navigate('/edit/' + product.id);

    return (
        <tr onClick={onClick}>
            <td>{ product.id }</td>
            <td>{ product.title }</td>
            <td>{ product.category }</td>
            <td>{ product.price }</td>
            <td>{ product.quantity }</td>
            <td>{ product.available }</td>
        </tr>
    )
})

    
export default Item