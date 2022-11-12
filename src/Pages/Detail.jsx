import React from 'react'
import { useSelector } from 'react-redux'
const Detail = () => {
  const store = useSelector((store)=> store.details)
  console.log(store)
  return (
    <div>Detail</div>
  )
}

export default Detail