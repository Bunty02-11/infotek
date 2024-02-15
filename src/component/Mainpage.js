import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Portfolio from './Portfolio'
import Testimonials from './Testimonials'
import Stories from './Stories'
import Brand from './Brand'

function Mainpage() {
  return (
    <div>
      {/* <div id="dsn_preloader" className="preloader">
        <div className="dsnload p-absolute">
          <span className="dsnload__row">
            <span className="dsnload__img">
              <img src="assets/img/logo-light.png" className="logo-dark" alt="Blackdsn" decoding="async" loading="lazy" />
              <img src="assets/img/logo.png" className="logo-light" alt="Blackdsn" decoding="async" loading="lazy" />
            </span>
          </span>
          <span className="dsnload__row dsnload__row--sibling">
            <span className="dsnload__img">
              <img src="assets/img/logo-light.png" className="logo-dark" alt="Blackdsn" decoding="async" loading="lazy" />
              <img src="assets/img/logo.png" className="logo-light" alt="Blackdsn" decoding="async" loading="lazy" />
            </span>
          </span>
          <span className="dsnload__row dsnload__row--sibling">
            <span className="dsnload__img">
              <img src="assets/img/logo-light.png" className="logo-dark" alt="Blackdsn" decoding="async" loading="lazy" />
              <img src="assets/img/logo.png" className="logo-light" alt="Blackdsn" decoding="async" loading="lazy" />
            </span>
          </span>
          <span className="dsnload__row dsnload__row--sibling">
            <span className="dsnload__img">
              <img src="assets/img/logo-light.png" className="logo-dark" alt="Blackdsn" decoding="async" loading="lazy" />
              <img src="assets/img/logo.png" className="logo-light" alt="Blackdsn" decoding="async" loading="lazy" />
            </span>
          </span>
        </div>
        <svg width="100%" height="100%" viewBox="0 0 100 100" className="v-middle" preserveAspectRatio="xMinYMin meet" fill="none">
          <linearGradient id="linearColors" x1={0} y1={0} x2={1} y2={1}>
            <stop offset="0%" stopColor="var(--theme-color)" />
            <stop offset="50%" stopColor="var(--border-color)" />
            <stop offset="100%" stopColor="var(--assistant-color)" />
          </linearGradient>
          <path className="dsn-progress-path" d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
        <div className="loading-circle v-middle">
          <p className="loading-count v-middle">0</p>
        </div>
        <span className="loading-text text-uppercase mt-30 dsn-container">Loading ...</span>
        <div className="bg-load background-section d-flex align-items-end">
          <svg className="dsn-separator-bottom dsn-icon-assistant-color" width="100%" height="100%" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path className="path-anim separator__path" data-dsn-to="M 0 0 C 40 0 55 0 100 0 L 0 0 Z" vectorEffect="non-scaling-stroke" d="M 0 0 C 40 16 75 10 100 0 L 0 0 Z" />
          </svg>
        </div>
      </div> */}
      <main id="main_root" className="main-root" />
      {/* ========== Menu ========== */}
      <Header />
      {/* ========== End Menu ========== */}
      <div id="dsn-scrollbar">
        {/* ========== Slider Parallax ========== */}

        {/* ========== End Slider Parallax ========== */}
        <div id="page_wrapper" className="wrapper">
          {/* ========== Service Icon Left ========== */}
          <div className="container icon-left pt-30 pb-30">
            <div className="d-grid grid-md-3 grid-sm-2 dsn-service" data-dsn-iconsize="60px">
              <div className="service-item p-relative grid-item">
                <div className="service-item-inner align-items-center number-item h-100">
                  <div className="dsn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 20 20">
                      <path d="M17.5 2h-16c-0.827 0-1.5 0.673-1.5 1.5v10c0 0.827 0.673 1.5 1.5 1.5h7.5v2h-3.5c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h8c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3.5v-2h7.5c0.827 0 1.5-0.673 1.5-1.5v-10c0-0.827-0.673-1.5-1.5-1.5zM18 13.5c0 0.276-0.224 0.5-0.5 0.5h-16c-0.276 0-0.5-0.224-0.5-0.5v-10c0-0.276 0.224-0.5 0.5-0.5h16c0.276 0 0.5 0.224 0.5 0.5v10z" />
                    </svg>
                  </div>
                  <div className="service-content p-relative">
                    <h4 className="service_title  sm-title-block text-upper">How We Work</h4>
                    <div className="service_description mt-10 max-w570 dsn-auto">
                      Lorem ipsum dolor sit amet consectetur adipiscing
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-item p-relative grid-item border-left dsn-icon-theme-color">
                <div className="service-item-inner align-items-center number-item h-100">
                  <div className="dsn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 20 20">
                      <path d="M5.5 15h-4c-0.827 0-1.5-0.673-1.5-1.5v-12c0-0.827 0.673-1.5 1.5-1.5h14c0.827 0 1.5 0.673 1.5 1.5v7c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-7c0-0.276-0.224-0.5-0.5-0.5h-14c-0.276 0-0.5 0.224-0.5 0.5v12c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z" />
                      <path d="M13 20c-0.198 0-0.386-0.119-0.464-0.314l-1.697-4.242-2.963 3.386c-0.137 0.157-0.357 0.212-0.552 0.139s-0.324-0.26-0.324-0.468v-15c0-0.198 0.117-0.377 0.298-0.457s0.392-0.046 0.539 0.087l11 10c0.153 0.139 0.205 0.358 0.13 0.55s-0.26 0.32-0.466 0.32h-4.261l1.726 4.314c0.103 0.256-0.022 0.547-0.279 0.65l-2.5 1c-0.061 0.024-0.124 0.036-0.186 0.036zM11 14c0.028 0 0.056 0.002 0.084 0.007 0.172 0.029 0.315 0.146 0.38 0.307l1.814 4.536 1.572-0.629-1.814-4.536c-0.062-0.154-0.043-0.329 0.050-0.466s0.248-0.22 0.414-0.22h3.707l-9.207-8.37v12.539l2.624-2.999c0.096-0.109 0.233-0.171 0.376-0.171z" />
                    </svg>
                  </div>
                  <div className="service-content p-relative">
                    <h4 className="service_title  sm-title-block text-upper">What We Do</h4>
                    <div className="service_description mt-10 max-w570 dsn-auto">
                      Lorem ipsum dolor sit amet consectetur adipiscing
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-item p-relative border-left grid-item">
                <div className="service-item-inner align-items-center number-item h-100">
                  <div className="dsn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 20 20">
                      <path d="M5 15c-0.128 0-0.256-0.049-0.354-0.146l-4-4c-0.195-0.195-0.195-0.512 0-0.707l4-4c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-3.646 3.646 3.646 3.646c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z" />
                      <path d="M15 15c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l3.646-3.646-3.646-3.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l4 4c0.195 0.195 0.195 0.512 0 0.707l-4 4c-0.098 0.098-0.226 0.146-0.354 0.146z" />
                      <path d="M7.5 15c-0.091 0-0.182-0.025-0.265-0.076-0.234-0.146-0.305-0.455-0.159-0.689l5-8c0.146-0.234 0.455-0.305 0.689-0.159s0.305 0.455 0.159 0.689l-5 8c-0.095 0.152-0.258 0.235-0.424 0.235z" />
                    </svg>
                  </div>
                  <div className="service-content p-relative">
                    <h4 className="service_title  sm-title-block text-upper">Get A Quote</h4>
                    <div className="service_description mt-10 max-w570 dsn-auto">
                      Lorem ipsum dolor sit amet consectetur adipiscing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ========== End Service Icon Left ========== */}
          {/* ========== About Section One ========== */}
          <section className="about-section about-one p-relative section-padding background-section">
            <div className="p-relative container">
              <div className="bg-mask background-main w-70 h-55 v-middle" />
              <div className="d-grid grid-md-2">
                <div className="box-info">
                  <h2 className="title">
                    <span className="letter-stroke d-block" data-dsn-animation="{&quot;from&quot;:{&quot;paddingLeft&quot;:&quot;10%&quot;},&quot;to&quot;:{&quot;paddingLeft&quot;:&quot;20%&quot;},&quot;responsive&quot;:[&quot;tablet&quot;,&quot;desktop&quot;]}">
                      WE ARE
                    </span>
                    <span>BLACK DSN</span>
                    <span className="text-right w-100">AGENCY</span>
                  </h2>
                  <div className="d-grid grid-half-1 align-items-center mt-10">
                    <div className="dsn-def-btn dsn-hover-icon ">
                      <a className="dsn-btn background-main effect-ajax has-icon-left" href="https://dsngrid.com/blackdsn/about-us/" data-dsn-text="About Us" data-dsn="parallax">
                        <span className="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1">
                          <i className="fas fa-angle-right" />
                        </span>
                        <span className="title-btn p-relative  z-index-1 heading-color">ABOUT US</span>
                      </a>
                    </div>
                    <div className="p-large text-right">
                      <p className="max-w350">
                        We build and activate brands through cultural insight, strategic vision, and the
                        power
                        of emotion across every element of its expression.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="box-img">
                  <img decoding="async" className="cover-bg-img" src="assets/img/about-1.jpg" title alt="" />
                </div>
              </div>
              <div className="p-relative box-img-bottom hv-50">
                <img className="cover-bg-img" decoding="async" src="assets/img/about-2.jpg" title alt="" />
              </div>
            </div>
          </section>
          {/* ========== End About Section One ========== */}
          {/* ========== Service ========== */}
          <div className="container section-margin">
            <div className="section-title mb-70 d-grid grid-md-2 ">
              <div className=" d-flex">
                <div className="sub-section-title ">
                  <p className="description d-inline-block p-relative circle-before mb-10">
                    <span>advantages</span>
                  </p>
                  <span className="title-h2 title-block-lg d-block heading-color">
                    <span>Let's Check <b>Our Services</b></span>
                  </span>
                </div>
              </div>
              <div className="dsn-def-btn dsn-icon-heading-color align-self-end justify-self-end">
                <a className="dsn-btn dsn-border border-color-default  background-section effect-ajax effect-ajax  move-circle has-icon-left" href="https://dsngrid.com/blackdsn/service/" data-dsn-text="Service" data-dsn="parallax"> <span className="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1"><i className="fas fa-angle-right" /></span> <span className="title-btn p-relative  z-index-1 heading-color">VIEW ALL SERVICES</span> </a>
              </div>
            </div>
            <div className="list-with-number icon-top dsn-icon-theme-color">
              <div className="dsn-service d-grid grid-lg-3 grid-sm-2 dsn-masonry-grid dsn-masonry-grid-2 dsn-isotope " data-dsn-iconsize="80px">
                <div className="dsn-up service-item p-relative grid-item style-box">
                  <div className="service-item-inner border-style number-item h-100">
                    <div className="dsn-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" xmlSpace="preserve"><g>	<path fillRule="evenodd" clipRule="evenodd" d="M18.072,40.553c0-0.932-0.062-1.868,0.013-2.794  c0.146-1.81-0.475-3.234-1.633-4.647c-1.268-1.547-2.404-3.274-3.239-5.089c-2.214-4.811-1.168-9.314,1.994-13.308  c3.294-4.164,7.795-5.363,12.816-4.145c5.08,1.233,8.364,4.637,9.375,9.721c0.67,3.365,0.388,6.819-2.079,9.689  c-0.868,1.011-1.687,2.122-2.249,3.318c-0.621,1.318-1.179,2.764-1.305,4.193c-0.222,2.52-0.048,5.071-0.133,7.605  c-0.068,2.067-2.064,4.004-4.106,4.059c-1.696,0.045-3.395,0.022-5.093,0.01c-2.438-0.018-4.307-1.811-4.394-4.262  c-0.052-1.448-0.009-2.9-0.009-4.351C18.044,40.553,18.058,40.553,18.072,40.553z M29.94,41.686c0-1.752-0.168-3.318,0.051-4.828  c0.194-1.339,0.652-2.706,1.297-3.897c0.728-1.344,1.849-2.469,2.705-3.752c3.775-5.662,2.175-12.419-3.692-15.824  c-4.225-2.452-9.512-1.524-12.7,1.058c-2.954,2.392-5.222,7.669-3.05,12.026c0.78,1.565,1.752,3.034,2.618,4.558  c0.761,1.339,1.444,2.724,2.27,4.019c0.262,0.412,0.863,0.845,1.318,0.856c1.754,0.044,3.512-0.096,5.27-0.13  c0.693-0.015,1.626-0.207,1.623,0.894c-0.003,1.088-0.926,0.904-1.626,0.908c-2.005,0.013-4.01,0.005-6.139,0.005  c0,2.522-0.13,5.002,0.05,7.458c0.103,1.41,0.977,2.499,2.635,2.528c1.346,0.024,2.692,0.075,4.039,0.059  c2.395-0.029,3.558-1.525,3.075-4.293c-2.051,0-4.161,0.048-6.266-0.036c-0.464-0.018-0.91-0.496-1.364-0.763  c0.47-0.281,0.931-0.785,1.412-0.807C25.527,41.633,27.596,41.686,29.94,41.686z" />	<path fillRule="evenodd" clipRule="evenodd" style={{ dsnColorIcon: 'var(--heading-color)' }} d="M12.989,10.347c-0.546,0.164-1.233,0.569-1.437,0.398  C10.38,9.76,9.294,8.665,8.257,7.536C8.094,7.359,8.201,6.679,8.414,6.484c0.216-0.197,0.87-0.252,1.07-0.074  c1.073,0.952,2.07,1.99,3.078,3.015C12.695,9.56,12.735,9.785,12.989,10.347z" />	<path fillRule="evenodd" clipRule="evenodd" style={{ dsnColorIcon: 'var(--heading-color)' }} d="M37.373,10.994c-0.099-0.492-0.441-1.185-0.246-1.411  c1.004-1.159,2.125-2.219,3.264-3.25c0.158-0.143,0.743-0.042,0.94,0.146c0.202,0.194,0.346,0.792,0.214,0.937  c-1.069,1.167-2.205,2.273-3.336,3.383C38.117,10.89,37.918,10.873,37.373,10.994z" />	<path fillRule="evenodd" clipRule="evenodd" style={{ dsnColorIcon: 'var(--heading-color)' }} d="M25.748,3.132c-0.001,0.618,0.112,1.265-0.041,1.842  c-0.103,0.389-0.58,0.678-0.889,1.013c-0.276-0.315-0.765-0.613-0.792-0.947c-0.096-1.227-0.11-2.473,0.001-3.697  c0.033-0.363,0.578-0.679,0.888-1.017c0.277,0.37,0.69,0.704,0.799,1.119C25.854,1.973,25.749,2.566,25.748,3.132z" />	<path fillRule="evenodd" clipRule="evenodd" style={{ dsnColorIcon: 'var(--heading-color)' }} d="M43.725,23.819c-0.406-0.043-0.854,0.003-1.205-0.158  c-0.268-0.123-0.608-0.546-0.565-0.769c0.06-0.315,0.435-0.796,0.692-0.807c1.327-0.057,2.663-0.028,3.989,0.072  c0.305,0.022,0.58,0.445,0.869,0.684c-0.339,0.265-0.655,0.713-1.021,0.758c-0.905,0.11-1.835,0.036-2.755,0.036  C43.728,23.696,43.726,23.758,43.725,23.819z" />	<path fillRule="evenodd" clipRule="evenodd" style={{ dsnColorIcon: 'var(--heading-color)' }} d="M3.5,24.01c-0.448-0.367-0.896-0.733-1.343-1.101  c0.493-0.293,0.963-0.779,1.482-0.837c0.958-0.106,1.954-0.026,2.915,0.112c0.416,0.061,0.783,0.457,1.172,0.701  c-0.37,0.255-0.72,0.687-1.113,0.731c-0.962,0.107-1.945,0.035-2.92,0.035C3.629,23.771,3.564,23.89,3.5,24.01z" />	<path fillRule="evenodd" clipRule="evenodd" style={{ dsnColorIcon: 'var(--heading-color)' }} d="M25.306,16.083c3.552,0.405,6.106,2.751,6.305,6.291  c0.022,0.39-0.47,0.808-0.723,1.212c-0.27-0.31-0.708-0.583-0.783-0.935c-0.595-2.77-2.146-4.448-5.048-4.813  c-0.33-0.04-0.586-0.662-0.876-1.014C24.64,16.521,25.099,16.218,25.306,16.083z" /></g></svg>
                    </div>
                    <div className="service-content p-relative">
                      <h4 className="service_title  title-block border-bottom pb-20 mb-20">DIGITAL
                        PRODUCTS</h4>
                      <div className="service_description mt-20 max-w570 dsn-auto">
                        <p>
                          Web design encompasses many different skills and disciplines in the
                          production
                          of
                          all
                          web.
                        </p>
                      </div>
                      <div className="d-flex mt-20 dsn-def-btn dsn-hover-icon">
                        <a href="service.html" className="effect-ajax dsn-btn dsn-border border-color-default background-section has-icon-right">
                          <span className="title-btn p-relative  z-index-1 heading-color">LEARN MORE</span>
                          <span className="dsn-icon dsn-bg-before btn-icon-right heading-color z-index-1">
                            <i className="fas fa-angle-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dsn-up service-item p-relative grid-item style-box">
                  <div className="service-item-inner border-style number-item h-100">
                    <div className="dsn-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" xmlSpace="preserve"><g>	<path fillRule="evenodd" clipRule="evenodd" d="M25.515,27.051c-0.371-0.159-0.756-0.298-1.117-0.483  c-6.626-3.398-13.254-6.794-19.865-10.221c-0.416-0.215-1.031-0.76-0.972-1.019c0.102-0.446,0.593-0.919,1.04-1.152  c6.651-3.461,13.312-6.904,20.007-10.279c0.516-0.259,1.414-0.177,1.955,0.099c3.589,1.828,7.11,3.788,10.689,5.634  c3.028,1.562,6.114,3.01,9.149,4.558c0.454,0.232,0.77,0.738,1.149,1.116c-0.358,0.331-0.665,0.76-1.082,0.977  c-6.629,3.457-13.272,6.887-19.914,10.319C26.234,26.765,25.895,26.888,25.515,27.051z M44.76,15.372  c-0.513-0.362-0.775-0.596-1.078-0.752c-5.791-2.994-11.577-5.999-17.402-8.927c-0.479-0.24-1.32-0.129-1.835,0.131  c-5.546,2.792-11.063,5.643-16.583,8.488c-0.508,0.262-0.983,0.59-1.696,1.021c6.433,3.309,12.539,6.471,18.68,9.562  c0.432,0.217,1.206,0.052,1.695-0.189c2.922-1.443,5.806-2.963,8.705-4.454C38.347,18.659,41.449,17.07,44.76,15.372z" />	<path fillRule="evenodd" clipRule="evenodd" style={{ dsnColorIcon: 'var(--heading-color)' }} d="M6.153,25.292c1.245,0.667,2.225,1.209,3.22,1.722  c5.014,2.583,10.02,5.182,15.065,7.701c0.544,0.272,1.446,0.323,1.973,0.059c5.826-2.926,11.61-5.933,17.403-8.924  c0.257-0.133,0.479-0.329,0.912-0.632c-1.152-0.605-2.191-1.057-3.114-1.681c-0.401-0.271-0.563-0.897-0.833-1.363  c0.501-0.038,1.084-0.26,1.489-0.081c1.456,0.645,2.868,1.395,4.266,2.163c1.333,0.732,1.365,1.37,0.078,2.036  c-6.755,3.495-13.519,6.975-20.308,10.403c-0.455,0.229-1.24,0.185-1.71-0.053c-6.743-3.407-13.462-6.859-20.174-10.326  c-1.297-0.67-1.284-1.349,0.015-2.057c1.454-0.792,2.922-1.563,4.431-2.241c0.35-0.157,0.885,0.097,1.334,0.162  c-0.185,0.413-0.256,0.999-0.575,1.206C8.602,24.052,7.487,24.577,6.153,25.292z" />	<path fillRule="evenodd" clipRule="evenodd" d="M44.767,35.25c-1.224-0.643-2.298-1.123-3.27-1.759  c-0.362-0.237-0.485-0.838-0.718-1.272c0.493-0.05,1.072-0.29,1.465-0.115c1.51,0.674,2.977,1.452,4.43,2.247  c1.189,0.651,1.184,1.312-0.063,1.957c-6.71,3.476-13.429,6.936-20.176,10.341c-0.502,0.253-1.354,0.251-1.857-0.002  c-6.748-3.402-13.468-6.859-20.181-10.33c-1.246-0.645-1.257-1.307-0.06-1.968c1.496-0.824,3.012-1.618,4.566-2.322  c0.339-0.154,0.877,0.129,1.323,0.211c-0.203,0.407-0.299,0.974-0.627,1.189c-0.968,0.637-2.028,1.135-3.331,1.838  c0.666,0.42,1.023,0.683,1.412,0.884c5.565,2.872,11.125,5.757,16.72,8.57c0.548,0.275,1.453,0.354,1.977,0.091  c5.83-2.921,11.619-5.925,17.416-8.912C44.055,35.763,44.287,35.572,44.767,35.25z" /></g></svg>
                    </div>
                    <div className="service-content p-relative">
                      <h4 className="service_title  title-block border-bottom pb-20 mb-20">WEB
                        DEVELOPMENT</h4>
                      <div className="service_description mt-20 max-w570 dsn-auto">
                        <p>
                          Web design encompasses many different skills and disciplines in the
                          production
                          of
                          all
                          web.
                        </p>
                      </div>
                      <div className="d-flex mt-20 dsn-def-btn dsn-hover-icon">
                        <a href="service.html" className="effect-ajax dsn-btn dsn-border border-color-default background-section has-icon-right">
                          <span className="title-btn p-relative  z-index-1 heading-color">LEARN MORE</span>
                          <span className="dsn-icon dsn-bg-before btn-icon-right heading-color z-index-1">
                            <i className="fas fa-angle-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dsn-up service-item p-relative grid-item style-box">
                  <div className="service-item-inner border-style number-item h-100">
                    <div className="dsn-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" xmlSpace="preserve"><g>	<path fillRule="evenodd" clipRule="evenodd" d="M20.944,14.012c-4.79,0-9.443,0-14.079,0c-0.452,1.854-1.236,2.1-4.715,1.769  c-1.399-0.134-1.274-1.091-1.086-1.813c0.312-1.194-1.164-3.078,1.064-3.523c3.126-0.625,4.292-0.086,4.752,1.688  c4.629,0,9.276,0,13.868,0c0.118-0.163,0.229-0.245,0.233-0.331c0.09-2.241-0.195-2.33,2.678-2.304  c0.658,0.006,1.317,0.002,1.977,0.001c2.706-0.002,2.706-0.002,3.098,2.574c4.658,0,9.343,0,14.028,0  c0.466-1.725,1.538-2.251,4.723-1.621c2.313,0.458,0.729,2.421,1.086,3.657c0.234,0.809,0.101,1.608-1.242,1.682  c-3.792,0.208-4.104,0.136-4.549-1.773c-4.639,0-9.293,0-13.927,0c-0.084,0.115-0.196,0.196-0.201,0.283  c-0.151,2.852-0.224,2.339-2.926,2.396c-0.933,0.02-1.873-0.059-2.8,0.018c-1.438,0.122-2.06-0.415-1.887-1.776  C21.072,14.691,20.992,14.435,20.944,14.012z M22.922,14.82c1.354,0,2.532,0,3.76,0c0-1.218,0-2.326,0-3.482  c-1.313,0-2.524,0-3.76,0C22.922,12.551,22.922,13.624,22.922,14.82z M2.87,13.928c0.7,0,1.222,0,1.799,0c0-0.619,0-1.152,0-1.81  c-0.681,0.039-1.241,0.071-1.799,0.104C2.87,12.868,2.87,13.322,2.87,13.928z M44.924,14.051c0.724-0.057,1.244-0.097,1.8-0.141  c0-0.62,0-1.11,0-1.667c-0.65,0-1.208,0-1.8,0C44.924,12.848,44.924,13.344,44.924,14.051z" />	<path fillRule="evenodd" clipRule="evenodd" d="M1.02,36.725c0.056-4.04-0.59-3.539,3.75-3.533  c4.271,0.006,3.804-0.574,3.787,3.667c-0.017,4.106,0.509,3.49-3.765,3.521C1.019,40.406,1.019,40.385,1.02,36.725z M6.617,38.565  c0-1.231,0-2.34,0-3.511c-1.272,0-2.45,0-3.699,0c0,1.21,0,2.318,0,3.511C4.168,38.565,5.308,38.565,6.617,38.565z" />	<path fillRule="evenodd" clipRule="evenodd" d="M48.61,36.829c-0.063,4.104,0.604,3.548-3.725,3.545  c-4.384-0.005-3.819,0.6-3.825-3.618c-0.005-4.118-0.47-3.565,3.739-3.564C49.19,33.191,48.553,32.618,48.61,36.829z M42.997,38.54  c1.304,0,2.48,0,3.705,0c0-1.218,0-2.325,0-3.477c-1.287,0-2.464,0-3.705,0C42.997,36.242,42.997,37.313,42.997,38.54z" />	<path fillRule="evenodd" clipRule="evenodd" style={{ dsnColorIcon: 'var(--heading-color)' }} d="M3.907,30.129c0.707-4.828,2.875-8.57,6.166-11.771  c0.722-0.703,1.485-1.393,2.334-1.945c0.389-0.254,1.032-0.162,1.56-0.227c-0.164,0.507-0.158,1.205-0.519,1.491  c-3.182,2.508-5.611,5.502-6.952,9.222c-0.351,0.972-0.454,2.024-0.816,2.99c-0.182,0.484-0.693,0.857-1.055,1.282  C4.338,30.754,4.049,30.335,3.907,30.129z" />	<path fillRule="evenodd" clipRule="evenodd" style={{ dsnColorIcon: 'var(--heading-color)' }} d="M45.727,30.116c-0.137,0.204-0.422,0.629-0.708,1.055  c-0.359-0.42-0.962-0.804-1.04-1.267c-0.854-5.004-3.428-8.997-7.643-12.118c-0.414-0.307-0.467-1.046-0.688-1.585  c0.575,0.087,1.295-0.005,1.704,0.287C42.037,19.831,44.871,24.229,45.727,30.116z" /></g></svg>
                    </div>
                    <div className="service-content p-relative">
                      <h4 className="service_title  title-block border-bottom pb-20 mb-20">UI-UX DESIGN</h4>
                      <div className="service_description mt-20 max-w570 dsn-auto">
                        <p>
                          Web design encompasses many different skills and disciplines in the
                          production
                          of
                          all
                          web.
                        </p>
                      </div>
                      <div className="d-flex mt-20 dsn-def-btn dsn-hover-icon">
                        <a href="service.html" className="effect-ajax dsn-btn dsn-border border-color-default background-section has-icon-right">
                          <span className="title-btn p-relative  z-index-1 heading-color">LEARN MORE</span>
                          <span className="dsn-icon dsn-bg-before btn-icon-right heading-color z-index-1">
                            <i className="fas fa-angle-right" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ========== End Service ========== */}
          {/* ========== About Section One ========== */}
          <div className="container  section-margin">
            <div className="d-grid grid-lg-2 d-grid-no-space">
              <div className="left-box-image mb-section">
                <div className="box-img w-100" data-dsn-animation="{&quot;to&quot;:{&quot;y&quot;:&quot;120px&quot;},&quot;option&quot;:{&quot;scrub&quot;:&quot;0&quot;,&quot;start&quot;:&quot;80%&quot;,&quot;end&quot;:&quot;30%&quot;},&quot;responsive&quot;:[&quot;desktop&quot;]}">
                  <div className="img-box-parallax h-v-80 before-z-index w-100" data-overlay={1}>
                    <img className="cover-bg-img" src="assets/img/about-3.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="box-info background-section p-80 mt-section">
                <div className="section-title d-flex">
                  <div className="sub-section-title">
                    <p className="description d-inline-block p-relative  circle-before  mb-10">
                      <span>TECHNOLOGY</span>
                    </p>
                    <span className="title-h2 dsn-heading-title p-relative title-block-lg d-block    heading-color">
                      <span>How is your <br />visual <b>identity?</b></span>
                    </span>
                  </div>
                </div>
                <p className="mt-20">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                  laborum. Sed ut perspiciatis unde omnis iste natus sit .
                  <span className="d-block mt-10" />
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                </p>
                <ul className="d-grid dsn-list mt-20" data-dsn-gap="10px 15px">
                  <li className="list-item d-flex align-items-center background-main">
                    <span className="dsn-icon mr-15"><i className="fas fa-check" aria-hidden="true" /></span>
                    <p className="dsn-heading-title heading-color ">Beautiful and easy to understand UI</p>
                  </li>
                  <li className="list-item d-flex align-items-center background-main">
                    <span className="dsn-icon mr-15"><i className="fas fa-check" aria-hidden="true" /></span>
                    <p className="dsn-heading-title heading-color ">Theme advantages are pixel perfect
                      design </p>
                  </li>
                  <li className="list-item d-flex align-items-center background-main">
                    <span className="dsn-icon mr-15"><i className="fas fa-check" aria-hidden="true" /></span>
                    <p className="dsn-heading-title heading-color ">Present your services with flexible</p>
                  </li>
                </ul>
                <div className="dsn-def-btn dsn-icon-heading-color mt-20 d-flex">
                  <a className="dsn-btn dsn-border border-color-default background-main effect-ajax has-icon-left" href="project-6.html" data-dsn-text="HEADPHONES">
                    <span className="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1">
                      <i className="fas fa-angle-right" />
                    </span>
                    <span className="title-btn p-relative  z-index-1 ">LEARN MORE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ========== End About Section One ========== */}
          {/* ========== Portfolio ========== */}
          <Portfolio/>
          {/* ========== End Portfolio ========== */}
          {/* ========== background Box Image ========== */}
          <div className="p-relative section-padding v-dark-head">
            <div className="container">
              <h3 className="title-h2">
                Need help with professional <br />photography? <b>Let's work together!</b>
              </h3>
              <p className="mt-30 max-w570">
                In my work, I try to find the right balance between form and function. From technical drawings,
                all
                the way to the photographic renders, and the actual representations of my work as a designer, my
                philosophy is that of simplicity.
                <span className="mb-10 d-block" />
                At the same time, my style is distinctly mine – uncluttered, with clean shapes and modern
                space-saving solutions.
              </p>
              <div className="dsn-def-btn d-flex dsn-border-style dsn-icon-heading-color mt-30">
                <a className="dsn-btn dsn-border border-color-default background-section  move-circle has-icon-left" href="contact.html" data-dsn-text="Contact Us" data-dsn="parallax">
                  <span className="dsn-icon dsn-bg-before btn-icon-left heading-color z-index-1">
                    <i className="far fa-envelope-open" />
                  </span>
                  <span className="title-btn p-relative  z-index-1 ">CONTACT US</span>
                </a>
              </div>
            </div>
            <div className="dsn-bg-section p-absolute w-100 h-100 over-hidden top-0 left-0" style={{ zIndex: -1 }}>
              <div className="h-100 img-box-parallax before-z-index " data-dsn-grid="move-up" data-overlay={4}>
                <img src="assets/img/about-4.jpg" className="cover-bg-img has-direction" alt="" />
              </div>
            </div>
          </div>
          {/* ========== End background Box Image ========== */}
          {/* ========== testimonials ========== */}
          <Testimonials/>
          {/* ========== End testimonials ========== */}
          {/* ========== Stories ========== */}
          <Stories/>
          {/* ========== End Stories ========== */}
          {/* ========== Brand ========== */}
          <Brand/>
          {/* ========== End Brand ========== */}
          {/* ========== Footer ========== */}
          <Footer />
          {/* ========== End Footer ========== */}

          {/* ========== Cursor ========== */}
          <div id="dsn_cursor" className="ball" />
          <div id="dsn_cursor_inner" className="ball" />
          {/* ========== End Cursor ========== */}
          {/* ==========  Social ========== */}
          <div className="social-side d-flex align-items-center flex-column justify-content-center">
            <ul className="socials d-flex flex-column-reverse">
              <li style={{ dsnIndexAnimate: 0 }}>
                <a href="#0" target="_blank" rel="nofollow">
                  <i className="fab fa-facebook-f" aria-hidden="true" /> <span>Fb</span>
                </a>
              </li>
              <li style={{ dsnIndexAnimate: 1 }}>
                <a href="#0" target="_blank" rel="nofollow">
                  <i className="fab fa-instagram" aria-hidden="true" /><span>Instagram</span>
                </a>
              </li>
              <li style={{ dsnIndexAnimate: 2 }}>
                <a href="#0" target="_blank" rel="nofollow">
                  <i className="fab fa-twitter" aria-hidden="true" /><span>Tw</span>
                </a>
              </li>
              <li style={{ dsnIndexAnimate: 3 }}>
                <a href="#0" target="_blank" rel="nofollow">
                  <i className="fab fa-linkedin-in" aria-hidden="true" /><span>Linkedin</span>
                </a>
              </li>
            </ul>
            <div className="icon">FOLLOW US</div>
          </div>
          {/* ========== End Social ========== */}
          {/* ========== Style Option Page ========== */}
          <div id="dsn_box_options" className="day-night">
            <div className="night active" data-dsn-theme="dark">
              <svg width={48} height={48} viewBox="0 0 48 48">
                <rect x="12.3" y="23.5" width="2.6" height={1} />
                <rect x="16.1" y="15.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -6.8871 16.5732)" width={1} height="2.6" />
                <rect x="23.5" y="12.3" width={1} height="2.6" />
                <rect x="30.1" y="16.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -2.5145 27.0538)" width="2.6" height={1} />
                <rect x="33.1" y="23.5" width="2.6" height={1} />
                <rect x="30.9" y="30.1" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -12.9952 31.4264)" width={1} height="2.6" />
                <rect x="23.5" y="33.1" width={1} height="2.6" />
                <rect x="15.3" y="30.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -17.3677 20.9457)" width="2.6" height={1} />
                <path d="M24,18.7c-2.9,0-5.3,2.4-5.3,5.3s2.4,5.3,5.3,5.3s5.3-2.4,5.3-5.3S26.9,18.7,24,18.7z M24,28.3c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3s4.3,1.9,4.3,4.3S26.4,28.3,24,28.3z">
                </path>
              </svg>
            </div>
            <div className="moon" data-dsn-theme="night">
              <svg width={48} height={48} viewBox="0 0 48 48">
                <path d="M24,33.9c-5.4,0-9.9-4.4-9.9-9.9c0-4.3,2.7-8,6.8-9.4l0.8-0.3l-0.1,0.9c-0.2,0.6-0.2,1.3-0.2,1.9c0,5.2,4.3,9.5,9.5,9.5c0.6,0,1.3-0.1,1.9-0.2l0.8-0.2L33.3,27C32,31.1,28.3,33.9,24,33.9z M20.4,15.9c-3.2,1.4-5.3,4.5-5.3,8.1c0,4.9,4,8.9,8.9,8.9c3.6,0,6.7-2.1,8.1-5.3c-0.4,0-0.8,0.1-1.3,0.1c-5.8,0-10.5-4.7-10.5-10.5C20.4,16.7,20.4,16.3,20.4,15.9z">
                </path>
              </svg>
            </div>
          </div>
          {/* ========== End Style Option Page ========== */}
          {/* ========== Line BG ========== */}
          <div id="line_head"><span className="container" /></div>
        </div>
      </div>
    </div>

  )
}

export default Mainpage
