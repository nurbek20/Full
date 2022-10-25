import React from 'react'

const ProductItem = (props) => {
    console.log("data>>", props)
    const {btnClick, val, setVal, data, text}=props

    return (
        <div>
            <input
            value={val}
            onChange={(event)=>setVal(event.target.value)}
            type={text?'text':'password'} />
            <button
            onClick={btnClick}
            >Click</button>
            <p>{data}</p>
        </div>
    )
}

export default ProductItem