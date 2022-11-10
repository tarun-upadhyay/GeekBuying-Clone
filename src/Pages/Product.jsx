import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Product = () => {
  const dispatch = useDispatch();
  const data = useSelector((store)=> store.products)
  console.log(data)
  return (
    <div>Product</div>
  )
}

export default Product