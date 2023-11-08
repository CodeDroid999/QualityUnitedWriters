import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div>
      <footer className="footer-container-fluid bg-white">
        <div className="row no-margin-lr footer-bottom-between-space txt-blackish-i">
          <div className="col-md-12 no-padding-lr text-center foot-nav">
            <span className="foot-nav-space"><a href="/page/view/how_it_works/">How it works</a></span>
            <span className="foot-nav-space"><a href="/page/view/help/">Help</a></span>
            <span className="foot-nav-space"><a href="/page/view/privacy/">Privacy</a></span>
            <span className="foot-nav-space"><a href="/page/view/about/">About</a></span>
            <span className="foot-nav-space"><a href="/page/view/terms/">Terms</a></span>
            <span className="foot-nav-space"><a href="/page/view/refer_a_friend_terms_conditions/">Refer a Friend</a></span>
            <span className="foot-nav-space"><a href="https://www.homeworkforyou.com/blog/">Blog</a></span>
            <span className="foot-nav-space"><a href="/contact/">Contact Us</a></span>
          </div>
        </div>
        <div className="row no-margin-lr footer-bottom-between-space">
          <div className="col-md-12 no-padding-lr text-center foot-nav">
            <div className="div-blocks no-margin">
              <span className="glyphicon glyphicon-edit txt-blackish-i no-margin font-40"></span>
            </div>
            <div className="div-blocks no-margin txt-blackish-i">
              <span>© 2020 HomeworkForYou Limited</span>
            </div>
          </div>
        </div>
        <div className="row no-margin-lr">
          <div className="col-md-12 no-padding-lr txt-blackish-i">
            <div className="pull-left">
              <div className="ft-div-width-social">
                <p className="text-center no-margin">Join us on</p>
                <a href="https://www.facebook.com/homeworkforyou/" target="_blank" title="HomeworkForYou Facebook">
                  <img className="social-follow-image" src="/static/images/facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/homeworkforyou_com/" target="_blank" title="HomeworkForYou Instagram">
                  <img className="social-follow-image margin-left-5" src="/static/images/instagram.png" alt="Instagram" />
                </a>
                <a href="https://twitter.com/HomeworkForYou/" target="_blank" title="HomeworkForYou Twitter">
                  <img className="social-follow-image margin-left-5" src="/static/images/twitter.png" alt="Twitter" />
                </a>
                <a href="https://www.pinterest.com/homeworkforyou/" target="_blank" title="HomeworkForYou Pinterest">
                  <img className="social-follow-image margin-left-5" src="/static/images/pinterest.png" alt="Pinterest" />
                </a>
              </div>
            </div>
            <div className="div-width-we-accept pull-right">
              <p className="text-center no-margin">We accept</p>
              <img className="ft-pay-image" src="/static/images/paypal.png" alt="PayPal" />
              <img className="ft-pay-image margin-left-5" src="/static/images/visa.png" alt="Visa" />
              <img className="ft-pay-image margin-left-5" src="/static/images/mastercard.png" alt="MasterCard" />
              <img className="ft-pay-image margin-left-5" src="/static/images/american-express.png" alt="American Express" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}