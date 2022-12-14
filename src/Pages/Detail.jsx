import React, { useState } from "react";
import styles from "./detail.module.css";

import { useNavigate} from "react-router-dom";
import { Link as Link1 } from "react-router-dom";



import Description from "../Pages/Description";
import Review from "../Pages/Review";
import Qa from "../Pages/QA";
import "./scroll.css";

import { Link } from "react-scroll";
import Carousel from "react-elastic-carousel";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/action";

const Detail = () => {
 const navigate = useNavigate()
 const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleRemove = () => {
    setCount(count - 1);
  };

  const handleAddToCart = (el) => {
    const { title, img, category, price, rating } = el;
    let newdata = {
      title: title,
      img: img,
      category: category,
      price: price,
      rating: rating,
      count: count,
      status: false,
    }
    dispatch(addToCart(newdata))
    alert("Added inside the cart")

  };
  const buynow = () => {
    navigate("/cart");
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  
  

  const detailArr = useSelector((store)=>store.AppReducer.details)

 

  return (
    <div>
      <div id={styles.main}>
        <div id={styles.image}>
          <img src={detailArr.img} alt={detailArr.title} />
         
          <div className={styles.media}>
            <p>Share To : </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
              alt="fb"
            />
            <img
              src="https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg"
              alt="twit"
            />
            <img
              src="https://thumbs.dreamstime.com/b/m-email-vector-logo-g-mail-new-multicolor-flat-style-eps-198332944.jpg"
              alt="mail"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf-6KoZyJ-xlJJwRaJrnXHFkGPoyxNELRSdbI4JkA&s"
              alt="pin"
            />
          </div>
        </div>
        <div id={styles.detail}>
          <h1 id={styles.title}>{detailArr.title}</h1>
          <div className={styles.aboutPro}>
            <p>Item Code : {detailArr.rating}</p>
          </div>
          <div className={styles.price}>
            <p>₹ {detailArr.price}</p>

            <p>15% OFF</p>
          </div>
          <div className={styles.coupon}>
            <p>NEW USER 2% OFF</p>
          </div>

          <div>
            <h3>Ship From : COUNTRY</h3>
          </div>
          <div className={styles.count}>
            <p>QTY : </p>
            <button onClick={handleAdd} disabled={count ===5}>+</button>
            <p>{count}</p>
            <button disabled={count === 1} onClick={handleRemove}>
              -
            </button>
          </div>
          <div>
            <h3>Shipping : Cannot Ship to india</h3>
          </div>
          <div className={styles.buttonSec}>
           
             
             <button  id={styles.btn} onClick={()=>handleAddToCart(detailArr)}>ADD TO CART</button>
           
           
            <button onClick={buynow}>BUY NOW</button>
          </div>
          <div className={styles.pay}>
            <p>
              {" "}
              PAYMENT :{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
                alt="pay"
              />
            </p>
          </div>
          <div className={styles.pa}>
            <p>PRICE MATCH</p>
            <p>DROPSHIPPING DOWNLOAD</p>
            <p>BULK ORDER REBATE</p>
          </div>
        </div>
      </div>
      <div>
        <h3 id={styles.you}>You May also Like</h3>
        <div id={styles.sugg}>
          <div className="App">
            <Carousel breakPoints={breakPoints}>
              <img
                src="https://img.gkbcdn.com/p/2022-10-18/Trianglelab-M6-ZS-0-6mm-Nozzle-for-V6-Hotend-3D-Printer-517935-0._w280_.jpg"
                alt="ss"
              />
              <img
                src="https://img.gkbcdn.com/p/2022-10-15/Creativity-CR6-SE-Nozzle-Thermistor-Heating-Rod-Kit-517911-0._w280_.jpg"
                alt="ss"
              />
              <img
                src="https://img.gkbcdn.com/p/2021-11-19/Anycubic-PLA-3D-Printer-Filament-1kg-White-478938-0._w280_.jpg"
                alt="ss"
              />
              <img
                src="https://img.gkbcdn.com/p/2022-04-16/Trianglelab-RNC-Nano-Coated-Gear-DDB-Extruder-V2-1-499716-0._w280_.jpg"
                alt="ss"
              />
              <img
                src="https://img.gkbcdn.com/p/2022-04-08/BIGTREETECH-SKR-MINI-E3-V3-0-32-Bit-Control-Board-for-Ender-3-Ender-3-499308-0._w280_.jpg"
                alt="ss"
              />
              <img
                src="https://img.gkbcdn.com/p/2022-10-19/Trianglelab-E3D-V6-0-8mm-Hardened-Steel-Nozzles-517983-0._w280_.jpg"
                alt="ss"
              />
              <img
                src="https://img.gkbcdn.com/p/2022-09-09/Trianglelab-TCHC-TD6-Model-B-12V-Hot-End-516954-0._w280_.jpg"
                alt="ss"
              />
              <img
                src="https://img.gkbcdn.com/p/2022-02-17/ERYONE-Silk-PLA-Filament-for-3D-Printer-1-75mm-496636-0._w280_.jpg"
                alt="ss"
              />
            </Carousel>
          </div>
        </div>
      </div>
      <div className={styles.feeding}>
        <div className="Appp">
          <header className="navP">
            <nav className="nav__container__actions">
              <ul>
                <li>
                  <Link activeClass="active" smooth spy to="description">
                    DESCRIPTION
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" smooth spy to="Review">
                    REVIEW
                  </Link>
                </li>
                <li>
                  <Link activeClass="active" smooth spy to="Qa">
                    Q&A
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <section id="description">{<Description />}</section>
          <section id="Review">{<Review />}</section>
          <section id="Qa">{<Qa />}</section>
        </div>
      </div>
    </div>
  );
};

export default Detail;
