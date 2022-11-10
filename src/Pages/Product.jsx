import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData } from '../Redux/action';

const Product = () => {
  const dispatch = useDispatch();
  dispatch(addData)
  const data = useSelector((store)=> store.products)
  console.log(data)
  return (
    <div>Product</div>
  )
}

export default Product