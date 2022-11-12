import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const store = useSelector((store)=> store.details)
  console.log(store)
  return (
    <div>Cart</div>
  )
}

export default Cart