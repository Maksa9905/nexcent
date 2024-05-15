import "./Footer.css"

import social_icon1 from "./FooterAssets/social-Icons1.svg"
import social_icon2 from "./FooterAssets/social-Icons2.svg"
import social_icon3 from "./FooterAssets/social-Icons3.svg"
import social_icon4 from "./FooterAssets/social-Icons4.svg"

import footer__logo from "./FooterAssets/footer-logo.svg"


export default function Footer() {
    return (
    <footer className='footer'>
        <div className='footer__inner container'>
          <div className='footer-social'>
            <img src={footer__logo} alt="Nexcent logotype" className="footer-logo" />
            <div className='footer-social-copyright'>
              <p className='body3 regular'>Copyright © 2020 Nexcent ltd.</p>
              <p className='body3 regular'>All rights reserved</p>
            </div>
            <div className='footer-social-icons'>
              <img src={social_icon1} alt="" />
              <img src={social_icon2} alt="" />
              <img src={social_icon3} alt="" />
              <img src={social_icon4} alt="" />
            </div>
          </div>
          <div style={{display: "inline-flex", gap: "30px"}}>
            <div className='footer-company footer-nav'>
              <h4>Company</h4>
              <p className="body3 regular">About us</p>
              <p className="body3 regular">Blog</p>
              <p className="body3 regular">Contact us</p>
              <p className="body3 regular">Pricing</p>
              <p className="body3 regular">Testimonials</p>
            </div>
            <div className='footer-company footer-nav'>
              <h4>Support</h4>
              <p className="body3 regular">Help center</p>
              <p className="body3 regular">Terms of service</p>
              <p className="body3 regular">Legal</p>
              <p className="body3 regular">Privacy policy</p>
              <p className="body3 regular">Status</p>
            </div>
          </div>
          <div className='footer-email-form'>
            <form action="send-email">
              <h4>Stay up to date</h4>
              <input placeholder='Your email address' id='email-input' type="text" className='email-input' />
              <button className='email-send-button' onClick={() => {
                console.log(123)
              }}>
              </button>
            </form>
          </div>
        </div>
    </footer>
    )
}