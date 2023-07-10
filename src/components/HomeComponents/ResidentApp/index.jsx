import "../../../assets/css/ResidentApp.css"
import phone_alt from "../../../assets/img/mockup.png"


const ResidentApp = () => {
  return (
    <>
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-62b6f9bb05d5c elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-element_type="section"
      >
        <div className="elementor-background-overlay"></div>
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8432037"
            data-id="8432037"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-919e187 elementor-widget elementor-widget-ube-heading"
                data-id="919e187"
                data-element_type="widget"
                data-widget_type="ube-heading.default"
              >
                <div className="elementor-widget-container ">
                  <div className="ube-heading">
                    <h2 className="ube-heading-title">
                      Simplified Property Management.
                      <mark>"SYRYS RESIDENT"</mark> APP
                    </h2>
                    <div className="ube-heading-description">
                      <p>
                        Realtime property inspection and management to get
                        information about your properties or Investment from
                        anywhere in the world.
                      </p>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div
                className="elementor-element elementor-element-c9992d5 elementor-widget__width-auto elementor-widget elementor-widget-html"
                data-id="c9992d5"
                data-element_type="widget"
                data-widget_type="html.default"
              >
                <div className="elementor-widget-container">
                  <a href="https://syrysapp.com/" target="_blank">
                    <div className="app-icon">
                      <div className="icon">
                        <i className="fa fa-apple fs-32"></i>
                      </div>
                      <div className="content">
                        <span className="fs-13">ANDROID</span>
                        <h4 className="fs-18">PLAY STORE</h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-cf52c5d elementor-widget__width-auto elementor-widget elementor-widget-html"
                data-id="cf52c5d"
                data-element_type="widget"
                data-widget_type="html.default"
              >
                <div className="elementor-widget-container">
                  <a href="https://syrysapp.com/" target="_blank">
                    <div className="app-icon">
                      <div className="icon">
                        <i className="fa fa-apple fs-32"></i>
                      </div>
                      <div className="content">
                        <span className="fs-13">IOS</span>
                        <h4 className="fs-18">APP STORE</h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7049194"
            data-id="7049194"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-3f0a6ed elementor-widget__width-auto elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image !top-[60px]">
                <div className="elementor-widget-container relative w-[500px] h-full">
                  <img
                    decoding="async"
                    width="207"
                    height="547"
                    src={phone_alt}
                    className="attachment-full ml-1 !w-[500px] size-full wp-image-61"
                    alt="residents-app"
                    loading="lazy"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-fb9d8c9 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1193a69"
            data-id="1193a69"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ResidentApp;
