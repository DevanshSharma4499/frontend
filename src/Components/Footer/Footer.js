import { render } from "@testing-library/react";
import React from "react";

import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsWhatsapp,
  BsLinkedin,
  BsPhone,
} from "react-icons/bs";
import { useState } from "react";
const Footer = () => {
  return (
    <>
      {/* <div className="lastelements">
                <div><img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202201/12/zQjhCZCDpasB4AB5.jpg" alt="" />
                    <div><span>Free shipping</span></div>
                </div>
                <div>
                    <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/22/dVpcwW2hS36AszPS.png" alt="" />
                    <div><span>Official OPPO COD</span></div>
                </div>
                <div className='relative'>
                    <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/22/7Xk17roJoRR5mS9i.png" alt="" />
                    <div><span>100% Secure Payments</span></div>
                </div>
                <div className='relative'>
                    <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202110/22/bRa6DB9sP9rORhgT.png" alt="" />
                    <div><span>Official Warranty Varies <br />
                        from 6-12 months</span></div>

                </div>
            </div> */}
      {/* <div id="shopify-section-1627017499c9c1e06d" class="shopify-section">




                <div class="rowd footer-top-banner theme-green-bg-color">
                    <div class="container">
                        <h3>Free Expert Phone Consultation</h3>
                        <p>Get to know more about your health problem with easy simple assessment. Let’s find out.</p>
                        <div class="btn-group">
                            <a href="tel:8112612345" aria-describedby="a11y-external-message"><img src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/phone.png?v=1625655959" />CALL</a>
                            <a href="https://wa.me/918112612345" aria-describedby="a11y-external-message"><img src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/whatsapp.png?v=1639555747" />WHATSAPP</a>
                            <a href="https://m.me/vigyanveda" target="_blank" aria-describedby="a11y-new-window-external-message" rel="null noopener"><img src="https://cdn.shopify.com/s/files/1/0575/8920/3125/files/chat.png?v=1625655959" />CHAT</a>
                            
                        </div>
                    </div>
                </div>











            </div> */}

      <footer className="site-footer critical-hidden " id="footer">
        <div className="page-width">
          <div className="site-footer__content foo-bor-b">
            <div
              className="site-footer__item
                    
                    site-footer__item--one-quarter
                    "
            >
              <div className="site-footer__item-inner site-footer__item-inner--link_list">
                <p className="h4">ShopWorks</p>
                <ul
                  className="site-footer__linklist
                            "
                >
                  <li className="site-footer__linklist-item">
                    <a href="/about">About Us</a>
                  </li>
                  <li className="site-footer__linklist-item">
                    <a href="/pages/contact-us">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="site-footer__item
                    
                    site-footer__item--one-quarter
                    "
            >
              <div className="site-footer__item-inner site-footer__item-inner--link_list">
                <p className="h4">Top Products</p>
                <ul
                  className="site-footer__linklist
                            "
                >
                  <li className="site-footer__linklist-item">
                    <a href="/products">Iphone</a>
                  </li>
                  <li className="site-footer__linklist-item">
                    <a href="/products">Amul Cheese</a>
                  </li>
                  <li className="site-footer__linklist-item">
                    <a href="/products">HP laptop</a>
                  </li>
                  <li className="site-footer__linklist-item">
                    <a href="/products">Whole Grains</a>
                  </li>
                  <li className="site-footer__linklist-item">
                    <a href="/products">Iphone Charger</a>
                  </li>
                  <li className="site-footer__linklist-item">
                    <a href="/products">One Plus 9</a>
                  </li>
                  <li className="site-footer__linklist-item">
                    <a href="/products">Coca Cola</a>
                  </li>
                  <li className="site-footer__linklist-item">
                    <a href="/products">Iphone Wallet Case</a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="site-footer__item
                    
                    site-footer__item--one-quarter
                    "
            >
              <div className="site-footer__item-inner site-footer__item-inner--link_list">
                <p className="h4">Helpful Links</p>
                <ul
                  className="site-footer__linklist
                            "
                >
                  <li className="site-footer__linklist-item">
                    <a href="/pages/terms-conditions">Terms &amp; Conditions</a>
                  </li>
                  <li className="site-footer__linklist-item">
                    <a href="/pages/privacy-policy">Privacy Policy</a>
                  </li>
                  <li className="site-footer__linklist-item">
                    <a href="/pages/refund-cancellation-policy">
                      Refund &amp; Cancellation policy
                    </a>
                  </li>
                  {/* <li className="site-footer__linklist-item">
                                    <a href="https://laserartistudios.com" aria-describedby="a11y-external-message">
                                        Packaging Partner (Laserarti Studios)
                                    </a>
                                </li> */}
                  {/* <li className="site-footer__linklist-item">
                                    <a href="/pages/bmi-calculator">
                                        BMI Calculator
                                    </a>
                                </li> */}
                  {/* <li className="site-footer__linklist-item">
                                    <a href="/pages/health-assessment">
                                        Take Health Assessment
                                    </a>
                                </li> */}
                </ul>
              </div>
            </div>
            <div
              className="site-footer__item
                    
                    site-footer__item--one-quarter
                    "
            >
              <div className="site-footer__item-inner site-footer__item-inner--text">
                <p className="h4">Contact Us</p>
                <div
                  className="site-footer__rte
                              "
                >
                  <p>
                    Hope Shopworks is being a reliable partner to you and for any query you can contact us with the given mail or phone no. 
                  </p>
                  <p>Email: shopworks@gmail.com</p>
                  <p>Phone: +91-9624226677</p>
                  <p>
                    Address: 124 Shailganga Society, Near IP school,
                    Chandkheda - Ahmedabad 382424
                  </p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="sec-footer">
          <div class="social-holder">
            <div class="downloadApp">
              <div class="download-text">Download App</div>
              <a href="#">
                <div class="appIconHolder">
                  <div class="icon-image">
                    {" "}
                    <BsPhone />
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="appIconHolder">
                  <div class="icon-image">
                    {" "}
                    <BsWhatsapp />
                  </div>
                </div>
              </a>
            </div>
            <div class="social-icon-holder">
              <a href="#">
                <div class="appIconHolder">
                  <div class="icon-image">
                    {" "}
                    <BsFacebook />
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="appIconHolder">
                  <div class="icon-image">
                    {" "}
                    <BsInstagram />
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="appIconHolder">
                  <div class="icon-image">
                    <BsYoutube />
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="appIconHolder">
                  <div class="icon-image">
                    <BsLinkedin />
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="appIconHolder">
                  <div class="icon-image">
                    {" "}
                    <BsWhatsapp />
                  </div>
                </div>
              </a>
            </div>
            <div class="copy-right-text">
              © 2021 ShopWorks | All rights reserved
            </div>
          </div>
        </div> */}
            {/* <div class="text-sm mb-8 text-gray-500 sm:text-center dark:text-gray-400">© 2021-2022 <a href="#" class="hover:underline">Flowbite™</a>. All Rights Reserved.</div> */}
        {/*  */}

        <div class="sec-footer ">
          <div class="social-holder">
            <div class="downloadApp">
              <div class="download-text">Payment With</div>
              <a href="#">
                <div class="appIconHolder">
                  <div class="icon-image">
                    {" "}
                    <img src="/images/upi.jpg" alt="" />
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="appIconHolder">
                  <div class="icon-image">
                    {" "}
                    <img src="/images/card pay.jpg" alt="" />
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="appIconHolder">
                  <div class="icon-image">
                    {" "}
                    <img src="/images/wallet.jpg" alt="" />
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="appIconHolder">
                  <div class="icon-image">
                    {" "}
                    <img src="/images/net banking.jpg" alt="" />
                  </div>
                </div>
              </a>
            </div>
            <div class="social-icon-holder">
              <a href="#">
                <div class="appIconHolder">
                  <div class="icon-image">
                    {" "}
                    <BsFacebook  />
                  </div>
                </div>
              </a>
              <a href="http://wa.me/919624226677">
                <div class="appIconHolder">
                  <div class="icon-image">
                    {" "}
                    <BsInstagram />
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="appIconHolder">
                  <div class="icon-image">
                    <BsYoutube />
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="appIconHolder">
                  <div class="icon-image">
                    <BsLinkedin />
                  </div>
                </div>
              </a>
              <a href="http://wa.me/919624226677">
                <div class="appIconHolder">
                  <div class="icon-image">
                    {" "}
                    <BsWhatsapp />
                  </div>
                </div>
              </a>
            </div>
            <div class="copy-right-text">
              © 2024 ShopWorks | All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
