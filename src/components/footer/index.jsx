import { Link } from "react-router-dom";
import Newsletter from "./newsletter";
import logo from "../../assets/img/SYRYS-S-ICON-1.png";
import { useEffect } from "react";
import HeaderComponent from "./headerComponent";

const Footer = () => {
    

  return (
    <>
      <footer className="main-footer-wrapper footer-bg-2-colors">
        <div id="wrapper-footer">
          <Newsletter />

          <div className="main-footer">
            <div className="container">
              <div className="footer-inner">
                <div className="row">
                  <div className="sidebar col-lg-4 col-md-12">
                    <aside id="g5plus_logo-2" className="widget widget-logo">
                      {" "}
                      <Link to="/">
                        <img className="widget-logo" src={logo} alt="Beyot" />
                      </Link>
                    </aside>
                    <aside id="text-3" className="widget widget_text">
                      {" "}
                      <div className="textwidget"></div>
                    </aside>
                    <aside
                      id="g5plus_social_profile-4"
                      className="widget widget-social-profile"
                    >
                      {" "}
                      <div className="social-profiles circle light icon-small">
                        <Link target="_blank" title="Twitter" to="#">
                          <i className="fa fa-twitter"></i>
                        </Link>
                        <Link
                          target="_blank"
                          title="Instagram"
                          to="https://www.instagram.com/accounts/login/?next=/real_syrys/"
                        >
                          <i className="fa fa-instagram"></i>
                        </Link>
                        <Link
                          target="_blank"
                          title="Facebook"
                          to="https://www.facebook.com/realsyrys"
                        >
                          <i className="fa fa-facebook"></i>
                        </Link>
                        <div className="clearfix"></div>
                      </div>
                    </aside>{" "}
                  </div>
                  <div className="sidebar col-lg-4 col-md-12">
                    <aside id="text-4" className="widget widget_text">
                      <h4 className="widget-title">
                        <span>Get in touch</span>
                      </h4>{" "}
                      <div className="textwidget">
                        <ul className="footer-get-in-touch">
                          <li>
                            <span className="text-color-accent fa fa-map-marker"></span>
                            <span>Shark Hotel inonu cd, girne 9930</span>
                          </li>
                          <li>
                            <span className="text-color-accent fa fa-phone"></span>
                            <span>+90 533 883 55 38</span>
                          </li>
                          <li>
                            <span className="text-color-accent fa fa-envelope"></span>
                            <span>info@qsyrys.com</span>
                          </li>
                          <li>
                            <span className="text-color-accent fa fa-headphones"></span>
                            <span>www.qsyrys.com</span>
                          </li>
                          <li>
                            <span className="text-color-accent fa fa-skype"></span>
                            <span>QSYRYS_realstate</span>
                          </li>
                        </ul>
                      </div>
                    </aside>{" "}
                  </div>
                  <div className="sidebar col-lg-4 col-md-12">
                    <aside id="block-9" className="widget widget_block">
                      <div className="is-layout-flex wp-container-2 wp-block-columns">
                        <div
                          className="is-layout-flow wp-block-column"
                          style={{ flexBasis: "100%" }}
                        >
                          <div className="wp-widget-group__inner-blocks">
                            <blockquote className="wp-block-quote">
                              <p>
                                <strong>"SYRYS </strong>is built on Suitability,
                                Reliability, Sustainability and consistency for
                                every type of investor or customer. We your
                                opportunity to invest and earn from properties
                                with high ROI and low taxes.{" "}
                                <strong>Our Services</strong> include but not
                                limited to; Property Management, Daily/Short
                                term and long term rentals, Sale, Buy, Holiday
                                home, pre and post sales assistance and
                                investment advice."
                              </p>
                            </blockquote>
                          </div>
                        </div>
                      </div>
                    </aside>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-bar-wrapper bar-wrapper">
            <div className="container">
              <div className="bottom-bar-inner">
                <div className="row">
                  <div className="bottom-bar-left bar-left col-lg-6">
                    <aside
                      id="text-5"
                      className="fw-medium fs-12 pd-top-10 widget widget_text"
                    >
                      {" "}
                      <div className="textwidget">
                        © 2023 - QSYRYS REAL ESTATES
                      </div>
                    </aside>{" "}
                  </div>
                  <div className="bottom-bar-right bar-right col-lg-6">
                    <aside
                      id="nav_menu-2"
                      className="horizontal-menu widget widget_nav_menu"
                    >
                      <div className="menu-menu-footer-container">
                        <ul id="menu-menu-footer" className="menu">
                          <li
                            id="menu-item-6267"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-58 current_page_item menu-item-6267"
                          >
                            <Link to="/" aria-current="page">
                              Home
                            </Link>
                          </li>
                          <li
                            id="menu-item-6207"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6207"
                          >
                            <Link to="/property">Properties</Link>
                          </li>
                          <li
                            id="menu-item-6208"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6208"
                          >
                            <Link to="/agent">Agents</Link>
                          </li>
                          <li
                            id="menu-item-6209"
                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-6209"
                          >
                            <Link to="#">Terms of use</Link>
                          </li>
                        </ul>
                      </div>
                    </aside>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <HeaderComponent />
    </>
  );
};

export default Footer;
