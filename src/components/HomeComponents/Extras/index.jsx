import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Extras = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-69011a0"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-ee85a43 elementor-widget elementor-widget-beyot-property-featured"
              data-id="ee85a43"
              data-element_type="widget"
              data-widget_type="beyot-property-featured.default"
            >
              <div className="elementor-widget-container">
                <div className="ube-property-featured">
                  <div className="ere-property-featured clearfix property-sync-carousel color-dark ">
                    <div className="property-sync-content-wrap row">
                      <div className="property-main-content col-lg-6 col-md-12">
                        <div className="main-content-inner py-[36.5px]">
                          <div className="">
                            <Swiper
                              spaceBetween={0}
                              slidesPerView={1}
                              navigation={{
                                prevEl: ".owl-prev",
                                nextEl: ".owl-next",
                              }}
                              modules={[Navigation]}
                              className="property-content-carousel owl-carousel manual ere-carousel-manual owl-loaded owl-drag"
                            >
                              <SwiperSlide className="item">
                                <div className="property-item">
                                  <div className="property-item-content">
                                    <div className="property-heading">
                                      <h2>
                                        <Link
                                          to="/property/a-city-penthouse/"
                                          title="A CITY PENTHOUSE"
                                        >
                                          A CITY PENTHOUSE
                                        </Link>
                                      </h2>
                                      <span className="property-price">
                                        372,000£{" "}
                                      </span>
                                      <div className="property-status">
                                        <span className="bg-[#dd3333]">
                                          For Sale
                                        </span>
                                      </div>
                                      <div
                                        className="property-location"
                                        title="SYRYS INVESTMENT LTD"
                                      >
                                        <i className="fa fa-map-marker"></i>
                                        <a
                                          target="_blank"
                                          to="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"
                                        >
                                          <span>SYRYS INVESTMENT LTD</span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="property-excerpt">
                                      <p>
                                        A CITY What makes the A City unique
                                        besides urban life is the futures that
                                        anticipate the needs, quality,
                                        respectable and reliable projects that
                                        create a difference, sensitive to the
                                        environment, with high brand value and
                                        walking distance to the bazaar, shopping
                                        malls, markets, schools not forgetting
                                        nature and amazing sea, mountain and
                                        city views. […]
                                      </p>
                                    </div>
                                    <div className="property-info">
                                      <div className="property-info-inner">
                                        <div className="property-id">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-barcode"></span>
                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                SYS654996
                                              </p>
                                              <p className="property-info-title">
                                                Property ID
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-area">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-arrows"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                376.7{" "}
                                                <span>
                                                  m<sup>2</sup>
                                                </span>
                                              </p>

                                              <p className="property-info-title">
                                                Size
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-bedrooms">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-hotel"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                3
                                              </p>

                                              <p className="property-info-title">
                                                Bedrooms
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-bathrooms">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-bath"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                3
                                              </p>

                                              <p className="property-info-title">
                                                Bathrooms
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>

                              <SwiperSlide className="item">
                                <div className="property-item">
                                  <div className="property-item-content">
                                    <div className="property-heading">
                                      <h2>
                                        <Link
                                          to="/property/11-a-city/"
                                          title="1+1 A CITY"
                                        >
                                          1+1 A CITY
                                        </Link>
                                      </h2>
                                      <span className="property-price">
                                        97,000£{" "}
                                      </span>
                                      <div className="property-status">
                                        <span className="bg-[#dd3333]">
                                          For Sale
                                        </span>
                                      </div>
                                      <div
                                        className="property-location"
                                        title="SYRYS INVESTMENT LTD"
                                      >
                                        <i className="fa fa-map-marker"></i>
                                        <Link
                                          target="_blank"
                                          to="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"
                                        >
                                          <span>SYRYS INVESTMENT LTD</span>
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="property-excerpt">
                                      <p>
                                        A CITY What makes the A City unique
                                        besides urban life is the futures that
                                        anticipate the needs, quality,
                                        respectable and reliable projects that
                                        create a difference, sensitive to the
                                        environment, with high brand value and
                                        walking distance to the bazaar, shopping
                                        malls, markets, schools not forgetting
                                        nature and amazing sea, mountain and
                                        city views. […]
                                      </p>
                                    </div>
                                    <div className="property-info">
                                      <div className="property-info-inner">
                                        <div className="property-id">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-barcode"></span>
                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                SYS654996
                                              </p>
                                              <p className="property-info-title">
                                                Property ID
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-area">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-arrows"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                61.6{" "}
                                                <span>
                                                  m<sup>2</sup>
                                                </span>
                                              </p>

                                              <p className="property-info-title">
                                                Size
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-bedrooms">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-hotel"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                1
                                              </p>

                                              <p className="property-info-title">
                                                Bedroom
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-bathrooms">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-bath"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                1
                                              </p>

                                              <p className="property-info-title">
                                                Bathroom
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide className="item">
                                <div className="property-item">
                                  <div className="property-item-content">
                                    <div className="property-heading">
                                      <h2>
                                        <Link
                                          to="/property/luxury-villa-with-an-amazing-view/"
                                          title="Luxury Villa with an amazing view"
                                        >
                                          Luxury Villa with an amazing view
                                        </Link>
                                      </h2>
                                      <span className="property-price">
                                        1,500,000£{" "}
                                      </span>
                                      <div className="property-status">
                                        <span className="text-[#dd3333]">
                                          For Sale
                                        </span>
                                      </div>
                                      <div
                                        className="property-location"
                                        title="Syrys Investment Ltd"
                                      >
                                        <i className="fa fa-map-marker"></i>
                                        <Link
                                          target="_blank"
                                          to="http://maps.google.com/?q=Syrys%20Investment%20Ltd"
                                        >
                                          <span>Syrys Investment Ltd</span>
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="property-excerpt">
                                      <p>
                                        5 Bedroom Luxury Villa 1 Bedroom Staff
                                        Apartment Private Office 2 Storage Rooms
                                        4 Car Underground Garage 15m x 5m
                                        Infinity Swimming Pool Private Elevator
                                        Pool with Window into Basement Private
                                        Gym Area, Home Office, Cinema Room,
                                        Sauna &amp; Hammam facilities Covered
                                        Roof Terrace with Hot tub, Roof terrace
                                        with Kitchen &amp; BBQ Area Hobby […]
                                      </p>
                                    </div>
                                    <div className="property-info">
                                      <div className="property-info-inner">
                                        <div className="property-id">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-barcode"></span>
                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                SYS677388
                                              </p>
                                              <p className="property-info-title">
                                                Property ID
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-area">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-arrows"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                773.97{" "}
                                                <span>
                                                  m<sup>2</sup>
                                                </span>
                                              </p>

                                              <p className="property-info-title">
                                                Size
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-bedrooms">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-hotel"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                6
                                              </p>

                                              <p className="property-info-title">
                                                Bedrooms
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-bathrooms">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-bath"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                7
                                              </p>

                                              <p className="property-info-title">
                                                Bathrooms
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide className="item active">
                                <div className="property-item">
                                  <div className="property-item-content">
                                    <div className="property-heading">
                                      <h2>
                                        <Link
                                          to="/property/single-house-los-angeles/"
                                          title="Seasons City in Cyprus"
                                        >
                                          Seasons City in Cyprus
                                        </Link>
                                      </h2>
                                      <span className="property-price">
                                        <span className="property-price-prefix">
                                          Starting from{" "}
                                        </span>{" "}
                                        165,000£{" "}
                                      </span>
                                      <div className="property-status">
                                        <span className="bg-[#dd3333]">
                                          For Sale
                                        </span>
                                      </div>
                                      <div
                                        className="property-location"
                                        title="Syrys Investment Ltd"
                                      >
                                        <i className="fa fa-map-marker"></i>
                                        <a
                                          target="_blank"
                                          to="http://maps.google.com/?q=Syrys%20Investment%20Ltd"
                                        >
                                          <span>Syrys Investment Ltd</span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="property-excerpt">
                                      <p>
                                        ARE YOU READY TO LIVE ON THE BEACH?
                                        SEASONS City, is the newest project
                                        presenting you a life situated right on
                                        the sea front. Established by four major
                                        companies with the rising value of
                                        investments in Northern Cyprus this
                                        projects offers a guaranteed partnership
                                        in NORTHERN CYPRUS. The project, which
                                        will be built on 76 […]
                                      </p>
                                    </div>
                                    <div className="property-info">
                                      <div className="property-info-inner">
                                        <div className="property-id">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-barcode"></span>
                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                SYS597262
                                              </p>
                                              <p className="property-info-title">
                                                Property ID
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-area">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-arrows"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                75{" "}
                                                <span>
                                                  m<sup>2</sup>
                                                </span>
                                              </p>

                                              <p className="property-info-title">
                                                Size
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-bedrooms">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-hotel"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                2
                                              </p>

                                              <p className="property-info-title">
                                                Bedrooms
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-bathrooms">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-bath"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                2
                                              </p>

                                              <p className="property-info-title">
                                                Bathrooms
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide className="item">
                                <div className="property-item">
                                  <div className="property-item-content">
                                    <div className="property-heading">
                                      <h2>
                                        <Link
                                          to="/property/restaurant-austin-tx-78702/"
                                          title="Dreamlike Homes in a complex"
                                        >
                                          Dreamlike Homes in a complex
                                        </Link>
                                      </h2>
                                      <span className="property-price">
                                        455,000£{" "}
                                      </span>
                                      <div className="property-status">
                                        <span className="bg-[#dd3333]">
                                          For Sale
                                        </span>
                                      </div>
                                      <div
                                        className="property-location"
                                        title="syrys investment ltd"
                                      >
                                        <i className="fa fa-map-marker"></i>
                                        <a
                                          target="_blank"
                                          to="http://maps.google.com/?q=syrys%20investment%20ltd"
                                        >
                                          <span>syrys investment ltd</span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="property-excerpt">
                                      <p>
                                        Dreams to live on island that embraces
                                        the shimmering blue Large windows and
                                        terraces opens to the most beautiful sea
                                        of the Mediterranean come true with
                                        Dreamlike Houses. This villas are
                                        located in the Kyrenia district and
                                        consist of 13 villas with private pool
                                        built on an area of 6843m2. A DREAMLIKE
                                        LIFE ON THE […]
                                      </p>
                                    </div>
                                    <div className="property-info">
                                      <div className="property-info-inner">
                                        <div className="property-id">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-barcode"></span>
                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                SYS884267
                                              </p>
                                              <p className="property-info-title">
                                                Property ID
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-area">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-arrows"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                348{" "}
                                                <span>
                                                  m<sup>2</sup>
                                                </span>
                                              </p>

                                              <p className="property-info-title">
                                                Size
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-bedrooms">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-hotel"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                5
                                              </p>

                                              <p className="property-info-title">
                                                Bedrooms
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-bathrooms">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-bath"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                4
                                              </p>

                                              <p className="property-info-title">
                                                Bathrooms
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide className="item">
                                <div className="property-item">
                                  <div className="property-item-content">
                                    <div className="property-heading">
                                      <h2>
                                        <Link
                                          to="/property/villa-4445-lamont-st-san-diego-ca-92109/"
                                          title="Zolive residential homes"
                                        >
                                          Zolive residential homes
                                        </Link>
                                      </h2>
                                      <span className="property-price">
                                        196,000£{" "}
                                      </span>
                                      <div className="property-status">
                                        <span className="bg-[#dd3333]">
                                          For Sale
                                        </span>
                                      </div>
                                      <div
                                        className="property-location"
                                        title="SYRYS Investment Ltd"
                                      >
                                        <i className="fa fa-map-marker"></i>
                                        <a
                                          target="_blank"
                                          to="http://maps.google.com/?q=SYRYS%20Investment%20Ltd"
                                        >
                                          <span>SYRYS Investment Ltd</span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="property-excerpt">
                                      <p>
                                        Our project, which is the closest to the
                                        center of Kyrenia and 50 meters away
                                        from the magnificent Zeytinlik Village
                                        center, reflects the historical texture
                                        of Kyrenia positioned among olive trees
                                        with a unique mountain and sea view. All
                                        olive trees on the land in the project
                                        have been preserved, and the trees that
                                        need […]
                                      </p>
                                    </div>
                                    <div className="property-info">
                                      <div className="property-info-inner">
                                        <div className="property-id">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-barcode"></span>
                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                SYS858224
                                              </p>
                                              <p className="property-info-title">
                                                Property ID
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-area">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-arrows"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                165{" "}
                                                <span>
                                                  m<sup>2</sup>
                                                </span>
                                              </p>

                                              <p className="property-info-title">
                                                Size
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-bedrooms">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-hotel"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                3
                                              </p>

                                              <p className="property-info-title">
                                                Bedrooms
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="property-bathrooms">
                                          <div className="property-info-item-inner">
                                            <span className="fa fa-bath"></span>

                                            <div className="content-property-info">
                                              <p className="property-info-value">
                                                3
                                              </p>

                                              <p className="property-info-title">
                                                Bathrooms
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            </Swiper>

                            {/* first carousel ends up */}
                          </div>
                        </div>
                      </div>
                      <div className="property-image-content col-lg-6 col-md-12">
                        <Swiper
                          spaceBetween={0}
                          slidesPerView={1}
                          navigation={{
                            prevEl: ".owl-prev",
                            nextEl: ".owl-next",
                          }}
                          modules={[Navigation]}
                          className="property-image-carousel owl-carousel manual ere-carousel-manual owl-loaded owl-drag"
                        >
                          <SwiperSlide className="item">
                            <div className="property-item">
                              <Link to="/property/a-city-penthouse/">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="945"
                                  height="605"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-1-6.jpg"
                                  alt="A CITY PENTHOUSE"
                                  title="A CITY PENTHOUSE"
                                />
                              </Link>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="item">
                            <div className="property-item">
                              <Link to="/property/11-a-city/">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="945"
                                  height="605"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-1-5-945x605.jpg"
                                  alt="1+1 A CITY"
                                  title="1+1 A CITY"
                                />
                              </Link>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="item">
                            <div className="property-item">
                              <Link to="/property/luxury-villa-with-an-amazing-view/">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="945"
                                  height="605"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-945x605.jpg"
                                  alt="Luxury Villa with an amazing view"
                                  title="Luxury Villa with an amazing view"
                                />
                              </Link>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="item current active">
                            <div className="property-item">
                              <Link to="/property/single-house-los-angeles/">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="945"
                                  height="605"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/06/Main-945x605.png"
                                  alt="Seasons City in Cyprus"
                                  title="Seasons City in Cyprus"
                                />
                              </Link>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="item">
                            <div className="property-item">
                              <Link to="/property/restaurant-austin-tx-78702/">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="945"
                                  height="605"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/06/cover-945x605.jpg"
                                  alt="Dreamlike Homes in a complex"
                                  title="Dreamlike Homes in a complex"
                                />
                              </Link>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="item">
                            <div className="property-item">
                              <Link to="/property/villa-4445-lamont-st-san-diego-ca-92109/">
                                <img
                                  decoding="async"
                                  loading="lazy"
                                  width="945"
                                  height="605"
                                  src="https://www.qsyrys.com/wp-content/uploads/2022/06/Zolive-945x605.jpg"
                                  alt="Zolive residential homes"
                                  title="Zolive residential homes"
                                />
                              </Link>
                            </div>
                          </SwiperSlide>

                          <div className="owl-nav z-50 absolute">
                            <div className="owl-prev">
                              <i className="fa fa-angle-left"></i>
                            </div>
                            <div className="owl-next">
                              <i className="fa fa-angle-right"></i>
                            </div>
                          </div>

                        </Swiper>

                        {/* ends here, from up */}
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
  );
};

export default Extras;
