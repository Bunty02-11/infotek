import React from 'react'

function Footer() {
  return (
    <div>
      <footer id="dsn_footer" className="dsn-footer p-relative footer-animate svg-animate background-main">
          <svg className="dsn-separator dsn-separator-up  dsn-icon-assistant-color" width="100%" height="100%" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path className="path-anim separator__path" data-dsn-to="M 0 0 C 40 0 55 0 100 0 L 0 0 Z" vectorEffect="non-scaling-stroke" d="M 0 0 C 40 16 75 10 100 0 L 0 0 Z" />
          </svg>
          <div className="footer-content p-relative mt-section">
            <div className="text-center container">
              <h2 className="title-h2 ">
                LET'S BUILD SOMETHING
                <span className="d-block"><b><i>AMAZING </i></b>TOGETHER</span>
              </h2>
              <div className="dsn-icon-heading-color dsn-def-btn d-flex justify-content-center mt-30">
                <a className="dsn-btn dsn-border border-color-default  background-section  effect-ajax has-icon-left" href="contact.html" data-dsn-text="START A PROJECT">
                  <span className="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1">
                    <i className="fas fa-angle-right" aria-hidden="true" />
                  </span>
                  <span className="title-btn p-relative  z-index-1 ">START A PROJECT</span>
                </a>
              </div>
            </div>
            <div className="dsn-container pt-60">
              <div className="d-grid grid-lg-4 grid-md-2 ">
                <div className="grid-col-1">
                  <div className="dsn-logo main-logo">
                    <div className="main-logo">
                      <a href="https://dsngrid.com/blackdsn/" data-dsn-text="Blackdsn" className="custom-logo-link main-brand effect-ajax" rel="home">
                        <img className="custom-logo logo-light" src="assets/img/logo-light.png" alt="Blackdsn" />
                        <img className="custom-logo logo-dark" src="assets/img/logo.png" alt="Blackdsn" />
                      </a>
                    </div>
                  </div>
                  <ul className="dsn-socials box-social mt-20 dsn-icon-heading-color">
                    <li><a href="#0" target="_blank" rel="nofollow" className="init-color move-circle border-color-default" data-dsn="parallax"><span className="dsn-icon"><i className="fab fa-facebook-f" /></span><span>FB</span></a>
                    </li>
                    <li><a href="#0" target="_blank" rel="nofollow" className="init-color move-circle border-color-default" data-dsn="parallax"><span className="dsn-icon"><i className="fab fa-twitter" /></span><span>TW</span></a>
                    </li>
                    <li><a href="#0" target="_blank" rel="nofollow" className="init-color move-circle border-color-default" data-dsn="parallax"><span className="dsn-icon"><i className="fab fa-linkedin-in" /></span><span>LN</span></a></li>
                    <li><a href="#0" target="_blank" rel="nofollow" className="init-color move-circle border-color-default" data-dsn="parallax"><span className="dsn-icon"><i className="fab fa-instagram" /></span><span>IN</span></a>
                    </li>
                  </ul>
                </div>
                <div className="grid-col-2">
                  <h4 className="subtitle p-relative line-shape  line-shape-after "><span className="background-revere ">NAVIGATION</span>
                  </h4>
                  <div className="menu-footer-menu-container">
                    <ul id="menu-footer-menu" className="menu">
                      <li className="menu-item">
                        <a href="home.html" className="effect-ajax">HOME</a>
                      </li>
                      <li className="menu-item">
                        <a href="work-classic-2.html" className="effect-ajax">PORTFOLIO</a>
                      </li>
                      <li className="menu-item">
                        <a href="stories.html" className="effect-ajax">NEWS</a>
                      </li>
                      <li className="menu-item">
                        <a href="about-us.html" className="effect-ajax">ABOUT</a>
                      </li>
                      <li className="menu-item">
                        <a href="contact.html" className="effect-ajax">CONTACT</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid-col-3">
                  <h4 className="subtitle p-relative line-shape  line-shape-after "><span className="background-revere ">CONTACT</span>
                  </h4>
                  <div className="col-contact">
                    <p><strong>T</strong> : +001 225 3351</p>
                    <p className="mt-10"><strong>F</strong> :+001 225 3351</p>
                    <p className="over-hidden mt-10">
                      <strong>E</strong> : <a className="link-hover" href="/" data-hover-text="info@dsngrid.com">info@dsngrid.com</a>
                    </p>
                  </div>
                </div>
                <div className="grid-col-4">
                  <h4 className="subtitle p-relative line-shape  line-shape-after "><span className="background-revere ">ADDRESS</span>
                  </h4>
                  <div className="col-address">
                    <p>
                      El-Mahalla El-Kubra 37<br /> 1776 Damietta<br />Egypt
                    </p>
                  </div>
                </div>
              </div>
              <div className="footer-bottom mt-60 pt-30 border-top pb-30 text-center">
                <p className="over-hidden">
                  © 2022 Digital Agency Designed by
                  <a href="#0" className="link-hover" data-hover-text="DSN Grid" target="_blank">DSN Grid</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
