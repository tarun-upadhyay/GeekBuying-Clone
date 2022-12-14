import React from 'react'

const OrderCard = ({price, img, status="booked",title}) => {
  return (
    <div>
       <img src={img} alt="" />
       <h2>{title}</h2>
       <h1>{price}</h1>
       <p>{status}</p>
    </div>
  )
}

export default OrderCard