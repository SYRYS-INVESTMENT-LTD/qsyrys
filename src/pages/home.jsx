import LanguageBar from "../components/HomeComponents/topbar/languagebar";
import NavigationBar from "../components/HomeComponents/topbar/navigationbar";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import {
  FaAngleLeft,
  FaAngleRight
} from "react-icons/fa";
import FindAProperty from "../components/HomeComponents/FindAProperty";
import OurAgents from "../components/HomeComponents/OurAgents";
import Extras from "../components/HomeComponents/Extras";
import Explore from "../components/HomeComponents/Explore";
import Tour from "../components/HomeComponents/Tour";
import ResidentApp from "../components/HomeComponents/ResidentApp";
import Footer from "../components/footer";
import { useEffect } from "react";

const Home = () => {

  const readjustNav = () => {
    const elem = document.querySelector(
      ".swiper-slide.swiper-slide-active .block-center-inner"
    );

    if (elem) {
      document.querySelector(".nav_items").style.top = (elem.offsetTop - 50) + "px";
    }
  }

  useEffect(() => {
    readjustNav();
  }, [])

  return (
    <div
      className="home page-template page-template-elementor_header_footer page page-id-58 wp-embed-responsive beyot-class chrome header-is-float header-sticky-fix-style elementor-default elementor-template-full-width elementor-kit-4695 elementor-page elementor-page-58 e--ua-blink e--ua-chrome e--ua-webkit elementor elementor-58"
      id="wrapper"
    >
      <LanguageBar />
      <NavigationBar />

      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-f726b1 elementor-section-full_width elementor-section-stretched elementor-section-height-full elementor-section-items-stretch elementor-section-height-default w-[545px] left-0"
        data-id="f726b1"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-no">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-34bcb99c"
            data-id="34bcb99c"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-147d8370 elementor-widget elementor-widget-beyot-property-slider"
                data-element_type="widget"
                data-widget_type="beyot-property-slider.default"
              >
                <div className="elementor-widget-container">
                  <div className="ube-property-slider">
                    <div className="ere-property-wrap">
                      <div className="ere-property-slider clearfix navigation-middle ">
                        <Swiper
                          spaceBetween={0}
                          slidesPerView={1}
                          grabCursor={true}
                          pagination={{ clickable: true }}
                          autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                          }}
                          navigation={{
                            prevEl: ".prev_item",
                            nextEl: ".next_item",
                          }}
                          modules={[Navigation, Autoplay]}
                          className="property-content owl-carousel manual owl-loaded owl-drag"
                          onSwiper={(swiper) => readjustNav()}
                          

                        >
                          <SwiperSlide className="item">
                            <div className="property-item scale-100 opacity-100">
                              <div className="property-inner">
                                <div className="property-image">
                                  <img
                                    decoding="async"
                                    width="1200"
                                    height="600"
                                    src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-1-5.jpg"
                                    alt="1+1 A CITY"
                                    title="1+1 A CITY"
                                  />
                                </div>
                                <div className="block-center container">
                                  <div className="block-center-inner">
                                    <div className="property-main-info">
                                      <div className="property-heading">
                                        <h2>
                                          <a
                                            href="https://www.qsyrys.com/property/11-a-city/"
                                            title="1+1 A CITY"
                                          >
                                            1+1 A CITY
                                          </a>
                                        </h2>
                                        <div className="property-info-block-inline">
                                          <div>
                                            <span className="property-price">
                                              97,000£
                                            </span>
                                            <div className="property-status">
                                              <span className="bg-[#dd3333]">
                                                For Sale
                                              </span>
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
                                        </div>
                                      </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="property-info">
                                      <div className="property-area">
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
                                      <div className="property-bedrooms">
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
                                      <div className="property-bathrooms">
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
                            <div className="property-item scale-100 opacity-100">
                              <div className="property-inner">
                                <div className="property-image">
                                  <img
                                    decoding="async"
                                    loading="lazy"
                                    width="1200"
                                    height="600"
                                    src="https://www.qsyrys.com/wp-content/uploads/2022/07/1.jpg"
                                    alt="Luxury Villa with an amazing view"
                                    title="Luxury Villa with an amazing view"
                                  />
                                </div>
                                <div className="block-center container">
                                  <div className="block-center-inner">
                                    <div className="property-main-info">
                                      <div className="property-heading">
                                        <h2>
                                          <a
                                            href="https://www.qsyrys.com/property/luxury-villa-with-an-amazing-view/"
                                            title="Luxury Villa with an amazing view"
                                          >
                                            Luxury Villa with an amazing view
                                          </a>
                                        </h2>
                                        <div className="property-info-block-inline">
                                          <div>
                                            <span className="property-price">
                                              1,500,000£{" "}
                                            </span>
                                            <div className="property-status">
                                              <span className="bg-[#dd3333]">
                                                For Sale
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
                                        </div>
                                      </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="property-info">
                                      <div className="property-area">
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
                                      <div className="property-bedrooms">
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
                                      <div className="property-bathrooms">
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
                          <SwiperSlide className="item">
                            <div className="property-item scale-100 opacity-100">
                              <div className="property-inner">
                                <div className="property-image">
                                  <img
                                    decoding="async"
                                    loading="lazy"
                                    width="1200"
                                    height="600"
                                    src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-1-6.jpg"
                                    alt="A CITY PENTHOUSE"
                                    title="A CITY PENTHOUSE"
                                  />
                                </div>
                                <div className="block-center container">
                                  <div className="block-center-inner">
                                    <div className="property-main-info">
                                      <div className="property-heading">
                                        <h2>
                                          <a
                                            href="https://www.qsyrys.com/property/a-city-penthouse/"
                                            title="A CITY PENTHOUSE"
                                          >
                                            A CITY PENTHOUSE
                                          </a>
                                        </h2>
                                        <div className="property-info-block-inline">
                                          <div>
                                            <span className="property-price">
                                              372,000£{" "}
                                            </span>
                                            <div className="property-status">
                                              <span className="bg-[#dd3333]">
                                                For Sale
                                              </span>
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
                                        </div>
                                      </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="property-info">
                                      <div className="property-area">
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
                                      <div className="property-bedrooms">
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
                                      <div className="property-bathrooms">
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
                            <div className="property-item scale-100 opacity-100">
                              <div className="property-inner">
                                <div className="property-image">
                                  <img
                                    decoding="async"
                                    loading="lazy"
                                    width="1200"
                                    height="600"
                                    src="https://www.qsyrys.com/wp-content/uploads/2022/06/Main.png"
                                    alt="Seasons City in Cyprus"
                                    title="Seasons City in Cyprus"
                                  />
                                </div>
                                <div className="block-center container">
                                  <div className="block-center-inner">
                                    <div className="property-main-info">
                                      <div className="property-heading">
                                        <h2>
                                          <a
                                            href="https://www.qsyrys.com/property/single-house-los-angeles/"
                                            title="Seasons City in Cyprus"
                                          >
                                            Seasons City in Cyprus
                                          </a>
                                        </h2>
                                        <div className="property-info-block-inline">
                                          <div>
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
                                        </div>
                                      </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="property-info">
                                      <div className="property-area">
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
                                      <div className="property-bedrooms">
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
                                      <div className="property-bathrooms">
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
                            <div className="property-item scale-100 opacity-100">
                              <div className="property-inner">
                                <div className="property-image">
                                  <img
                                    decoding="async"
                                    loading="lazy"
                                    width="1200"
                                    height="600"
                                    src="https://www.qsyrys.com/wp-content/uploads/2022/06/cover-1.jpg"
                                    alt="4+1 Luxury villa in a residence"
                                    title="4+1 Luxury villa in a residence"
                                  />
                                </div>
                                <div className="block-center container">
                                  <div className="block-center-inner">
                                    <div className="property-main-info">
                                      <div className="property-heading">
                                        <h2>
                                          <a
                                            href="https://www.qsyrys.com/property/apartment-morden-santa-monica-los-angeles/"
                                            title="4+1 Luxury villa in a residence"
                                          >
                                            4+1 Luxury villa in a residence
                                          </a>
                                        </h2>
                                        <div className="property-info-block-inline">
                                          <div>
                                            <span className="property-price">
                                              380,000£{" "}
                                            </span>
                                            <div className="property-status">
                                              <span className="bg-[#dd3333]">
                                                For Sale
                                              </span>
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
                                        </div>
                                      </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="property-info">
                                      <div className="property-area">
                                        <span className="fa fa-arrows"></span>
                                        <div className="content-property-info">
                                          <p className="property-info-value">
                                            290{" "}
                                            <span>
                                              m<sup>2</sup>
                                            </span>
                                          </p>
                                          <p className="property-info-title">
                                            Size
                                          </p>
                                        </div>
                                      </div>
                                      <div className="property-bedrooms">
                                        <span className="fa fa-hotel"></span>
                                        <div className="content-property-info">
                                          <p className="property-info-value">
                                            4
                                          </p>
                                          <p className="property-info-title">
                                            Bedrooms
                                          </p>
                                        </div>
                                      </div>
                                      <div className="property-bathrooms">
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
                          <SwiperSlide className="item active">
                            <div className="property-item scale-100 opacity-100">
                              <div className="property-inner">
                                <div className="property-image">
                                  <img
                                    decoding="async"
                                    loading="lazy"
                                    width="1200"
                                    height="674"
                                    src="https://www.qsyrys.com/wp-content/uploads/2022/06/cover.jpg"
                                    alt="Dreamlike Homes in a complex"
                                    title="Dreamlike Homes in a complex"
                                  />
                                </div>
                                <div className="block-center container">
                                  <div className="block-center-inner">
                                    <div className="property-main-info">
                                      <div className="property-heading">
                                        <h2>
                                          <a
                                            href="https://www.qsyrys.com/property/restaurant-austin-tx-78702/"
                                            title="Dreamlike Homes in a complex"
                                          >
                                            Dreamlike Homes in a complex
                                          </a>
                                        </h2>
                                        <div className="property-info-block-inline">
                                          <div>
                                            <span className="property-price">
                                              455,000£{" "}
                                            </span>
                                            <div className="property-status">
                                              <span className="bg-[#dd3333]">
                                                For Sale
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
                                        </div>
                                      </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div className="property-info">
                                      <div className="property-area">
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
                                      <div className="property-bedrooms">
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
                                      <div className="property-bathrooms">
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

                          <div className="flex right-0 top-[200px] left-0 absolute m-auto pl-[15px] nav_items items-center container z-30">
                            <div className="prev_item flex items-center justify-center w-[50px] h-[60px] bg-[#624615] relative text-[#f6f6f6] cursor-pointer after:content-[''] after:block after:top-0 after:bottom-0 after:transition-all after:absolute after:delay-300 after:border-solid after:border-t-[60px] after:border-r-[10px] after:border-b-0 after:border-b-transparent after:border-r-transparent after:border-t-[#f6f6f6] after:left-[50px]">
                              <FaAngleLeft size={25} />
                            </div>
                            <div className="next_item w-[50px] flex items-center justify-center h-[60px] bg-[#f6f6f6] relative text-[#624615] after:border-b-solid after:border-b-[#f6f6f6] after:border-b-[60px] after:border-l-solid after:border-l-transparent after:border-l-[10px] after:content-[''] after:block after:top-0 after:bottom-0 after:transition-all after:delay-300 after:border-t-0 after:border-t-solid after:right-[50px] after:absolute cursor-pointer">
                              <FaAngleRight size={25} />
                            </div>
                          </div>
                        </Swiper>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-400c5702 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="400c5702"
        data-element_type="section"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-612d8362"
            data-id="612d8362"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-4962bebb elementor-widget elementor-widget-text-editor"
                data-id="4962bebb"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div className="elementor-widget-container">
                  <p className="hd-subtitle-spec">GET YOUR</p>
                  <h2 className="hd-title-spec">
                    <span className="fl-accent">DREAM</span>
                    <span className="fl-accent">HOUSE</span>
                  </h2>{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-350a993f bg-dark-left"
            data-id="350a993f"
            data-element_type="column"
            data-settings='{"background_background":"classic"}'
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-63570ef1 elementor-widget elementor-widget-beyot-property-search"
                data-id="63570ef1"
                data-element_type="widget"
                data-widget_type="beyot-property-search.default"
              >
                <div className="elementor-widget-container">
                  <div className="ube-search-properties">
                    <div
                      data-options='{"ajax_url":"\/wp-admin\/admin-ajax.php","price_is_slider":"","enable_filter_location":"1"}'
                      className="ere-search-properties clearfix ere-show-status-tab style-default color-light "
                    >
                      <div className="form-search-wrap">
                        <div className="form-search-inner">
                          <div className="ere-search-content">
                            <div
                              data-href="https://www.qsyrys.com/advanced-search/"
                              className="search-properties-form"
                            >
                              <div className="ere-search-status-tab">
                                <input
                                  className="search-field"
                                  type="hidden"
                                  name="status"
                                  value="for-rent"
                                  data-default-value=""
                                />
                                <button
                                  type="button"
                                  data-value="for-rent"
                                  className="btn-status-filter active"
                                >
                                  For Rent
                                </button>
                                <button
                                  type="button"
                                  data-value="for-sale"
                                  className="btn-status-filter"
                                >
                                  For Sale
                                </button>
                              </div>
                              <div className="row">
                                <div className="col-lg-4 col-md-6 col-12 form-group">
                                  <select
                                    name="type"
                                    title="Property Types"
                                    className="search-field form-control"
                                    data-default-value=""
                                  >
                                    <option value="apartment">Apartment</option>
                                    <option value="bungalow">Bungalow</option>
                                    <option value="detached-villa">
                                      Detached Villa
                                    </option>
                                    <option value="hotel">Hotel</option>
                                    <option value="house">House</option>
                                    <option value="land">Land</option>
                                    <option value="office">Office</option>
                                    <option value="penthouse">Penthouse</option>
                                    <option value="residential-complex">
                                      Residential Complex
                                    </option>
                                    <option value="restaurant">
                                      Restaurant
                                    </option>
                                    <option value="semi-detached-villa">
                                      Semi Detached Villa
                                    </option>
                                    <option value="shop">Shop</option>
                                    <option value="studio">Studio</option>
                                    <option value="twin-villa">
                                      Twin Villa
                                    </option>
                                    <option value="villa">Villa</option>{" "}
                                    <option value="" selected="selected">
                                      All Types{" "}
                                    </option>
                                  </select>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 form-group">
                                  <select
                                    name="bedrooms"
                                    title="Property Bedrooms"
                                    className="search-field form-control"
                                    data-default-value=""
                                  >
                                    <option value="">Any Bedrooms </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                  </select>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 form-group">
                                  <select
                                    name="bathrooms"
                                    title="Property Bathrooms"
                                    className="search-field form-control"
                                    data-default-value=""
                                  >
                                    <option value="">Any Bathrooms </option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                  </select>
                                </div>{" "}
                                <div className="col-lg-2 col-md-3 col-12 form-group">
                                  <select
                                    name="min-price"
                                    title="Min Price"
                                    className="search-field form-control"
                                    data-default-value=""
                                  >
                                    <option value="">Min Price </option>
                                    <option value="200">200£</option>
                                    <option value=" 400">400£</option>
                                    <option value=" 600">600£</option>
                                    <option value=" 800">800£</option>
                                    <option value=" 1000">1,000£</option>
                                    <option value=" 1500">1,500£</option>
                                    <option value=" 2000">2,000£</option>
                                    <option value=" 3000">3,000£</option>
                                    <option value=" 5000">5,000£</option>
                                  </select>
                                </div>
                                <div className="col-lg-2 col-md-3 col-12 form-group">
                                  <select
                                    name="max-price"
                                    title="Max Price"
                                    className="search-field form-control"
                                    data-default-value=""
                                  >
                                    <option value="">Max Price </option>
                                    <option value="500">500£</option>
                                    <option value=" 700">700£</option>
                                    <option value=" 1000">1,000£</option>
                                    <option value=" 1200">1,200£</option>
                                    <option value=" 1500">1,500£</option>
                                    <option value=" 2000">2,000£</option>
                                    <option value=" 5000">5,000£</option>
                                  </select>
                                </div>
                                <div className="col-lg-2 col-md-3 col-12 form-group">
                                  <select
                                    name="min-area"
                                    title="Min Size"
                                    className="search-field form-control"
                                    data-default-value=""
                                  >
                                    <option value="">Min Size </option>
                                    <option value="0">0 m2</option>
                                    <option value="100">100 m2</option>
                                    <option value="300">300 m2</option>
                                    <option value="500">500 m2</option>
                                    <option value="700">700 m2</option>
                                    <option value="900">900 m2</option>
                                    <option value="1100">1,100 m2</option>
                                    <option value="1300">1,300 m2</option>
                                    <option value="1500">1,500 m2</option>
                                    <option value="1700">1,700 m2</option>
                                    <option value="1900">1,900 m2</option>
                                  </select>
                                </div>
                                <div className="col-lg-2 col-md-3 col-12 form-group">
                                  <select
                                    name="max-area"
                                    title="Max Size"
                                    className="search-field form-control"
                                    data-default-value=""
                                  >
                                    <option value="">Max Size </option>
                                    <option value="200">200 m2</option>
                                    <option value="400">400 m2</option>
                                    <option value="600">600 m2</option>
                                    <option value="800">800 m2</option>
                                    <option value="1000">1,000 m2</option>
                                    <option value="1200">1,200 m2</option>
                                    <option value="1400">1,400 m2</option>
                                    <option value="1600">1,600 m2</option>
                                    <option value="1800">1,800 m2</option>
                                    <option value="2000">2,000 m2</option>
                                  </select>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 form-group">
                                  <input
                                    type="text"
                                    className="ere-property-identity form-control search-field"
                                    data-default-value=""
                                    value=""
                                    name="property_identity"
                                    placeholder="Property ID"
                                  />
                                </div>{" "}
                                <div className="col-lg-4 col-md-6 col-12 form-group submit-search-form pull-right">
                                  <button
                                    type="button"
                                    className="ere-advanced-search-btn"
                                  >
                                    <i className="fa fa-search"></i>
                                    Search{" "}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
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

      {/* <!-- Property Cities --> */}
      <FindAProperty />

      {/* <!-- Property Agents --> */}
      <OurAgents />

      {/* extras */}

      <Extras />

      {/* Explore */}

      <Explore />

      {/* find your property */}

      <Tour />

      {/* download mobile app */}

      <ResidentApp />

      {/* footer */}

      <Footer />
    </div>
  );
};

export default Home;
