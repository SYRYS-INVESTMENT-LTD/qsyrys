import mail from "../../assets/img/icon-letter.png";

const Newsletter = () => {
  return (
    <div className="footer-above-wrapper">
      <div>
        <div className="elementor elementor-194">
          <section className="elementor-section elementor-top-section elementor-element elementor-element-5b312cd elementor-section-content-middle elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default">
            
            <div className="elementor-container elementor-column-gap-default">
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-dab8a49"
                data-id="dab8a49"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-a1104cd ube-position-left elementor-widget elementor-widget-ube-image-box"
                    data-id="a1104cd"
                    data-element_type="widget"
                    data-widget_type="ube-image-box.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="ube-icon-box-wrapper">
                        <div className="ube-image-box ube-icon-box">
                          <div className="ube-ib-icon ube-image">
                            <span className="card-img">
                              <img
                                width="69"
                                height="69"
                                src={mail}
                                className="attachment-full size-full wp-image-63"
                                alt=""
                                decoding="async"
                                loading="lazy"
                              />{" "}
                            </span>{" "}
                          </div>
                          <div className="ube-ib-content">
                            <h3 className="ube-ib-title mb-0 ">
                              <span>
                                <span className="fs-18 text-white -mb-[3px] fw-semi-bold spacing-100">
                                  SYRYS
                                </span>{" "}
                                <span className="d-block fs-24 fw-semi-bold spacing-100 mb-0">
                                  <span
                                    className="text-white"
                                  >
                                    NEWSLETTER
                                  </span>
                                </span>
                              </span>
                            </h3>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3e88a97"
                data-id="3e88a97"
                data-element_type="column"
              >
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div
                    className="elementor-element elementor-element-19bc337 elementor-widget elementor-widget-ube-subscribe-news-letter"
                    data-id="19bc337"
                    data-element_type="widget"
                    data-widget_type="ube-subscribe-news-letter.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="ube-subscribe-news-letter">
                        <form
                          id="mc4wp-form-1"
                          className="mc4wp-form mc4wp-form-17"
                          method="post"
                          data-id="17"
                          data-name="QSYRYS"
                        >
                          <div className="mc4wp-form-fields">
                            <div className="g5plus-mailchimp">
                              <p>
                                Pellentesque habitant morbi tristique
                                senectusnetus et malesuada fames ac turpis
                                egestases .
                              </p>
                              <input
                                type="email"
                                name="EMAIL"
                                className="form-control"
                                placeholder="ENTER YOUR E-MAIL ADDRESS.."
                                required=""
                              />
                              <button type="submit" className="submit">
                                <i className="fa fa-paper-plane"></i>
                              </button>
                              <button
                                type="submit"
                                className="btn btn-md btn-primary btn-classic btn-icon"
                              >
                                <i className="fa fa-paper-plane"></i>
                                <span>Thank You</span>
                              </button>
                            </div>
                          </div>
                          <label className="!hidden" 
                          >
                            Leave this field empty if you're human:{" "}
                            <input
                              type="text"
                              name="_mc4wp_honeypot"
                              value=""
                              tabIndex="-1"
                              autocomplete="off"
                            />
                          </label>
                          <input
                            type="hidden"
                            name="_mc4wp_timestamp"
                            value="1685887573"
                          />
                          <input
                            type="hidden"
                            name="_mc4wp_form_id"
                            value="17"
                          />
                          <input
                            type="hidden"
                            name="_mc4wp_form_element_id"
                            value="mc4wp-form-1"
                          />
                          <div className="mc4wp-response"></div>
                        </form>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
