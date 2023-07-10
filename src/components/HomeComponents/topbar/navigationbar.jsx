import { Link } from "react-router-dom";
import logo from "../../../assets/img/logoSmall.png";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect } from "react";

const NavigationBar = () => {
  
  useEffect(() => {
      document.querySelector('a.search-standard').addEventListener('click', (e) => {
          e.preventDefault();

          const elem = document
            .querySelector("#search_popup_wrapper");

          if (elem) elem.classList.add("dialog--open");

      })

      document
        .querySelector(".login-link.topbar-link")
        .addEventListener("click", (e) => {

          e.preventDefault();

          const elem = document.querySelector(".modal.modal-login");

          if (elem) elem.classList.add("show");
        });


        document.querySelector(".toggle-icon-wrapper.toggle-mobile-menu").addEventListener('click', (e) => {
          document
            .querySelector(".toggle-icon-wrapper.toggle-mobile-menu")
            .classList.add("in");
          document.body.classList.add("mobile-nav-in");
        });

        if (document.querySelector(".mobile-nav-overlay"))
          document
            .querySelector(".mobile-nav-overlay")
            .addEventListener("click", () => {
              document
                .querySelector(".toggle-icon-wrapper.toggle-mobile-menu")
                .classList.remove("in");
              document.body.classList.remove("mobile-nav-in");
            });

        window.addEventListener("scroll", () => {

          const elem = document.querySelector(".sticky-region");

          if (window.scrollY > 47) {

            if (elem) elem.style.position = "fixed";

            if (elem) elem.style.top = "0px";

          } else {
              
              if (elem) elem.style.position = "absolute";
              if (elem) elem.style.top = null;
          }

        });

  }, [])

  return (
    <header className="header-mobile header-mobile-1">
      <div className="top-bar-wrapper bar-wrapper top-bar-4">
        <div className="container">
          <div className="top-bar-inner">
            <div className="row">
              <div className="bar-left col-xs-12">
                <aside
                  id="text-9"
                  className="submit-property-language widget widget_text"
                >
                  {" "}
                  <div className="textwidget">
                    {" "}
                    <aside
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
                          <a
                            title="Language switcher : Russian"
                            id="weglot-language-ru"
                            role="option"
                            data-wg-notranslate=""
                            href="#"
                          >
                            RU
                          </a>
                        </li>
                        <li
                          data-l="fa"
                          className="wg-li weglot-lang weglot-language weglot-flags flag-3 fa"
                          data-code-language="fa"
                          role="none"
                        >
                          <a
                            title="Language switcher : Persian"
                            id="weglot-language-fa"
                            role="option"
                            data-wg-notranslate=""
                            href="#"
                          >
                            FA
                          </a>
                        </li>
                        <li
                          data-l="tr"
                          className="wg-li weglot-lang weglot-language weglot-flags flag-3 tr"
                          data-code-language="tr"
                          role="none"
                        >
                          <a
                            title="Language switcher : Turkish"
                            id="weglot-language-tr"
                            role="option"
                            data-wg-notranslate=""
                            href="#"
                          >
                            TR
                          </a>
                        </li>
                        <li
                          data-l="ar"
                          className="wg-li weglot-lang weglot-language weglot-flags flag-3 ar"
                          data-code-language="ar"
                          role="none"
                        >
                          <a
                            title="Language switcher : Arabic"
                            id="weglot-language-ar"
                            role="option"
                            data-wg-notranslate=""
                            href="#"
                          >
                            AR
                          </a>
                        </li>
                      </ul>
                    </aside>
                  </div>
                </aside>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="header-mobile-wrapper sticky-wrapper">
        <div className="header-mobile-inner sticky-region">
          <div className="container header-mobile-container">
            <div className="header-mobile-container-inner clearfix">
              <div className="logo-mobile-wrapper">
                <a href="/" className="block relative top-[8px] m-auto w-fit " title="Property Investment-PropertyInvestment">
                  <img
                    src={logo}
                    alt="Property Investment-PropertyInvestment"
                  />
                </a>
              </div>{" "}
              <div
                className="toggle-icon-wrapper toggle-mobile-menu"
                data-drop-type="menu-drop-fly"
              >
                <div className="toggle-icon">
                  <span></span>
                </div>
              </div>
              <div className="mobile-login">
                <div className="widget ere_widget ere_widget_login_menu">
                  {" "}
                  <Link
                    href="javascript:void(0)"
                    className="login-link topbar-link"
                    data-toggle="modal"
                    data-target="#ere_signin_modal"
                  >
                    <i className="fa fa-user"></i>
                    <span className="hidden-xs">Login or Register</span>
                  </Link>
                </div>{" "}
              </div>
              <div className="mobile-search-button">
                <Link to="#" className="prevent-default search-standard top-[3px] relative">
                  <i className="icon-search2"></i>
                </Link>{" "}
              </div>
            </div>
            <div className="header-mobile-nav menu-drop-fly top-0">
              <form
                role="search"
                method="get"
                className="search-form"
                action="/"
              >
                <input
                  type="search"
                  placeholder="ENTER YOUR  KEYWORD"
                  value=""
                  name="s"
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
              <ul
                id="menu-primary-menu"
                className="nav-menu-mobile x-nav-menu x-nav-menu_primary-menu x-animate-sign-flip"
              >
                <li
                  id="menu-item-mobile-6235"
                  className="menu-item menu-item-type-custom menu-item-object-custom x-menu-item x-item-menu-standard"
                >
                  <Link
                    to="/property-status/for-sale"
                    className="x-menu-a-text"
                  >
                    <span className="x-menu-text">Sales</span>
                  </Link>
                </li>
                <li
                  id="menu-item-mobile-6234"
                  className="menu-item menu-item-type-custom menu-item-object-custom x-menu-item x-item-menu-standard"
                >
                  <Link
                    to="/property-status/for-rent/"
                    className="x-menu-a-text"
                  >
                    <span className="x-menu-text">Rents</span>
                  </Link>
                </li>
                <li
                  id="menu-item-mobile-9502"
                  className="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-item-menu-standard"
                >
                  <Link to="/investment/" className="x-menu-a-text">
                    <span className="x-menu-text">Investment</span>
                  </Link>
                </li>
                <li
                  id="menu-item-mobile-8502"
                  className="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-item-menu-standard"
                >
                  <Link to="/useful-information/" className="x-menu-a-text">
                    <span className="x-menu-text">Useful Information</span>
                  </Link>
                </li>
                <li
                  id="menu-item-mobile-6304"
                  className="menu-item menu-item-type-post_type menu-item-object-page x-menu-item x-item-menu-standard"
                >
                  <Link to="/about-us" className="x-menu-a-text">
                    <span className="x-menu-text">About Us</span>
                  </Link>
                </li>
              </ul>{" "}
            </div>{" "}
          </div>
        </div>
      </div>{" "}
    </header>
  );
};

export default NavigationBar;
