import React from 'react'
import { useSelector } from 'react-redux'
import styles from "./detail.module.css"
const Description = () => {
  const detailArr = useSelector((store)=>store.AppReducer.details)
  return (
    <div>
        <div id={styles.desc}>

  
        <h2>Highlights</h2>
        <h3>15.6 Inch 1080P+45% NTSC</h3>
        <p>Exquisite picture quality can show more real and accurate gorgeous colors, adapt to more scenes</p>
        <h3>Ultra Thin body</h3>
        <p>New design of CNC integrated molding aluminum alloy case, improve the compressive strength</p>
        <h3>Low Blue Screen</h3>
        <p>The image more gentle and natural light, reducing eye irritation, more healthy and comfortable</p>
        <h3>178 Degree Full View</h3>
        <p>High-definition IPS colorful screen, watching from any angle, give you a visual feast</p>
        <h3>Full-featured Type C Interface</h3>
        <p>Support power supply, transmission, video signal transmission</p>
        </div>
        <div className={styles.imgdesc}>
            <img src={detailArr.img} alt="n" />
        </div>
    </div>
  )
}

export default Description