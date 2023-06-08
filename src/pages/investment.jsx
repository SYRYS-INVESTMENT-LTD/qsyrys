import Footer from "../components/footer";
import { MetaTags } from "react-meta-tags";

import NavigationBar from "../components/HomeComponents/topbar/navigationbar";
import LanguageBar from "../components/HomeComponents/topbar/languagebar";
import icon from "../assets/img/SYRYS-S-ICON-1.png";

const Investment = () => {
  return (
    <>
      <MetaTags>
        <title>Investment | Property Investment</title>
      </MetaTags>

      <div
        className="home page-template page-template-elementor_header_footer page page-id-58 wp-embed-responsive beyot-class chrome header-is-float header-sticky-fix-style elementor-default elementor-template-full-width elementor-kit-4695 elementor-page elementor-page-58 e--ua-blink e--ua-chrome e--ua-webkit elementor elementor-58"
        id="wrapper"
      >
        <LanguageBar />
        <NavigationBar />

        <div
          className="pd-top-100 pd-bottom-100 page-wrap"
          id="primary-content"
        >
          <div className="page-inner">
            <div
              data-elementor-type="wp-page"
              data-elementor-id="1057"
              class="elementor elementor-1057"
            >
              <section
                class="elementor-section elementor-top-section elementor-element elementor-element-cc9be35 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="cc9be35"
                data-element_type="section"
              >
                <div class="elementor-container elementor-column-gap-default">
                  <div
                    class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-bc15e22"
                    data-id="bc15e22"
                    data-element_type="column"
                  >
                    <div class="elementor-widget-wrap elementor-element-populated">
                      <div
                        class="elementor-element elementor-element-80d326c elementor-widget elementor-widget-heading"
                        data-id="80d326c"
                        data-element_type="widget"
                        data-widget_type="heading.default"
                      >
                        <div class="elementor-widget-container">
                          <h2 class="elementor-heading-title elementor-size-default">
                            INVESTMENT
                          </h2>{" "}
                        </div>
                      </div>
                      <div
                        class="elementor-element elementor-element-35723aa elementor-widget elementor-widget-text-editor"
                        data-id="35723aa"
                        data-element_type="widget"
                        data-widget_type="text-editor.default"
                      >
                        <div class="elementor-widget-container">
                          <p>
                            <strong>
                              Welcome to our investment section! We specialize
                              in helping investors like you find the perfect
                              property to add to your portfolio. Whether you’re
                              looking for a rental property, a fixer-upper, or a
                              new development opportunity, we have a wide range
                              of properties available to suit your needs.
                            </strong>
                            <br />
                            <br />
                            <strong>
                              Our team of experienced real estate investment
                              professionals has the knowledge and expertise to
                              guide you through the investment process. We’ll
                              work with you to identify properties that match
                              your investment goals and budget, and then help
                              you navigate the purchase process from start to
                              finish.
                            </strong>
                            <br />
                            <br />
                            <strong>
                              We understand that real estate investing can be
                              complex and time-consuming, which is why we’re
                              here to make it as easy and stress-free as
                              possible. We’ll take care of all the details, so
                              you can focus on what really matters – growing
                              your portfolio and earning great returns on your
                              investment.
                            </strong>
                            <br />
                            <br />
                            <strong>
                              So, whether you’re a seasoned investor or just
                              starting out, we’re here to help you achieve your
                              real estate investment goals. Browse our selection
                              of properties and let us know how we can assist
                              you in finding the perfect investment opportunity.
                            </strong>
                          </p>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-4833096"
                    data-id="4833096"
                    data-element_type="column"
                  >
                    <div class="elementor-widget-wrap elementor-element-populated">
                      <div
                        class="elementor-element elementor-element-615c7a6 elementor-widget elementor-widget-image"
                        data-id="615c7a6"
                        data-element_type="widget"
                        data-widget_type="image.default"
                      >
                        <div class="elementor-widget-container">
                          <img
                            decoding="async"
                            src={icon}
                            title=""
                            alt=""
                            loading="lazy"
                          />{" "}
                        </div>
                      </div>
                      <div
                        class="elementor-element elementor-element-faa1350 elementor-align-center elementor-widget elementor-widget-ube-heading"
                        data-id="faa1350"
                        data-element_type="widget"
                        data-widget_type="ube-heading.default"
                      >
                        <div class="elementor-widget-container">
                          <div class="ube-heading ube-heading-divider-after">
                            <h6 class="ube-heading-sub-title">
                              <span class="icon icon-center"></span>MY "Given a
                              10% chance of a 100 times payoff, you should take
                              that bet every time." — Jeff Bezos
                            </h6>
                            <h2 class="ube-heading-title">
                              MORE Details Coming SOON
                            </h2>
                            <div class="ube-heading-divider"></div>
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
        <Footer />
      </div>
    </>
  );
};

export default Investment;
