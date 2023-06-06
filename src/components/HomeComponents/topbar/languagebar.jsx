import { Link } from "react-router-dom";
import logo from '../../../assets/img/logoSmall.png'

const LanguageBar = () => {

  
  return (
    <header className="main-header header-1">
      <div className="top-bar-wrapper bar-wrapper">
        <div className="container">
          <div className="top-bar-inner">
            <div className="row">
              <div className="top-bar-left bar-left col-md-8">
                <aside
                  id="text-9"
                  className="submit-property-language widget widget_text"
                >
                  {" "}
                  <div className="textwidget">
                    {" "}
                    <aside
                      data-wg-notranslate=""
                      className="country-selector weglot-inline weglot-shortcode"
                      tabIndex="0"
                      aria-expanded="false"
                      role="listbox"
                      aria-activedescendant="weglot-language-en"
                      aria-label="Language selected: English"
                    >
                      <input
                        id="wg1685887573647c9a5568b53424"
                        className="weglot_choice"
                        type="checkbox"
                        name="menu"
                      />
                      <label
                        data-l="en"
                        tabIndex="-1"
                        id="weglot-language-en"
                        role="none"
                        htmlFor="wg1685887573647c9a5568b53424"
                        className="wgcurrent wg-li weglot-lang weglot-language weglot-flags flag-3 en"
                        data-code-language="en"
                        data-name-language="EN"
                      >
                        <span className="wglanguage-name">EN</span>
                      </label>
                      <ul role="none">
                        <li
                          data-l="ru"
                          className="wg-li weglot-lang weglot-language weglot-flags flag-3 ru"
                          data-code-language="ru"
                          role="none"
                        >
                          <Link
                            title="Language switcher : Russian"
                            id="weglot-language-ru"
                            role="option"
                            data-wg-notranslate=""
                            href="#"
                          >
                            RU
                          </Link>
                        </li>
                        <li
                          data-l="fa"
                          className="wg-li weglot-lang weglot-language weglot-flags flag-3 fa"
                          data-code-language="fa"
                          role="none"
                        >
                          <Link
                            title="Language switcher : Persian"
                            id="weglot-language-fa"
                            role="option"
                            data-wg-notranslate=""
                            href="#"
                          >
                            FA
                          </Link>
                        </li>
                        <li
                          data-l="tr"
                          className="wg-li weglot-lang weglot-language weglot-flags flag-3 tr"
                          data-code-language="tr"
                          role="none"
                        >
                          <Link
                            title="Language switcher : Turkish"
                            id="weglot-language-tr"
                            role="option"
                            data-wg-notranslate=""
                            href="#"
                          >
                            TR
                          </Link>
                        </li>
                        <li
                          data-l="ar"
                          className="wg-li weglot-lang weglot-language weglot-flags flag-3 ar"
                          data-code-language="ar"
                          role="none"
                        >
                          <Link
                            title="Language switcher : Arabic"
                            id="weglot-language-ar"
                            role="option"
                            data-wg-notranslate=""
                            href="#"
                          >
                            AR
                          </Link>
                        </li>
                      </ul>
                    </aside>
                  </div>
                </aside>{" "}
              </div>
              <div className="top-bar-right bar-right col-md-4">
                <aside
                  id="g5plus_social_profile-3"
                  className="widget widget-social-profile"
                >
                  {" "}
                  <div className="social-profiles default light icon-small">
                    <Link
                      target="_blank"
                      title="Facebook"
                      href="https://www.facebook.com/realsyrys"
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>
                    <Link target="_blank" title="Twitter" href="#">
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link target="_blank" title="Google+" href="#">
                      <i className="fa fa-google-plus"></i>
                    </Link>
                    <div className="clearfix"></div>
                  </div>
                </aside>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="sticky-wrapper">
        <div className="sticky-area-wrap">
          <div className="header-wrapper clearfix float-header sticky-region">
            <div className="container">
              <div className="header-above-inner container-inner clearfix">
                <div className="logo-header">
                  <Link
                    className="no-sticky"
                    href="/"
                    title="Property Investment-PropertyInvestment"
                  >
                    <img
                      src={logo}
                      alt="Property Investment-PropertyInvestment"
                    />
                  </Link>
                </div>{" "}
                <nav className="primary-menu">
                  <ul
                    id="main-menu"
                    className="main-menu x-nav-menu x-nav-menu_primary-menu x-animate-sign-flip"
                  >
                    <li
                      id="menu-item-6235"
                      className="menu-item !ml-5 menu-item-type-custom menu-item-object-custom x-menu-item x-item-menu-standard"
                    >
                      <Link
                        href="/property-status/for-sale/"
                        className="x-menu-a-text"
                      >
                        <span className="x-menu-text">Sales</span>
                      </Link>
                    </li>
                    <li
                      id="menu-item-6234"
                      className="menu-item !ml-5 menu-item-type-custom menu-item-object-custom x-menu-item x-item-menu-standard"
                    >
                      <Link
                        href="/property-status/for-rent/"
                        className="x-menu-a-text"
                      >
                        <span className="x-menu-text">Rents</span>
                      </Link>
                    </li>
                    <li
                      id="menu-item-9502"
                      className="menu-item menu-item-type-post_type menu-item-object-page x-menu-item !ml-5 x-item-menu-standard"
                    >
                      <Link href="/investment/" className="x-menu-a-text">
                        <span className="x-menu-text">Investment</span>
                      </Link>
                    </li>
                    <li
                      id="menu-item-8502"
                      className="menu-item menu-item-type-post_type menu-item-object-page !ml-5 x-menu-item x-item-menu-standard"
                    >
                      <Link
                        href="/useful-information/"
                        className="x-menu-a-text"
                      >
                        <span className="x-menu-text">Useful Information</span>
                      </Link>
                    </li>
                    <li
                      id="menu-item-6304"
                      className="menu-item !ml-5 menu-item-type-post_type menu-item-object-page x-menu-item x-item-menu-standard"
                    >
                      <Link href="/about-us/" className="x-menu-a-text">
                        <span className="x-menu-text">About Us</span>
                      </Link>
                    </li>
                  </ul>{" "}
                  <div className="header-customize-wrapper header-customize-nav">
                    <div className="header-customize-item item-custom-text">
                      <p className="contact-phone">
                        <i className="fa fa-phone"></i>+90 533 883 55 38
                      </p>
                    </div>{" "}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LanguageBar;
