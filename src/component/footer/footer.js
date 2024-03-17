import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div className={style.footerContainer}>
        <div className={style.footerContactSec}>
          <div className={style.subscribeSec}>
            <h1>Be the first to know</h1>
            <p>Sign up for updates from mettā muse.</p>
            <div className={style.emailSubscribe}>
              <input placeholder="Enter your e-mail..." />
              <button>SUCSCRIBE</button>
            </div>
          </div>
          <div className={style.contactSec}>
            <h1>CONTACT US</h1>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
            <h1 className={style.currency}>Currency</h1>
            <Image
              src="/assets/footer/currency.png"
              width={72}
              height={24}
              alt="Currency Logo"
            />
            <div className={style.transDescription}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </div>
          </div>
        </div>
        <div className={style.footerLinkSection}>
          <div className={style.metaMuseLink}>
            <h1>mettā muse</h1>
            <p>About Us</p>
            <p>Stories</p>
            <p>Artisans</p>
            <p>Boutiques</p>
            <p>Contact Us</p>
            <p>EU Compliances Docs</p>
          </div>
          <div className={style.quickLink}>
            <h1>Quick Links</h1>
            <p>Orders & Shipping</p>
            <p>Join/Login as a Seller</p>
            <p>Payment & Pricing</p>
            <p>Return & Refunds</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className={style.followAndPay}>
            <div className={style.followSection}>
              <h1>Follow Us</h1>
              <div className={style.socialLogo}>
                <Image
                  src="/assets/footer/instagram.png"
                  width={32}
                  height={32}
                  alt="Instagram Logo"
                />
                <Image
                  src="/assets/footer/linkedin.png"
                  width={32}
                  height={32}
                  alt="LinkedIn Logo"
                />
              </div>
            </div>
            <div className={style.paySection}>
              <h1>mettā muse Accepts</h1>
              <div className={style.paymentLogo}>
              <Image
                  src="/assets/footer/gpay.png"
                  width={56}
                  height={35}
                  alt="Google pay Logo"
                />
                <Image
                  src="/assets/footer/master-card.png"
                  width={56}
                  height={35}
                  alt="Master Card Logo"
                />
                <Image
                  src="/assets/footer/paypal.png"
                  width={56}
                  height={35}
                  alt="Paypal Logo"
                />
                <Image
                  src="/assets/footer/amex.png"
                  width={56}
                  height={35}
                  alt="Amex Logo"
                />
                <Image
                  src="/assets/footer/apple-pay.png"
                  width={56}
                  height={35}
                  alt="Apple pay Logo"
                />
                <Image
                  src="/assets/footer/opay.png"
                  width={56}
                  height={35}
                  alt="Opay Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
