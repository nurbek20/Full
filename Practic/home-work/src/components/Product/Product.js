import React from 'react'
import ProductItem from '../Product-item/Product-item'

const Product = (props) => {
    const {btnClick, val, setVal, data, text}=props
    return (
        <div>
            <ProductItem 
            btnClick={btnClick}
            val={val}
            setVal={setVal}
            data={data}
            text={text}
            />
        </div>


    )
}
export default Product;