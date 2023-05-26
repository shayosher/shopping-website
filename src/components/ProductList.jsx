import React from 'react'
import Product from './Product'

export default function ProductList(props) {
  return (
    <div className='mainLists'>
        <button onClick={()=>{props.setShowPage(true)}}>to cart</button>
        {props.products.map((val,index)=>{
            return <Product val={val} index={index} addProductToCart={props.addProductToCart}/>
        })}
    </div>
  )
}
