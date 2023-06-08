import { Link } from "react-router-dom";

const ExploreHeader = () => {

    return (
      <>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5b2b7b9"
              data-id="5b2b7b9"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-deb475e g5plus-heading style1 text-center elementor-widget elementor-widget-ube-heading"
                  data-id="deb475e"
                  data-element_type="widget"
                  data-widget_type="ube-heading.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ube-heading">
                      <h6 className="ube-heading-sub-title">
                        <span></span>
                        FIND PROPERTY IN YOUR CITY{" "}
                      </h6>
                      <h2 className="ube-heading-title">EXPLORE PROPERTY</h2>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
    
}

const Explore = () => {
    return (
      <>
        <ExploreHeader />

        <section className="elementor-section pb-[85px] pt-[30px] elementor-top-section elementor-element elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default">
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ff27348"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-5e4dd76 elementor-widget elementor-widget-beyot-property-type"
                  data-element_type="widget"
                  data-widget_type="beyot-property-type.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ube-property-type ere-property-type">
                      <div className="property-type-inner">
                        <div className="property-type-image">
                          <Link to="/property-type/villa/" title="Villa">
                            <img
                              decoding="async"
                              src="https://www.qsyrys.com/wp-content/uploads/elementor/thumbs/8-2-1-q34r47p335a49eunz1xolv54faq7d81g54pqf8cowc.jpg"
                              title="8 2"
                              alt="8 2"
                              loading="lazy"
                            />{" "}
                          </Link>
                        </div>
                        <div className="property-type-info">
                          <div className="property-title">
                            <Link to="/property-type/villa/" title="Villa">
                              Villa{" "}
                            </Link>
                          </div>
                          <div className="property-count">
                            <span>41</span> Properties
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-18ef6e1 elementor-widget elementor-widget-beyot-property-type"
                  data-element_type="widget"
                >
                  <div className="elementor-widget-container">
                    <div className="ube-property-type ere-property-type">
                      <div className="property-type-inner">
                        <div className="property-type-image">
                          <Link
                            to="/property-type/detached-villa/"
                            title="Detached Villa"
                          >
                            <img
                              decoding="async"
                              src="https://www.qsyrys.com/wp-content/uploads/elementor/thumbs/6-4-q34r0wbkz6qpaxo2c4c2b79kzd2l7nvjcpv2h39ouk.jpg"
                              title="6"
                              alt="6"
                              loading="lazy"
                            />{" "}
                          </Link>
                        </div>
                        <div className="property-type-info">
                          <div className="property-title">
                            <Link
                              to="/property-type/detached-villa/"
                              title="Detached Villa"
                            >
                              Detached Villa{" "}
                            </Link>
                          </div>
                          <div className="property-count">
                            <span>17</span> Properties
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ff27348"
              data-id="ff27348"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-18070a5 elementor-widget elementor-widget-beyot-property-type"
                  data-element_type="widget"
                  data-widget_type="beyot-property-type.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ube-property-type ere-property-type">
                      <div className="property-type-inner">
                        <div className="property-type-image">
                          <Link
                            to="/property-type/apartment/"
                            title="Apartment"
                          >
                            <img
                              decoding="async"
                              src="https://www.qsyrys.com/wp-content/uploads/elementor/thumbs/property-02-q34kods3h5x6rplkpcd84v7dz3e5wooqlo9ibe39jg.jpg"
                              title="property-02"
                              alt="property-02"
                              loading="lazy"
                            />{" "}
                          </Link>
                        </div>
                        <div className="property-type-info">
                          <div className="property-title">
                            <Link
                              to="/property-type/apartment/"
                              title="Apartment"
                            >
                              Apartment{" "}
                            </Link>
                          </div>
                          <div className="property-count">
                            <span>196</span> Properties
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-2651bf8 elementor-widget elementor-widget-beyot-property-type"
                  data-widget_type="beyot-property-type.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ube-property-type ere-property-type">
                      <div className="property-type-inner">
                        <div className="property-type-image">
                          <Link
                            to="/property-type/residential-complex/"
                            title="Residential Complex"
                          >
                            <img
                              decoding="async"
                              src="https://www.qsyrys.com/wp-content/uploads/elementor/thumbs/7-3-q34r2vrbelghtasaqz7pkp8m4nahgnr4yjfyy4brpo.jpg"
                              title="7"
                              alt="7"
                              loading="lazy"
                            />{" "}
                          </Link>
                        </div>
                        <div className="property-type-info">
                          <div className="property-title">
                            <Link
                              to="/property-type/residential-complex/"
                              title="Residential Complex"
                            >
                              Residential Complex{" "}
                            </Link>
                          </div>
                          <div className="property-count">
                            <span>28</span> Properties
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Explore;
