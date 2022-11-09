import React, { useState } from "react";
import styles from "./detail.module.css";
import { Link } from "react-scroll";
import Description from "../Pages/Description";
import Review from "../Pages/Review";
import Qa from "../Pages/QA";
import "./scroll.css"

const Detail = () => {
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleRemove = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <div id={styles.main}>
        <div id={styles.image}>
          <img
            src="https://img.gkbcdn.com/p/2022-05-27/WEESTA-7-in-1-Air-Fryer-Toaster-Oven-Combo-Gray-501361-0._w280_.jpg"
            alt="mm"
          />
          <div id={styles.slide}></div>
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
          <h2>Electic</h2>
          <div className={styles.aboutPro}>
            <p>Reviews</p>
            <p>Brand</p>
            <p> Answered Questions</p>
            <p>Item Code</p>
          </div>
          <div className={styles.price}>
            <p>₹ 15,0000/-</p>
            <p>₹ 5000</p>
            <p>15% OFF</p>
          </div>
          <div className={styles.coupon}>
            <p>NEW USER 2% OFF</p>
            <p>GET COUPON</p>
          </div>

          <div>
            <h3>Ship From : COUNTRY</h3>
          </div>
          <div className={styles.count}>
            <p>QTY : </p>
            <button onClick={handleAdd}>+</button>
            <p>{count}</p>
            <button disabled={count === 1} onClick={handleRemove}>
              -
            </button>
          </div>
          <div>
            <h3>Shipping : Cannot Ship to india</h3>
          </div>
          <div className={styles.buttonSec}>
            <button>ADD TO CART</button>
            <button>BUY NOW</button>
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
          <div className={styles.ima}>
            <img
              src="https://play-lh.googleusercontent.com/L2t8EnZ0MfANNcvWkEew69d25JIufAf7IvnturnDnjCwbYGYLc1yc14DEur7wQgaFYE=w600-h300-pc0xffffff-pd"
              alt="ss"
            />
            <img
              src="https://play-lh.googleusercontent.com/L2t8EnZ0MfANNcvWkEew69d25JIufAf7IvnturnDnjCwbYGYLc1yc14DEur7wQgaFYE=w600-h300-pc0xffffff-pd"
              alt="sss"
            />
            <img
              src="https://play-lh.googleusercontent.com/L2t8EnZ0MfANNcvWkEew69d25JIufAf7IvnturnDnjCwbYGYLc1yc14DEur7wQgaFYE=w600-h300-pc0xffffff-pd"
              alt="ssss"
            />
          </div>
        </div>
      </div>
      <div>
        <h3 id={styles.you}>You May also Like</h3>
        <div id={styles.sugg}></div>
      </div>
      <div className={styles.feed}>
        <div className="App">
          <header className="nav">
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
