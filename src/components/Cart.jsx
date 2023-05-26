import React from 'react'

export default function Cart(props) {
  return (
    <div className='innerLists'>
        <h1>product: {props.val.product} ,price: {props.val.price}</h1>
        <button onClick={()=>{props.deletePost(props.index)}}>x</button>
    </div>
  )
}
