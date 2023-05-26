import React from 'react'

export default function Product(props) {
  return (
    <div className='innerLists'>
        <h1>product: {props.val.product} ,price: {props.val.price}</h1>
        <button onClick={()=>{props.addProductToCart(props.index)}}>+</button>
    </div>
  )
}
