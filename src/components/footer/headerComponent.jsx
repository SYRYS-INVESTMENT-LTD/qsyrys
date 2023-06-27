import { useEffect } from "react";

const HeaderComponent = () => {

    
  useEffect(() => {
    document
      .querySelector(".action.prevent-default")
      .addEventListener("click", (e) => {
        e.preventDefault();

        document
          .querySelector("#search_popup_wrapper")
          .classList.remove("dialog--open");
      });

    document.querySelector("button.close").addEventListener("click", (e) => {
      e.preventDefault();

      document.querySelector(".modal.modal-login").classList.remove("show");
    });

  }, []);

    return (
      <>
        <div className="mobile-nav-overlay"></div>

        <div
          className="modal modal-login fade pr-[17px]"
          id="ere_signin_modal"
          tabIndex="-1"
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="ere-login-wrap">
                <div className="ere_messages message"></div>

                <form
                  className="ere-login"
                  method="post"
                  encType="multipart/form-data"
                  noValidate="novalidate"
                >
                  <div className="form-group control-username">
                    <input
                      name="user_login"
                      className="form-control control-icon login_user_login"
                      placeholder="Username or email address"
                      type="text"
                    />
                  </div>
                  <div className="form-group control-password">
                    <input
                      name="user_password"
                      className="form-control control-icon"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                  <div className="checkbox mr-3">
                    <label>
                      <input name="remember" type="checkbox" />
                      Remember me{" "}
                    </label>
                  </div>
                  <input
                    type="hidden"
                    name="ere_security_login"
                    value="0b3596ec39"
                  />
                  <input type="hidden" name="action" value="ere_login_ajax" />
                  <a href="javascript:void(0)" className="ere-reset-password">
                    Lost password
                  </a>
                  <button
                    type="submit"
                    data-redirect-url=""
                    className="ere-login-button btn btn-primary btn-block"
                  >
                    Login
                  </button>
                </form>
                <hr />
              </div>
              <div
                className="ere-reset-password-wrap"
                style={{ display: "none" }}
              >
                <div className="ere-resset-password-wrap">
                  <div className="ere_messages message ere_messages_reset_password"></div>
                  <form method="post" encType="multipart/form-data">
                    <div className="form-group control-username">
                      <input
                        name="user_login"
                        className="form-control control-icon reset_password_user_login"
                        placeholder="Enter your username or email"
                      />
                      <input
                        type="hidden"
                        name="ere_security_reset_password"
                        value="300118f62a"
                      />
                      <input
                        type="hidden"
                        name="action"
                        value="ere_reset_password_ajax"
                      />
                      <button
                        type="submit"
                        className="btn btn-primary btn-block ere_forgetpass"
                      >
                        Get new password
                      </button>
                    </div>
                  </form>
                </div>
                <a href="javascript:void(0)" className="ere-back-to-login">
                  Back to Login
                </a>
              </div>{" "}
            </div>
          </div>
        </div>

        <div id="search_popup_wrapper" className="dialog dialog--close">
          <div className="dialog__overlay"></div>
          <div className="dialog__content">
            <div className="morph-shape">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 520 280"
                preserveAspectRatio="none"
              >
                <rect x="3" y="3" fill="none" width="516" height="276"></rect>
              </svg>
            </div>
            <div className="dialog-inner">
              <h2>Enter your keyword</h2>
              <form method="get" action="/" className="search-popup-inner">
                <input
                  type="text"
                  name="s"
                  placeholder="Type and hit enter..."
                />
                <button
                  className="bt bt-sm bt-background bt-primary"
                  type="submit"
                >
                  Search
                </button>
              </form>
              <div>
                <a
                  className="action prevent-default"
                  data-dialog-close="close"
                  href="#"
                >
                  <i className="fa fa-close transition03"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );

}

export default HeaderComponent;