import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";

const FindAProperty = () => {
  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-6242cc14d278c elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-eead392">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-d90bc31 elementor-widget elementor-widget-beyot-property"
              data-element_type="widget"
              data-widget_type="beyot-property.default"
            >
              <div className="elementor-widget-container">
                <div className="ube-property">
                  <div className="ere-property-wrap">
                    <div
                      className="ere-property clearfix property-carousel  owl-move-nav-par-with-heading"
                      data-view-all-link="#"
                    >
                      <div className="container">
                        <div className="ere-heading ere-item-wrap heading-contain-owl-nav">
                          <h2>FIND A PROPERTY</h2>
                          <div className="owl-nav has-view-all owl-nav-top-right">
                            <div className="owl-prev">
                              <i className="fa fa-angle-left"></i>
                            </div>
                            <div className="owl-next">
                              <i className="fa fa-angle-right"></i>
                            </div>
                            <div className="view-all-link">
                              <a
                                href="#"
                                className="btn btn-xs btn-dark btn-classic"
                              >
                                View All
                              </a>
                            </div>
                          </div>
                          <p>BROWSE OUR DREAM HOUSE</p>
                        </div>
                      </div>

                      {/* begin */}
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={4}
                        pagination={{ clickable: true }}
                        navigation={{
                          prevEl: ".owl-prev",
                          nextEl: ".owl-next",
                        }}
                        modules={[Navigation]}
                        className="property-content owl-carousel manual owl-nav-top-right owl-loaded owl-drag"
                        data-callback="owl_callback"
                      >
                        <SwiperSlide className="item">
                          <div className="ere-item-wrap property-item ere-property-featured">
                            <div className="property-inner">
                              <div className="property-image">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="330"
                                  height="180"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-1-5-330x180.jpg"
                                  alt="1+1 A CITY"
                                  title="1+1 A CITY"
                                />
                                <div className="property-action block-center">
                                  <div className="block-center-inner">
                                    <div
                                      className="property-view-gallery-wrap"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="(10) Photos"
                                    >
                                      <a
                                        data-property-id="8381"
                                        href={"#"}
                                        className="property-view-gallery"
                                      >
                                        <i className="fa fa-camera"></i>
                                      </a>
                                    </div>
                                    <a
                                      href={"#"}
                                      className="property-favorite"
                                      data-property-id="8381"
                                      data-toggle="tooltip"
                                      title=""
                                      data-title-not-favorite="Add to Favorite"
                                      data-title-favorited="It is my favorite"
                                      data-icon-not-favorite="fa fa-star-o"
                                      data-icon-favorited="fa fa-star"
                                      data-original-title="Add to Favorite"
                                    >
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                    <a
                                      className="compare-property"
                                      href={"#"}
                                      data-property-id="8381"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="Compare"
                                    >
                                      <i className="fa fa-plus"></i>
                                    </a>{" "}
                                  </div>
                                  <a
                                    className="property-link"
                                    href="https://www.qsyrys.com/property/11-a-city/"
                                    title="1+1 A CITY"
                                  ></a>
                                </div>
                                <div className="property-label property-featured">
                                  <p className="label-item">
                                    <span className="property-label-bg">
                                      Featured{" "}
                                      <span className="property-arrow"></span>
                                    </span>
                                  </p>
                                </div>
                                <div className="property-status">
                                  <p className="status-item">
                                    <span
                                      className="property-status-bg"
                                      style={{ backgroundColor: "#dd3333" }}
                                    >
                                      For Sale{" "}
                                      <span
                                        className="property-arrow"
                                        style={{
                                          borderLeftColor: "#dd3333",
                                          borderRightColor: "#dd3333",
                                        }}
                                      ></span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="property-item-content">
                                <div className="property-heading">
                                  <h2 className="property-title">
                                    <a
                                      href="https://www.qsyrys.com/property/11-a-city/"
                                      title="1+1 A CITY"
                                    >
                                      1+1 A CITY
                                    </a>
                                  </h2>
                                  <div className="property-price">
                                    <span>97,000£ </span>
                                  </div>
                                </div>
                                <div
                                  className="property-location"
                                  title="SYRYS INVESTMENT LTD"
                                >
                                  <i className="fa fa-map-marker"></i>
                                  <a
                                    target="_blank"
                                    href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"
                                  >
                                    <span>SYRYS INVESTMENT LTD</span>
                                  </a>
                                </div>
                                <div className="property-element-inline">
                                  <div className="property-type-list">
                                    <i className="fa fa-tag"></i>
                                    <a
                                      href="https://www.qsyrys.com/property-type/residential-complex/"
                                      title="Residential Complex"
                                    >
                                      <span>Residential Complex </span>
                                    </a>
                                  </div>
                                  <div className="property-agent">
                                    <a
                                      href="https://www.qsyrys.com/author/syrysgmail-com/"
                                      title="SYRYS GROUP"
                                    >
                                      {" "}
                                      <i className="fa fa-user"></i>
                                      <span>SYRYS GROUP</span>
                                    </a>{" "}
                                  </div>
                                  <div className="property-date">
                                    <i className="fa fa-calendar"></i>
                                    11 months ago{" "}
                                  </div>
                                </div>
                                <div className="property-excerpt">
                                  <p>
                                    A CITY What makes the A City unique besides
                                    urban life is the futures that anticipate
                                    the needs, quality, respectable and reliable
                                    projects that create a difference, sensitive
                                    to the environment, with high brand value
                                    and walking distance to the bazaar, shopping
                                    malls, markets, schools not forgetting
                                    nature and amazing sea, mountain and city
                                    views. […]
                                  </p>
                                </div>
                                <div className="property-info">
                                  <div className="property-info-inner">
                                    <div className="property-area">
                                      <div
                                        className="property-area-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Size"
                                      >
                                        <span className="fa fa-arrows"></span>
                                        <span className="property-info-value">
                                          61.6 m<sup>2</sup>{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bedrooms">
                                      <div
                                        className="property-bedrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="1 Bedroom"
                                      >
                                        <span className="fa fa-hotel"></span>
                                        <span className="property-info-value">
                                          1
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bathrooms">
                                      <div
                                        className="property-bathrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="1 Bathroom"
                                      >
                                        <span className="fa fa-bath"></span>
                                        <span className="property-info-value">
                                          1
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide className="item">
                          <div className="ere-item-wrap property-item ere-property-featured">
                            <div className="property-inner">
                              <div className="property-image">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="330"
                                  height="180"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-1-5-330x180.jpg"
                                  alt="1+1 A CITY"
                                  title="1+1 A CITY"
                                />
                                <div className="property-action block-center">
                                  <div className="block-center-inner">
                                    <div
                                      className="property-view-gallery-wrap"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="(10) Photos"
                                    >
                                      <a
                                        data-property-id="8381"
                                        href={"#"}
                                        className="property-view-gallery"
                                      >
                                        <i className="fa fa-camera"></i>
                                      </a>
                                    </div>
                                    <a
                                      href={"#"}
                                      className="property-favorite"
                                      data-property-id="8381"
                                      data-toggle="tooltip"
                                      title=""
                                      data-title-not-favorite="Add to Favorite"
                                      data-title-favorited="It is my favorite"
                                      data-icon-not-favorite="fa fa-star-o"
                                      data-icon-favorited="fa fa-star"
                                      data-original-title="Add to Favorite"
                                    >
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                    <a
                                      className="compare-property"
                                      href={"#"}
                                      data-property-id="8381"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="Compare"
                                    >
                                      <i className="fa fa-plus"></i>
                                    </a>{" "}
                                  </div>
                                  <a
                                    className="property-link"
                                    href="https://www.qsyrys.com/property/11-a-city/"
                                    title="1+1 A CITY"
                                  ></a>
                                </div>
                                <div className="property-label property-featured">
                                  <p className="label-item">
                                    <span className="property-label-bg">
                                      Featured{" "}
                                      <span className="property-arrow"></span>
                                    </span>
                                  </p>
                                </div>
                                <div className="property-status">
                                  <p className="status-item">
                                    <span
                                      className="property-status-bg"
                                      style={{ backgroundColor: "#dd3333" }}
                                    >
                                      For Sale{" "}
                                      <span
                                        className="property-arrow"
                                        style={{
                                          borderLeftColor: "#dd3333",
                                          borderRightColor: "#dd3333",
                                        }}
                                      ></span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="property-item-content">
                                <div className="property-heading">
                                  <h2 className="property-title">
                                    <a
                                      href="https://www.qsyrys.com/property/11-a-city/"
                                      title="1+1 A CITY"
                                    >
                                      1+1 A CITY
                                    </a>
                                  </h2>
                                  <div className="property-price">
                                    <span>97,000£ </span>
                                  </div>
                                </div>
                                <div
                                  className="property-location"
                                  title="SYRYS INVESTMENT LTD"
                                >
                                  <i className="fa fa-map-marker"></i>
                                  <a
                                    target="_blank"
                                    href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"
                                  >
                                    <span>SYRYS INVESTMENT LTD</span>
                                  </a>
                                </div>
                                <div className="property-element-inline">
                                  <div className="property-type-list">
                                    <i className="fa fa-tag"></i>
                                    <a
                                      href="https://www.qsyrys.com/property-type/residential-complex/"
                                      title="Residential Complex"
                                    >
                                      <span>Residential Complex </span>
                                    </a>
                                  </div>
                                  <div className="property-agent">
                                    <a
                                      href="https://www.qsyrys.com/author/syrysgmail-com/"
                                      title="SYRYS GROUP"
                                    >
                                      {" "}
                                      <i className="fa fa-user"></i>
                                      <span>SYRYS GROUP</span>
                                    </a>{" "}
                                  </div>
                                  <div className="property-date">
                                    <i className="fa fa-calendar"></i>
                                    11 months ago{" "}
                                  </div>
                                </div>
                                <div className="property-excerpt">
                                  <p>
                                    A CITY What makes the A City unique besides
                                    urban life is the futures that anticipate
                                    the needs, quality, respectable and reliable
                                    projects that create a difference, sensitive
                                    to the environment, with high brand value
                                    and walking distance to the bazaar, shopping
                                    malls, markets, schools not forgetting
                                    nature and amazing sea, mountain and city
                                    views. […]
                                  </p>
                                </div>
                                <div className="property-info">
                                  <div className="property-info-inner">
                                    <div className="property-area">
                                      <div
                                        className="property-area-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Size"
                                      >
                                        <span className="fa fa-arrows"></span>
                                        <span className="property-info-value">
                                          61.6 m<sup>2</sup>{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bedrooms">
                                      <div
                                        className="property-bedrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="1 Bedroom"
                                      >
                                        <span className="fa fa-hotel"></span>
                                        <span className="property-info-value">
                                          1
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bathrooms">
                                      <div
                                        className="property-bathrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="1 Bathroom"
                                      >
                                        <span className="fa fa-bath"></span>
                                        <span className="property-info-value">
                                          1
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide className="item">
                          <div className="ere-item-wrap property-item ere-property-featured">
                            <div className="property-inner">
                              <div className="property-image">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="330"
                                  height="180"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-330x180.jpg"
                                  alt="Luxury Villa with an amazing view"
                                  title="Luxury Villa with an amazing view"
                                />
                                <div className="property-action block-center">
                                  <div className="block-center-inner">
                                    <div
                                      className="property-view-gallery-wrap"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="(10) Photos"
                                    >
                                      <a
                                        data-property-id="7424"
                                        href={"#"}
                                        className="property-view-gallery"
                                      >
                                        <i className="fa fa-camera"></i>
                                      </a>
                                    </div>
                                    <a
                                      href={"#"}
                                      className="property-favorite"
                                      data-property-id="7424"
                                      data-toggle="tooltip"
                                      title=""
                                      data-title-not-favorite="Add to Favorite"
                                      data-title-favorited="It is my favorite"
                                      data-icon-not-favorite="fa fa-star-o"
                                      data-icon-favorited="fa fa-star"
                                      data-original-title="Add to Favorite"
                                    >
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                    <a
                                      className="compare-property"
                                      href={"#"}
                                      data-property-id="7424"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="Compare"
                                    >
                                      <i className="fa fa-plus"></i>
                                    </a>{" "}
                                  </div>
                                  <a
                                    className="property-link"
                                    href="https://www.qsyrys.com/property/luxury-villa-with-an-amazing-view/"
                                    title="Luxury Villa with an amazing view"
                                  ></a>
                                </div>
                                <div className="property-label property-featured">
                                  <p className="label-item">
                                    <span className="property-label-bg">
                                      Featured{" "}
                                      <span className="property-arrow"></span>
                                    </span>
                                  </p>
                                </div>
                                <div className="property-status">
                                  <p className="status-item">
                                    <span
                                      className="property-status-bg"
                                      style={{ backgroundColor: "#dd3333" }}
                                    >
                                      For Sale{" "}
                                      <span
                                        className="property-arrow"
                                        style={{
                                          borderLeftColor: "#dd3333",
                                          borderRightColor: "#dd3333",
                                        }}
                                      ></span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="property-item-content">
                                <div className="property-heading">
                                  <h2 className="property-title">
                                    <a
                                      href="https://www.qsyrys.com/property/luxury-villa-with-an-amazing-view/"
                                      title="Luxury Villa with an amazing view"
                                    >
                                      Luxury Villa with an amazing view
                                    </a>
                                  </h2>
                                  <div className="property-price">
                                    <span>1,500,000£ </span>
                                  </div>
                                </div>
                                <div
                                  className="property-location"
                                  title="Syrys Investment Ltd"
                                >
                                  <i className="fa fa-map-marker"></i>
                                  <a
                                    target="_blank"
                                    href="http://maps.google.com/?q=Syrys%20Investment%20Ltd"
                                  >
                                    <span>Syrys Investment Ltd</span>
                                  </a>
                                </div>
                                <div className="property-element-inline">
                                  <div className="property-type-list">
                                    <i className="fa fa-tag"></i>
                                    <a
                                      href="https://www.qsyrys.com/property-type/detached-villa/"
                                      title="Detached Villa"
                                    >
                                      <span>Detached Villa </span>
                                    </a>
                                    <a
                                      href="https://www.qsyrys.com/property-type/villa/"
                                      title="Villa"
                                    >
                                      <span>Villa </span>
                                    </a>
                                  </div>
                                  <div className="property-agent">
                                    <a
                                      href="https://www.qsyrys.com/author/syrysgmail-com/"
                                      title="SYRYS GROUP"
                                    >
                                      {" "}
                                      <i className="fa fa-user"></i>
                                      <span>SYRYS GROUP</span>
                                    </a>{" "}
                                  </div>
                                  <div className="property-date">
                                    <i className="fa fa-calendar"></i>
                                    12 months ago{" "}
                                  </div>
                                </div>
                                <div className="property-excerpt">
                                  <p>
                                    5 Bedroom Luxury Villa 1 Bedroom Staff
                                    Apartment Private Office 2 Storage Rooms 4
                                    Car Underground Garage 15m x 5m Infinity
                                    Swimming Pool Private Elevator Pool with
                                    Window into Basement Private Gym Area, Home
                                    Office, Cinema Room, Sauna &amp; Hammam
                                    facilities Covered Roof Terrace with Hot
                                    tub, Roof terrace with Kitchen &amp; BBQ
                                    Area Hobby […]
                                  </p>
                                </div>
                                <div className="property-info">
                                  <div className="property-info-inner">
                                    <div className="property-area">
                                      <div
                                        className="property-area-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Size"
                                      >
                                        <span className="fa fa-arrows"></span>
                                        <span className="property-info-value">
                                          773.97 m<sup>2</sup>{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bedrooms">
                                      <div
                                        className="property-bedrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="6 Bedrooms"
                                      >
                                        <span className="fa fa-hotel"></span>
                                        <span className="property-info-value">
                                          6
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bathrooms">
                                      <div
                                        className="property-bathrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="7 Bathrooms"
                                      >
                                        <span className="fa fa-bath"></span>
                                        <span className="property-info-value">
                                          7
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide className="item">
                          <div className="ere-item-wrap property-item ere-property-featured">
                            <div className="property-inner">
                              <div className="property-image">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="330"
                                  height="180"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-1-6.jpg"
                                  alt="A CITY PENTHOUSE"
                                  title="A CITY PENTHOUSE"
                                />
                                <div className="property-action block-center">
                                  <div className="block-center-inner">
                                    <div
                                      className="property-view-gallery-wrap"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="(10) Photos"
                                    >
                                      <a
                                        data-property-id="8404"
                                        href={"#"}
                                        className="property-view-gallery"
                                      >
                                        <i className="fa fa-camera"></i>
                                      </a>
                                    </div>
                                    <a
                                      href={"#"}
                                      className="property-favorite"
                                      data-property-id="8404"
                                      data-toggle="tooltip"
                                      title=""
                                      data-title-not-favorite="Add to Favorite"
                                      data-title-favorited="It is my favorite"
                                      data-icon-not-favorite="fa fa-star-o"
                                      data-icon-favorited="fa fa-star"
                                      data-original-title="Add to Favorite"
                                    >
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                    <a
                                      className="compare-property"
                                      href={"#"}
                                      data-property-id="8404"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="Compare"
                                    >
                                      <i className="fa fa-plus"></i>
                                    </a>{" "}
                                  </div>
                                  <a
                                    className="property-link"
                                    href="https://www.qsyrys.com/property/a-city-penthouse/"
                                    title="A CITY PENTHOUSE"
                                  ></a>
                                </div>
                                <div className="property-label property-featured">
                                  <p className="label-item">
                                    <span className="property-label-bg">
                                      Featured{" "}
                                      <span className="property-arrow"></span>
                                    </span>
                                  </p>
                                </div>
                                <div className="property-status">
                                  <p className="status-item">
                                    <span
                                      className="property-status-bg"
                                      style={{ backgroundColor: "#dd3333" }}
                                    >
                                      For Sale{" "}
                                      <span
                                        className="property-arrow"
                                        style={{
                                          borderLeftColor: "#dd3333",
                                          borderRightColor: "#dd3333",
                                        }}
                                      ></span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="property-item-content">
                                <div className="property-heading">
                                  <h2 className="property-title">
                                    <a
                                      href="https://www.qsyrys.com/property/a-city-penthouse/"
                                      title="A CITY PENTHOUSE"
                                    >
                                      A CITY PENTHOUSE
                                    </a>
                                  </h2>
                                  <div className="property-price">
                                    <span>372,000£ </span>
                                  </div>
                                </div>
                                <div
                                  className="property-location"
                                  title="SYRYS INVESTMENT LTD"
                                >
                                  <i className="fa fa-map-marker"></i>
                                  <a
                                    target="_blank"
                                    href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"
                                  >
                                    <span>SYRYS INVESTMENT LTD</span>
                                  </a>
                                </div>
                                <div className="property-element-inline">
                                  <div className="property-type-list">
                                    <i className="fa fa-tag"></i>
                                    <a
                                      href="https://www.qsyrys.com/property-type/penthouse/"
                                      title="Penthouse"
                                    >
                                      <span>Penthouse </span>
                                    </a>
                                  </div>
                                  <div className="property-agent">
                                    <a
                                      href="https://www.qsyrys.com/author/syrysgmail-com/"
                                      title="SYRYS GROUP"
                                    >
                                      {" "}
                                      <i className="fa fa-user"></i>
                                      <span>SYRYS GROUP</span>
                                    </a>{" "}
                                  </div>
                                  <div className="property-date">
                                    <i className="fa fa-calendar"></i>
                                    11 months ago{" "}
                                  </div>
                                </div>
                                <div className="property-excerpt">
                                  <p>
                                    A CITY What makes the A City unique besides
                                    urban life is the futures that anticipate
                                    the needs, quality, respectable and reliable
                                    projects that create a difference, sensitive
                                    to the environment, with high brand value
                                    and walking distance to the bazaar, shopping
                                    malls, markets, schools not forgetting
                                    nature and amazing sea, mountain and city
                                    views. […]
                                  </p>
                                </div>
                                <div className="property-info">
                                  <div className="property-info-inner">
                                    <div className="property-area">
                                      <div
                                        className="property-area-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Size"
                                      >
                                        <span className="fa fa-arrows"></span>
                                        <span className="property-info-value">
                                          376.7 m<sup>2</sup>{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bedrooms">
                                      <div
                                        className="property-bedrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="3 Bedrooms"
                                      >
                                        <span className="fa fa-hotel"></span>
                                        <span className="property-info-value">
                                          3
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bathrooms">
                                      <div
                                        className="property-bathrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="3 Bathrooms"
                                      >
                                        <span className="fa fa-bath"></span>
                                        <span className="property-info-value">
                                          3
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                          <div className="ere-item-wrap property-item ere-property-featured">
                            <div className="property-inner">
                              <div className="property-image">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="330"
                                  height="180"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/06/Main-330x180.png"
                                  alt="Seasons City in Cyprus"
                                  title="Seasons City in Cyprus"
                                />
                                <div className="property-action block-center">
                                  <div className="block-center-inner">
                                    <div
                                      className="property-view-gallery-wrap"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="(8) Photos"
                                    >
                                      <a
                                        data-property-id="771"
                                        href={"#"}
                                        className="property-view-gallery"
                                      >
                                        <i className="fa fa-camera"></i>
                                      </a>
                                    </div>
                                    <a
                                      href={"#"}
                                      className="property-favorite"
                                      data-property-id="771"
                                      data-toggle="tooltip"
                                      title=""
                                      data-title-not-favorite="Add to Favorite"
                                      data-title-favorited="It is my favorite"
                                      data-icon-not-favorite="fa fa-star-o"
                                      data-icon-favorited="fa fa-star"
                                      data-original-title="Add to Favorite"
                                    >
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                    <a
                                      className="compare-property"
                                      href={"#"}
                                      data-property-id="771"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="Compare"
                                    >
                                      <i className="fa fa-plus"></i>
                                    </a>{" "}
                                  </div>
                                  <a
                                    className="property-link"
                                    href="https://www.qsyrys.com/property/single-house-los-angeles/"
                                    title="Seasons City in Cyprus"
                                  ></a>
                                </div>
                                <div className="property-label property-featured">
                                  <p className="label-item">
                                    <span className="property-label-bg">
                                      Featured{" "}
                                      <span className="property-arrow"></span>
                                    </span>
                                  </p>
                                </div>
                                <div className="property-status">
                                  <p className="status-item">
                                    <span
                                      className="property-status-bg"
                                      style={{ backgroundColor: "#dd3333" }}
                                    >
                                      For Sale{" "}
                                      <span
                                        className="property-arrow"
                                        style={{
                                          borderLeftColor: "#dd3333",
                                          borderRightColor: "#dd3333",
                                        }}
                                      ></span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="property-item-content">
                                <div className="property-heading">
                                  <h2 className="property-title">
                                    <a
                                      href="https://www.qsyrys.com/property/single-house-los-angeles/"
                                      title="Seasons City in Cyprus"
                                    >
                                      Seasons City in Cyprus
                                    </a>
                                  </h2>
                                  <div className="property-price">
                                    <span>
                                      <span className="property-price-prefix">
                                        Starting from{" "}
                                      </span>{" "}
                                      165,000£{" "}
                                    </span>
                                  </div>
                                </div>
                                <div
                                  className="property-location"
                                  title="Syrys Investment Ltd"
                                >
                                  <i className="fa fa-map-marker"></i>
                                  <a
                                    target="_blank"
                                    href="http://maps.google.com/?q=Syrys%20Investment%20Ltd"
                                  >
                                    <span>Syrys Investment Ltd</span>
                                  </a>
                                </div>
                                <div className="property-element-inline">
                                  <div className="property-type-list">
                                    <i className="fa fa-tag"></i>
                                    <a
                                      href="https://www.qsyrys.com/property-type/residential-complex/"
                                      title="Residential Complex"
                                    >
                                      <span>Residential Complex </span>
                                    </a>
                                  </div>
                                  <div className="property-agent">
                                    <a
                                      href="https://www.qsyrys.com/author/syrysgmail-com/"
                                      title="SYRYS GROUP"
                                    >
                                      {" "}
                                      <i className="fa fa-user"></i>
                                      <span>SYRYS GROUP</span>
                                    </a>{" "}
                                  </div>
                                  <div className="property-date">
                                    <i className="fa fa-calendar"></i>6 years
                                    ago{" "}
                                  </div>
                                </div>
                                <div className="property-excerpt">
                                  <p>
                                    ARE YOU READY TO LIVE ON THE BEACH? SEASONS
                                    City, is the newest project presenting you a
                                    life situated right on the sea front.
                                    Established by four major companies with the
                                    rising value of investments in Northern
                                    Cyprus this projects offers a guaranteed
                                    partnership in NORTHERN CYPRUS. The project,
                                    which will be built on 76 […]
                                  </p>
                                </div>
                                <div className="property-info">
                                  <div className="property-info-inner">
                                    <div className="property-area">
                                      <div
                                        className="property-area-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Size"
                                      >
                                        <span className="fa fa-arrows"></span>
                                        <span className="property-info-value">
                                          75 m<sup>2</sup>{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bedrooms">
                                      <div
                                        className="property-bedrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="2 Bedrooms"
                                      >
                                        <span className="fa fa-hotel"></span>
                                        <span className="property-info-value">
                                          2
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bathrooms">
                                      <div
                                        className="property-bathrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="2 Bathrooms"
                                      >
                                        <span className="fa fa-bath"></span>
                                        <span className="property-info-value">
                                          2
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                          <div className="ere-item-wrap property-item ere-property-featured">
                            <div className="property-inner">
                              <div className="property-image">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="330"
                                  height="180"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/06/cover-1-330x180.jpg"
                                  alt="4+1 Luxury villa in a residence"
                                  title="4+1 Luxury villa in a residence"
                                />
                                <div className="property-action block-center">
                                  <div className="block-center-inner">
                                    <div
                                      className="property-view-gallery-wrap"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="(9) Photos"
                                    >
                                      <a
                                        data-property-id="768"
                                        href={"#"}
                                        className="property-view-gallery"
                                      >
                                        <i className="fa fa-camera"></i>
                                      </a>
                                    </div>
                                    <a
                                      href={"#"}
                                      className="property-favorite"
                                      data-property-id="768"
                                      data-toggle="tooltip"
                                      title=""
                                      data-title-not-favorite="Add to Favorite"
                                      data-title-favorited="It is my favorite"
                                      data-icon-not-favorite="fa fa-star-o"
                                      data-icon-favorited="fa fa-star"
                                      data-original-title="Add to Favorite"
                                    >
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                    <a
                                      className="compare-property"
                                      href={"#"}
                                      data-property-id="768"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="Compare"
                                    >
                                      <i className="fa fa-plus"></i>
                                    </a>{" "}
                                  </div>
                                  <a
                                    className="property-link"
                                    href="https://www.qsyrys.com/property/apartment-morden-santa-monica-los-angeles/"
                                    title="4+1 Luxury villa in a residence"
                                  ></a>
                                </div>
                                <div className="property-label property-featured">
                                  <p className="label-item">
                                    <span className="property-label-bg">
                                      Featured{" "}
                                      <span className="property-arrow"></span>
                                    </span>
                                  </p>
                                </div>
                                <div className="property-status">
                                  <p className="status-item">
                                    <span
                                      className="property-status-bg"
                                      style={{ backgroundColor: "#dd3333" }}
                                    >
                                      For Sale{" "}
                                      <span
                                        className="property-arrow"
                                        style={{
                                          borderLeftColor: "#dd3333",
                                          borderRightColor: "#dd3333",
                                        }}
                                      ></span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="property-item-content">
                                <div className="property-heading">
                                  <h2 className="property-title">
                                    <a
                                      href="https://www.qsyrys.com/property/apartment-morden-santa-monica-los-angeles/"
                                      title="4+1 Luxury villa in a residence"
                                    >
                                      4+1 Luxury villa in a residence
                                    </a>
                                  </h2>
                                  <div className="property-price">
                                    <span>380,000£ </span>
                                  </div>
                                </div>
                                <div
                                  className="property-location"
                                  title="SYRYS Investment Ltd"
                                >
                                  <i className="fa fa-map-marker"></i>
                                  <a
                                    target="_blank"
                                    href="http://maps.google.com/?q=SYRYS%20Investment%20Ltd"
                                  >
                                    <span>SYRYS Investment Ltd</span>
                                  </a>
                                </div>
                                <div className="property-element-inline">
                                  <div className="property-type-list">
                                    <i className="fa fa-tag"></i>
                                    <a
                                      href="https://www.qsyrys.com/property-type/villa/"
                                      title="Villa"
                                    >
                                      <span>Villa </span>
                                    </a>
                                  </div>
                                  <div className="property-agent">
                                    <a
                                      href="https://www.qsyrys.com/author/syrysgmail-com/"
                                      title="SYRYS GROUP"
                                    >
                                      {" "}
                                      <i className="fa fa-user"></i>
                                      <span>SYRYS GROUP</span>
                                    </a>{" "}
                                  </div>
                                  <div className="property-date">
                                    <i className="fa fa-calendar"></i>6 years
                                    ago{" "}
                                  </div>
                                </div>
                                <div className="property-excerpt">
                                  <p>
                                    A Privileged Life This project, where all
                                    the beauties of Ozanköy come together, is
                                    named after Murat Efendi, the unforgettable
                                    figure of this region (Murat Hüseyin), who
                                    knows the value of the land he lives in, and
                                    who blends the abundance of his labor with
                                    his hard work and generosity, will carry
                                    happiness and peace […]
                                  </p>
                                </div>
                                <div className="property-info">
                                  <div className="property-info-inner">
                                    <div className="property-area">
                                      <div
                                        className="property-area-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Size"
                                      >
                                        <span className="fa fa-arrows"></span>
                                        <span className="property-info-value">
                                          290 m<sup>2</sup>{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bedrooms">
                                      <div
                                        className="property-bedrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="4 Bedrooms"
                                      >
                                        <span className="fa fa-hotel"></span>
                                        <span className="property-info-value">
                                          4
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bathrooms">
                                      <div
                                        className="property-bathrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="3 Bathrooms"
                                      >
                                        <span className="fa fa-bath"></span>
                                        <span className="property-info-value">
                                          3
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="item active">
                          <div className="ere-item-wrap property-item ere-property-featured">
                            <div className="property-inner">
                              <div className="property-image">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="330"
                                  height="180"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/06/cover-330x180.jpg"
                                  alt="Dreamlike Homes in a complex"
                                  title="Dreamlike Homes in a complex"
                                />
                                <div className="property-action block-center">
                                  <div className="block-center-inner">
                                    <div
                                      className="property-view-gallery-wrap"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="(9) Photos"
                                    >
                                      <a
                                        data-property-id="663"
                                        href={"#"}
                                        className="property-view-gallery"
                                      >
                                        <i className="fa fa-camera"></i>
                                      </a>
                                    </div>
                                    <a
                                      href={"#"}
                                      className="property-favorite"
                                      data-property-id="663"
                                      data-toggle="tooltip"
                                      title=""
                                      data-title-not-favorite="Add to Favorite"
                                      data-title-favorited="It is my favorite"
                                      data-icon-not-favorite="fa fa-star-o"
                                      data-icon-favorited="fa fa-star"
                                      data-original-title="Add to Favorite"
                                    >
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                    <a
                                      className="compare-property"
                                      href={"#"}
                                      data-property-id="663"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="Compare"
                                    >
                                      <i className="fa fa-plus"></i>
                                    </a>{" "}
                                  </div>
                                  <a
                                    className="property-link"
                                    href="https://www.qsyrys.com/property/restaurant-austin-tx-78702/"
                                    title="Dreamlike Homes in a complex"
                                  ></a>
                                </div>
                                <div className="property-label property-featured">
                                  <p className="label-item">
                                    <span className="property-label-bg">
                                      Featured{" "}
                                      <span className="property-arrow"></span>
                                    </span>
                                  </p>
                                </div>
                                <div className="property-status">
                                  <p className="status-item">
                                    <span
                                      className="property-status-bg"
                                      style={{ backgroundColor: "#dd3333" }}
                                    >
                                      For Sale{" "}
                                      <span
                                        className="property-arrow"
                                        style={{
                                          borderLeftColor: "#dd3333",
                                          borderRightColor: "#dd3333",
                                        }}
                                      ></span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="property-item-content">
                                <div className="property-heading">
                                  <h2 className="property-title">
                                    <a
                                      href="https://www.qsyrys.com/property/restaurant-austin-tx-78702/"
                                      title="Dreamlike Homes in a complex"
                                    >
                                      Dreamlike Homes in a complex
                                    </a>
                                  </h2>
                                  <div className="property-price">
                                    <span>455,000£ </span>
                                  </div>
                                </div>
                                <div
                                  className="property-location"
                                  title="syrys investment ltd"
                                >
                                  <i className="fa fa-map-marker"></i>
                                  <a
                                    target="_blank"
                                    href="http://maps.google.com/?q=syrys%20investment%20ltd"
                                  >
                                    <span>syrys investment ltd</span>
                                  </a>
                                </div>
                                <div className="property-element-inline">
                                  <div className="property-type-list">
                                    <i className="fa fa-tag"></i>
                                    <a
                                      href="https://www.qsyrys.com/property-type/villa/"
                                      title="Villa"
                                    >
                                      <span>Villa </span>
                                    </a>
                                  </div>
                                  <div className="property-agent">
                                    <a
                                      href="https://www.qsyrys.com/author/syrysgmail-com/"
                                      title="SYRYS GROUP"
                                    >
                                      {" "}
                                      <i className="fa fa-user"></i>
                                      <span>SYRYS GROUP</span>
                                    </a>{" "}
                                  </div>
                                  <div className="property-date">
                                    <i className="fa fa-calendar"></i>6 years
                                    ago{" "}
                                  </div>
                                </div>
                                <div className="property-excerpt">
                                  <p>
                                    Dreams to live on island that embraces the
                                    shimmering blue Large windows and terraces
                                    opens to the most beautiful sea of the
                                    Mediterranean come true with Dreamlike
                                    Houses. This villas are located in the
                                    Kyrenia district and consist of 13 villas
                                    with private pool built on an area of
                                    6843m2. A DREAMLIKE LIFE ON THE […]
                                  </p>
                                </div>
                                <div className="property-info">
                                  <div className="property-info-inner">
                                    <div className="property-area">
                                      <div
                                        className="property-area-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Size"
                                      >
                                        <span className="fa fa-arrows"></span>
                                        <span className="property-info-value">
                                          348 m<sup>2</sup>{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bedrooms">
                                      <div
                                        className="property-bedrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="5 Bedrooms"
                                      >
                                        <span className="fa fa-hotel"></span>
                                        <span className="property-info-value">
                                          5
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bathrooms">
                                      <div
                                        className="property-bathrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="4 Bathrooms"
                                      >
                                        <span className="fa fa-bath"></span>
                                        <span className="property-info-value">
                                          4
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="item active">
                          <div className="ere-item-wrap property-item ere-property-featured">
                            <div className="property-inner">
                              <div className="property-image">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="330"
                                  height="180"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/06/Zolive-330x180.jpg"
                                  alt="Zolive residential homes"
                                  title="Zolive residential homes"
                                />
                                <div className="property-action block-center">
                                  <div className="block-center-inner">
                                    <div
                                      className="property-view-gallery-wrap"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="(10) Photos"
                                    >
                                      <a
                                        data-property-id="657"
                                        href={"#"}
                                        className="property-view-gallery"
                                      >
                                        <i className="fa fa-camera"></i>
                                      </a>
                                    </div>
                                    <a
                                      href={"#"}
                                      className="property-favorite"
                                      data-property-id="657"
                                      data-toggle="tooltip"
                                      title=""
                                      data-title-not-favorite="Add to Favorite"
                                      data-title-favorited="It is my favorite"
                                      data-icon-not-favorite="fa fa-star-o"
                                      data-icon-favorited="fa fa-star"
                                      data-original-title="Add to Favorite"
                                    >
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                    <a
                                      className="compare-property"
                                      href={"#"}
                                      data-property-id="657"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="Compare"
                                    >
                                      <i className="fa fa-plus"></i>
                                    </a>{" "}
                                  </div>
                                  <a
                                    className="property-link"
                                    href="https://www.qsyrys.com/property/villa-4445-lamont-st-san-diego-ca-92109/"
                                    title="Zolive residential homes"
                                  ></a>
                                </div>
                                <div className="property-label property-featured">
                                  <p className="label-item">
                                    <span className="property-label-bg">
                                      Featured{" "}
                                      <span className="property-arrow"></span>
                                    </span>
                                  </p>
                                </div>
                                <div className="property-status">
                                  <p className="status-item">
                                    <span
                                      className="property-status-bg"
                                      style={{ backgroundColor: "#dd3333" }}
                                    >
                                      For Sale{" "}
                                      <span
                                        className="property-arrow"
                                        style={{
                                          borderLeftColor: "#dd3333",
                                          borderRightColor: "#dd3333",
                                        }}
                                      ></span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="property-item-content">
                                <div className="property-heading">
                                  <h2 className="property-title">
                                    <a
                                      href="https://www.qsyrys.com/property/villa-4445-lamont-st-san-diego-ca-92109/"
                                      title="Zolive residential homes"
                                    >
                                      Zolive residential homes
                                    </a>
                                  </h2>
                                  <div className="property-price">
                                    <span>196,000£ </span>
                                  </div>
                                </div>
                                <div
                                  className="property-location"
                                  title="SYRYS Investment Ltd"
                                >
                                  <i className="fa fa-map-marker"></i>
                                  <a
                                    target="_blank"
                                    href="http://maps.google.com/?q=SYRYS%20Investment%20Ltd"
                                  >
                                    <span>SYRYS Investment Ltd</span>
                                  </a>
                                </div>
                                <div className="property-element-inline">
                                  <div className="property-type-list">
                                    <i className="fa fa-tag"></i>
                                    <a
                                      href="https://www.qsyrys.com/property-type/residential-complex/"
                                      title="Residential Complex"
                                    >
                                      <span>Residential Complex </span>
                                    </a>
                                  </div>
                                  <div className="property-agent">
                                    <a
                                      href="https://www.qsyrys.com/author/syrysgmail-com/"
                                      title="SYRYS GROUP"
                                    >
                                      {" "}
                                      <i className="fa fa-user"></i>
                                      <span>SYRYS GROUP</span>
                                    </a>{" "}
                                  </div>
                                  <div className="property-date">
                                    <i className="fa fa-calendar"></i>6 years
                                    ago{" "}
                                  </div>
                                </div>
                                <div className="property-excerpt">
                                  <p>
                                    Our project, which is the closest to the
                                    center of Kyrenia and 50 meters away from
                                    the magnificent Zeytinlik Village center,
                                    reflects the historical texture of Kyrenia
                                    positioned among olive trees with a unique
                                    mountain and sea view. All olive trees on
                                    the land in the project have been preserved,
                                    and the trees that need […]
                                  </p>
                                </div>
                                <div className="property-info">
                                  <div className="property-info-inner">
                                    <div className="property-area">
                                      <div
                                        className="property-area-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Size"
                                      >
                                        <span className="fa fa-arrows"></span>
                                        <span className="property-info-value">
                                          165 m<sup>2</sup>{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bedrooms">
                                      <div
                                        className="property-bedrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="3 Bedrooms"
                                      >
                                        <span className="fa fa-hotel"></span>
                                        <span className="property-info-value">
                                          3
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bathrooms">
                                      <div
                                        className="property-bathrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="3 Bathrooms"
                                      >
                                        <span className="fa fa-bath"></span>
                                        <span className="property-info-value">
                                          3
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="item active">
                          <div className="ere-item-wrap property-item ere-property-featured">
                            <div className="property-inner">
                              <div className="property-image">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="330"
                                  height="180"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/07/2-1-330x180.jpg"
                                  alt="3+1 Capital CITY VILLA"
                                  title="3+1 Capital CITY VILLA"
                                />
                                <div className="property-action block-center">
                                  <div className="block-center-inner">
                                    <div
                                      className="property-view-gallery-wrap"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="(10) Photos"
                                    >
                                      <a
                                        data-property-id="649"
                                        href={"#"}
                                        className="property-view-gallery"
                                      >
                                        <i className="fa fa-camera"></i>
                                      </a>
                                    </div>
                                    <a
                                      href={"#"}
                                      className="property-favorite"
                                      data-property-id="649"
                                      data-toggle="tooltip"
                                      title=""
                                      data-title-not-favorite="Add to Favorite"
                                      data-title-favorited="It is my favorite"
                                      data-icon-not-favorite="fa fa-star-o"
                                      data-icon-favorited="fa fa-star"
                                      data-original-title="Add to Favorite"
                                    >
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                    <a
                                      className="compare-property"
                                      href={"#"}
                                      data-property-id="649"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="Compare"
                                    >
                                      <i className="fa fa-plus"></i>
                                    </a>{" "}
                                  </div>
                                  <a
                                    className="property-link"
                                    href="https://www.qsyrys.com/property/apartment-1580-flat-shoals-rd-se-suite-f-atlanta/"
                                    title="3+1 Capital CITY VILLA"
                                  ></a>
                                </div>
                                <div className="property-label property-featured">
                                  <p className="label-item">
                                    <span className="property-label-bg">
                                      Featured{" "}
                                      <span className="property-arrow"></span>
                                    </span>
                                  </p>
                                </div>
                                <div className="property-status">
                                  <p className="status-item">
                                    <span
                                      className="property-status-bg"
                                      style={{ backgroundColor: "#dd3333" }}
                                    >
                                      For Sale{" "}
                                      <span
                                        className="property-arrow"
                                        style={{
                                          borderLeftColor: "#dd3333",
                                          borderRightColor: "#dd3333",
                                        }}
                                      ></span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="property-item-content">
                                <div className="property-heading">
                                  <h2 className="property-title">
                                    <a
                                      href="https://www.qsyrys.com/property/apartment-1580-flat-shoals-rd-se-suite-f-atlanta/"
                                      title="3+1 Capital CITY VILLA"
                                    >
                                      3+1 Capital CITY VILLA
                                    </a>
                                  </h2>
                                  <div className="property-price">
                                    <span>167,000£ </span>
                                  </div>
                                </div>
                                <div
                                  className="property-location"
                                  title="Syrys Investment Ltd"
                                >
                                  <i className="fa fa-map-marker"></i>
                                  <a
                                    target="_blank"
                                    href="http://maps.google.com/?q=Syrys%20Investment%20Ltd"
                                  >
                                    <span>Syrys Investment Ltd</span>
                                  </a>
                                </div>
                                <div className="property-element-inline">
                                  <div className="property-type-list">
                                    <i className="fa fa-tag"></i>
                                    <a
                                      href="https://www.qsyrys.com/property-type/villa/"
                                      title="Villa"
                                    >
                                      <span>Villa </span>
                                    </a>
                                  </div>
                                  <div className="property-agent">
                                    <a
                                      href="https://www.qsyrys.com/author/syrysgmail-com/"
                                      title="SYRYS GROUP"
                                    >
                                      {" "}
                                      <i className="fa fa-user"></i>
                                      <span>SYRYS GROUP</span>
                                    </a>{" "}
                                  </div>
                                  <div className="property-date">
                                    <i className="fa fa-calendar"></i>6 years
                                    ago{" "}
                                  </div>
                                </div>
                                <div className="property-excerpt">
                                  <p>
                                    Are you ready for a brand new life worthy of
                                    your name? A new day begins… Peaceful,
                                    energetic and exciting. The rising sun is
                                    pampering us again… Every time we are born,
                                    so that we can live our dreams We are
                                    generously presented with a gift. A new day,
                                    an opportunity, a hope and a […]
                                  </p>
                                </div>
                                <div className="property-info">
                                  <div className="property-info-inner">
                                    <div className="property-area">
                                      <div
                                        className="property-area-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Size"
                                      >
                                        <span className="fa fa-arrows"></span>
                                        <span className="property-info-value">
                                          280 m<sup>2</sup>{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bedrooms">
                                      <div
                                        className="property-bedrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="3 Bedrooms"
                                      >
                                        <span className="fa fa-hotel"></span>
                                        <span className="property-info-value">
                                          3
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bathrooms">
                                      <div
                                        className="property-bathrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="3 Bathrooms"
                                      >
                                        <span className="fa fa-bath"></span>
                                        <span className="property-info-value">
                                          3
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="item active">
                          <div className="ere-item-wrap property-item ere-property-featured">
                            <div className="property-inner">
                              <div className="property-image">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="330"
                                  height="180"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/07/3-1-1-330x180.jpg"
                                  alt="3+1 Intense Residence"
                                  title="3+1 Intense Residence"
                                />
                                <div className="property-action block-center">
                                  <div className="block-center-inner">
                                    <div
                                      className="property-view-gallery-wrap"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="(10) Photos"
                                    >
                                      <a
                                        data-property-id="632"
                                        href={"#"}
                                        className="property-view-gallery"
                                      >
                                        <i className="fa fa-camera"></i>
                                      </a>
                                    </div>
                                    <a
                                      href={"#"}
                                      className="property-favorite"
                                      data-property-id="632"
                                      data-toggle="tooltip"
                                      title=""
                                      data-title-not-favorite="Add to Favorite"
                                      data-title-favorited="It is my favorite"
                                      data-icon-not-favorite="fa fa-star-o"
                                      data-icon-favorited="fa fa-star"
                                      data-original-title="Add to Favorite"
                                    >
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                    <a
                                      className="compare-property"
                                      href={"#"}
                                      data-property-id="632"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="Compare"
                                    >
                                      <i className="fa fa-plus"></i>
                                    </a>{" "}
                                  </div>
                                  <a
                                    className="property-link"
                                    href="https://www.qsyrys.com/property/villa-552-flat-shoals-ave-se-atlanta/"
                                    title="3+1 Intense Residence"
                                  ></a>
                                </div>
                                <div className="property-label property-featured">
                                  <p className="label-item">
                                    <span className="property-label-bg">
                                      Featured{" "}
                                      <span className="property-arrow"></span>
                                    </span>
                                  </p>
                                </div>
                                <div className="property-status">
                                  <p className="status-item">
                                    <span
                                      className="property-status-bg"
                                      style={{ backgroundColor: "#dd3333" }}
                                    >
                                      For Sale{" "}
                                      <span
                                        className="property-arrow"
                                        style={{
                                          borderLeftColor: "#dd3333",
                                          borderRightColor: "#dd3333",
                                        }}
                                      ></span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="property-item-content">
                                <div className="property-heading">
                                  <h2 className="property-title">
                                    <a
                                      href="https://www.qsyrys.com/property/villa-552-flat-shoals-ave-se-atlanta/"
                                      title="3+1 Intense Residence"
                                    >
                                      3+1 Intense Residence
                                    </a>
                                  </h2>
                                  <div className="property-price">
                                    <span>295,000£ </span>
                                  </div>
                                </div>
                                <div
                                  className="property-location"
                                  title="Syrys Investment Ltd"
                                >
                                  <i className="fa fa-map-marker"></i>
                                  <a
                                    target="_blank"
                                    href="http://maps.google.com/?q=Syrys%20Investment%20Ltd"
                                  >
                                    <span>Syrys Investment Ltd</span>
                                  </a>
                                </div>
                                <div className="property-element-inline">
                                  <div className="property-type-list">
                                    <i className="fa fa-tag"></i>
                                    <a
                                      href="https://www.qsyrys.com/property-type/residential-complex/"
                                      title="Residential Complex"
                                    >
                                      <span>Residential Complex </span>
                                    </a>
                                  </div>
                                  <div className="property-agent">
                                    <a
                                      href="https://www.qsyrys.com/author/syrysgmail-com/"
                                      title="SYRYS GROUP"
                                    >
                                      {" "}
                                      <i className="fa fa-user"></i>
                                      <span>SYRYS GROUP</span>
                                    </a>{" "}
                                  </div>
                                  <div className="property-date">
                                    <i className="fa fa-calendar"></i>6 years
                                    ago{" "}
                                  </div>
                                </div>
                                <div className="property-excerpt">
                                  <p>
                                    Designed as a lifelong living space in
                                    Metehan, Nicosia and constructed in a 35
                                    thousand m2 central and spacious area,
                                    Intense residence consists of Residential
                                    blocks offering 21 shops and 114 flats with
                                    options of 1+1, 2+1, 3+1 and 24 Blocks of
                                    apartments with 6 of 3+1 luxury flats and 2
                                    of 2+1 penthouses. Offering […]
                                  </p>
                                </div>
                                <div className="property-info">
                                  <div className="property-info-inner">
                                    <div className="property-area">
                                      <div
                                        className="property-area-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Size"
                                      >
                                        <span className="fa fa-arrows"></span>
                                        <span className="property-info-value">
                                          158 m<sup>2</sup>{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bedrooms">
                                      <div
                                        className="property-bedrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="3 Bedrooms"
                                      >
                                        <span className="fa fa-hotel"></span>
                                        <span className="property-info-value">
                                          3
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bathrooms">
                                      <div
                                        className="property-bathrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="2 Bathrooms"
                                      >
                                        <span className="fa fa-bath"></span>
                                        <span className="property-info-value">
                                          2
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide className="item">
                          <div className="ere-item-wrap property-item ere-property-featured">
                            <div className="property-inner">
                              <div className="property-image">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="330"
                                  height="180"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/07/cover-330x180.jpg"
                                  alt="2+1 Peak View"
                                  title="2+1 Peak View"
                                />
                                <div className="property-action block-center">
                                  <div className="block-center-inner">
                                    <div
                                      className="property-view-gallery-wrap"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="(10) Photos"
                                    >
                                      <a
                                        data-property-id="605"
                                        href={"#"}
                                        className="property-view-gallery"
                                      >
                                        <i className="fa fa-camera"></i>
                                      </a>
                                    </div>
                                    <a
                                      href={"#"}
                                      className="property-favorite"
                                      data-property-id="605"
                                      data-toggle="tooltip"
                                      title=""
                                      data-title-not-favorite="Add to Favorite"
                                      data-title-favorited="It is my favorite"
                                      data-icon-not-favorite="fa fa-star-o"
                                      data-icon-favorited="fa fa-star"
                                      data-original-title="Add to Favorite"
                                    >
                                      <i className="fa fa-star-o"></i>
                                    </a>
                                    <a
                                      className="compare-property"
                                      href={"#"}
                                      data-property-id="605"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="Compare"
                                    >
                                      <i className="fa fa-plus"></i>
                                    </a>{" "}
                                  </div>
                                  <a
                                    className="property-link"
                                    href="https://www.qsyrys.com/property/villa-in-1800-ocean-front-walk-venice/"
                                    title="2+1 Peak View"
                                  ></a>
                                </div>
                                <div className="property-label property-featured">
                                  <p className="label-item">
                                    <span className="property-label-bg">
                                      Featured{" "}
                                      <span className="property-arrow"></span>
                                    </span>
                                  </p>
                                </div>
                                <div className="property-status">
                                  <p className="status-item">
                                    <span
                                      className="property-status-bg"
                                      style={{ backgroundColor: "#dd3333" }}
                                    >
                                      For Sale{" "}
                                      <span
                                        className="property-arrow"
                                        style={{
                                          borderLeftColor: "#dd3333",
                                          borderRightColor: "#dd3333",
                                        }}
                                      ></span>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="property-item-content">
                                <div className="property-heading">
                                  <h2 className="property-title">
                                    <a
                                      href="https://www.qsyrys.com/property/villa-in-1800-ocean-front-walk-venice/"
                                      title="2+1 Peak View"
                                    >
                                      2+1 Peak View
                                    </a>
                                  </h2>
                                  <div className="property-price">
                                    <span>
                                      95,000£{" "}
                                      <span className="property-price-postfix">
                                        {" "}
                                        / Year
                                      </span>{" "}
                                    </span>
                                  </div>
                                </div>
                                <div
                                  className="property-location"
                                  title="syrys investment ltd"
                                >
                                  <i className="fa fa-map-marker"></i>
                                  <a
                                    target="_blank"
                                    href="http://maps.google.com/?q=syrys%20investment%20ltd"
                                  >
                                    <span>syrys investment ltd</span>
                                  </a>
                                </div>
                                <div className="property-element-inline">
                                  <div className="property-type-list">
                                    <i className="fa fa-tag"></i>
                                    <a
                                      href="https://www.qsyrys.com/property-type/apartment/"
                                      title="Apartment"
                                    >
                                      <span>Apartment </span>
                                    </a>
                                  </div>
                                  <div className="property-agent">
                                    <a
                                      href="https://www.qsyrys.com/author/syrysgmail-com/"
                                      title="SYRYS GROUP"
                                    >
                                      {" "}
                                      <i className="fa fa-user"></i>
                                      <span>SYRYS GROUP</span>
                                    </a>{" "}
                                  </div>
                                  <div className="property-date">
                                    <i className="fa fa-calendar"></i>6 years
                                    ago{" "}
                                  </div>
                                </div>
                                <div className="property-excerpt">
                                  <p>
                                    The project is in the heart of Nicosia, the
                                    main advantage of the project is the view
                                    and the architectural difference as well as
                                    the value it adds to Nicosia as a city. The
                                    payment plan for the project is 30%
                                    down-payment and installment payment till
                                    the project is ready June 2023
                                  </p>
                                </div>
                                <div className="property-info">
                                  <div className="property-info-inner">
                                    <div className="property-area">
                                      <div
                                        className="property-area-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="Size"
                                      >
                                        <span className="fa fa-arrows"></span>
                                        <span className="property-info-value">
                                          94.6 m<sup>2</sup>{" "}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bedrooms">
                                      <div
                                        className="property-bedrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="2 Bedrooms"
                                      >
                                        <span className="fa fa-hotel"></span>
                                        <span className="property-info-value">
                                          2
                                        </span>
                                      </div>
                                    </div>
                                    <div className="property-bathrooms">
                                      <div
                                        className="property-bathrooms-inner property-info-item-tooltip"
                                        data-toggle="tooltip"
                                        title=""
                                        data-original-title="1 Bathroom"
                                      >
                                        <span className="fa fa-bath"></span>
                                        <span className="property-info-value">
                                          1
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>

                      {/* end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindAProperty;
