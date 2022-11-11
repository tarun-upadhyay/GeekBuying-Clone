import "./Footer.css";
import { GoPlus } from "react-icons/go";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { HiOutlineMinusSm } from "react-icons/hi";
import { CgFacebook } from "react-icons/cg";
import stock from "../images/stock.png";
import { useState } from "react";
import reseller from "../images/reseler.png";
import trustpilot from "../images/trustpilot.png";
import tictok from "../images/tictok.png";
import payments from "../images/payments.png";
import percetage from "../images/percetage.png";
import cs_support from "../images/support.png";
const copanypng= "https://content1.geekbuying.com/V1.4/en/images/index_images/footicons.jpg?v=2022042"
export const Footer = () => {
    const [nodisplay, setNodisplay] = useState(false);
    const handleNodisplay = () => {
        setNodisplay(!nodisplay);
    };

    return (
        <div id="footer">
            <div id="topFooterDiv">
                <div id="footerTopShowDiv">
                    <div id="footerTopShowDivContent" onClick={handleNodisplay}>
                        <p>Why buy from geekbuying?</p>{!nodisplay?<GoPlus />:<HiOutlineMinusSm/>}
                    </div>
                </div>
                {nodisplay?<div id="footerTopNodisplayDiv">
                  <div className="footerTopNodisplayDivItem">
                        <div className="nodisplayIcon"><img src={percetage} alt="" /></div>
                        <h4>Amazing offers</h4>
                        <p>Find best offers for smart gadgets at one place.</p>
                    </div>
                    <div className="footerTopNodisplayDivItem">
                        <div className="nodisplayIcon"><img src={payments} alt="" /></div>
                        <h4>Easy & secure payments</h4>
                        <p>Pay directly via PayPal or Klarna among other payment options.</p>
                    </div>
                    <div className="footerTopNodisplayDivItem">
                        <div className="nodisplayIcon"><img src={stock} alt="" /></div>
                        <h4>Local stock & fast shipping</h4>
                        <p>Buy from local stock and ship within 48-hour.</p>
                    </div>
                    <div className="footerTopNodisplayDivItem">
                        <div className="nodisplayIcon"><img src={cs_support} alt="" /></div>
                        <h4>Customer support</h4>
                        <p>24-hour customer support for all your queries.</p>
                    </div>
                </div>:null}
            </div>
            <div id="subscribeFooter">
                <input type="text" placeholder="Enter email to get a 5% off coupon"/>
                <button>Subscribe</button>
            </div>
            <div id="manifooterContentDiv">
                <div id="manifooterContent">
                    <div id="footerHelp">
                        <h3>Help</h3>
                        <p>Order status</p>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Warranty</p>
                        <p>FAQs</p>
                        <p>Sitemap</p>
                    </div>
                    <div id="footerSupport">
                        <h3>Support</h3>
                        <p>Payment information</p>
                        <p>Shipping guide</p>
                        <p> Wholesale</p>
                        <p>Drop shipping</p>
                        <p>Blog</p>
                        <p>Affiliates</p>
                    </div>
                    <div id="footerPolicies">
                        <h3>Policies</h3>                      
                        <p>Terms & conditions</p>
                        <p> Return policy</p>
                        <p> Privacy</p>
                        <p> Declaration</p>
                        <p>Customs</p>
                    </div>
                    <div id="footerApp">
                        <h3>Download The App</h3>
                        <div id="appDIv">
                            <div id="leftApp"><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/android_app.png" alt="" /></div>
                            <div id="rightApp">
                                <div><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/app_store.jpg" alt="" /></div>
                                <div><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/google_play.jpg" alt="" /></div>
                                <div><img src="https://content1.geekbuying.com/V1.4/en/images/index_images/gallery.jpg" alt="" /></div>
                            </div>
                        </div>
                        <h3>Connect with us</h3>
                        <div id="socialDiv">
                            <div><CgFacebook/></div>
                            <div><AiFillYoutube/></div>
                            <div><FaTelegramPlane/></div>
                            <div><TiSocialInstagram/></div>
                            <div><AiOutlineTwitter/></div>
                            <div><img src={tictok} alt="" /></div>
                        </div>
                    </div>
                    <div id="footerRaiseTicket">
                        <div> Service_payment@geekbuying.com</div>
                        <div>Ticket</div>
                        <div>Live Chat</div>
                    </div>
                </div>
                <div id="manifooterContentPolpular">
                    <h3>Popular Searches</h3>
                    <div id="popularItems">
                        <div>Geekbuying Coupon</div>
                        <div>Roborock Q7 Max</div>
                        <div>Tronsmart Bluetooth Speakers</div>
                        <div>Windows Mini PC</div>
                        <div>ENGWE X26</div>
                        <div>android tv boxes</div>
                        <div>KugooKirin G2 Pro</div>
                        <div>LDS Robot Vacuum</div>
                        <div>Electric Bike</div>
                        <div>OnexPlayer mini AMD</div>
                    </div>
                </div>
                <div id="manifooterContentLanguage">
                    <div>English</div>
                    <div>Español</div>
                    <div>Français</div>
                    <div>Deutsch</div>
                    <div>Italiano</div>
                    <div>Português</div>
                    <div>Nederlands</div>
                    <div>Polski</div>
                    <div>Русский</div>
                    <div>Türkçe</div>
                    <div>ελληνικά</div>
                    <div>Magyar</div>
                    <div>עברית</div>
                    <div>لعربية</div>
                    <div>ไทย</div>
                    <div>日本語</div>
                </div>
            </div>
            <div id="companyFooterDiv">
                <div id="companyFooter">
                    <img src={copanypng} alt="" id="companyImg"/>
                    <img src={reseller} alt="" id="resellerImg"/>
                    <img src={trustpilot} alt="" id="trustpilotImg"/>
                </div>
                <div id="footerCopyRight">
                    <p>Copyright © 2012-2022 GeekBuying.com. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}