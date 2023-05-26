import React from 'react'
import Cart from './Cart'

export default function CartList(props) {
    const sum = ()=>{
        let total = 0;
        props.cart.forEach((val)=>{
            total+=val.price
        })
        return total;
    }
  return (
    <div className='mainLists'>
        <button onClick={()=>{props.setShowPage(false)}}>to store</button>
        {props.cart.map((val,index)=>{
            return <Cart val={val} index={index} deletePost={props.deletePost}/>
        })}
        <h1>total:{sum()}</h1>
    </div>
  )
}
