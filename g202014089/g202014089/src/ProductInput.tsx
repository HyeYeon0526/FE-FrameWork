type Props = {
    addProduct : Type.AddProductFunc
}

function ProductInput({addProduct}: Props) {
    return(
        <div>
            <input type='text' value={product} onChange={onChange} /> <button onClick={onClick}>추가</button>        
        </div>
    )
}

export default ProductInput
