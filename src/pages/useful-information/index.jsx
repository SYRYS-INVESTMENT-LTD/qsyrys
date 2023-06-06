import { MetaTags } from "react-meta-tags";
import "../../assets/css/useful.css";
import LanguageBar from "../../components/HomeComponents/topbar/languagebar";
import NavigationBar from "../../components/HomeComponents/topbar/navigationbar";
import BaseUsefulComponent from "../../components/usefulComponents/base";
import UsefullProgress from "../../components/usefulComponents/progress";
import Quicklinks from "../../components/usefulComponents/quicklinks";
import { Link } from "react-router-dom";

const UsefulInformation = () => {
  return (
    <>
      <MetaTags>
        <title>Useful Information | Property Investment</title>
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
            <div className="elementor elementor-8461" id="8461">
              <BaseUsefulComponent />

              <UsefullProgress />

              <Quicklinks />

              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-62cbd40354efb elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="62cbd40354efb"
                data-element_type="section"
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f226cd4"
                    data-id="f226cd4"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div
                        className="elementor-element elementor-element-03dfb44 g5plus-heading style1 text-center elementor-widget elementor-widget-ube-heading"
                        data-id="03dfb44"
                        data-element_type="widget"
                        data-widget_type="ube-heading.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="ube-heading">
                            <h6 className="ube-heading-sub-title">
                              <span></span>
                              BROSWE OUR DREAM HOUSE
                            </h6>
                            <h2 className="ube-heading-title">
                              BROWSE LATEST PROPERTIES
                            </h2>
                          </div>{" "}
                        </div>
                      </div>
                      <div
                        className="elementor-element elementor-element-13de47c elementor-widget elementor-widget-beyot-property"
                        data-id="13de47c"
                        data-element_type="widget"
                        data-widget_type="beyot-property.default"
                      >
                        <div className="elementor-widget-container">
                          <div className="ube-property">
                            <div className="ere-property-wrap">
                              <div className="ere-property clearfix property-grid  col-gap-30">
                                <div style={{
                                    columns: "unset"
                                }} className="property-content columns-3 columns-md-3 columns-sm-2 columns-xs-1 columns-mb-1">
                                  <div className="ere-item-wrap property-item mg-bottom-30 ere-property-featured">
                                    <div className="property-inner">
                                      <div className="property-image">
                                        <img
                                          decoding="async"
                                          width="710"
                                          height="387"
                                          src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-1-5-710x387.jpg"
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
                                              <Link
                                                data-property-id="8381"
                                                href="javascript:void(0)"
                                                className="property-view-gallery"
                                              >
                                                <i className="fa fa-camera"></i>
                                              </Link>
                                            </div>
                                            <Link
                                              href="javascript:void(0)"
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
                                            </Link>
                                            <Link
                                              className="compare-property"
                                              href="javascript:void(0)"
                                              data-property-id="8381"
                                              data-toggle="tooltip"
                                              title=""
                                              data-original-title="Compare"
                                            >
                                              <i className="fa fa-plus"></i>
                                            </Link>{" "}
                                          </div>
                                          <Link
                                            className="property-link"
                                            href="/property/11-a-city/"
                                            title="1+1 A CITY"
                                          ></Link>
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
                                            <span className="property-status-bg bg-[#dd3333]">
                                              For Sale{" "}
                                              <span className="property-arrow border-l-[#dd3333] border-r-[#dd3333]"></span>
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="property-item-content">
                                        <div className="property-heading">
                                          <h2 className="property-title">
                                            <Link
                                              href="/property/11-a-city/"
                                              title="1+1 A CITY"
                                            >
                                              1+1 A CITY
                                            </Link>
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
                                          <Link
                                            target="_blank"
                                            href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"
                                          >
                                            <span>SYRYS INVESTMENT LTD</span>
                                          </Link>
                                        </div>
                                        <div className="property-element-inline">
                                          <div className="property-type-list">
                                            <i className="fa fa-tag"></i>
                                            <Link
                                              href="https://www.qsyrys.com/property-type/residential-complex/"
                                              title="Residential Complex"
                                            >
                                              <span>Residential Complex </span>
                                            </Link>
                                          </div>
                                          <div className="property-agent">
                                            <Link
                                              href="https://www.qsyrys.com/author/syrysgmail-com/"
                                              title="SYRYS GROUP"
                                            >
                                              {" "}
                                              <i className="fa fa-user"></i>
                                              <span>SYRYS GROUP</span>
                                            </Link>{" "}
                                          </div>
                                          <div className="property-date">
                                            <i className="fa fa-calendar"></i>
                                            11 months ago{" "}
                                          </div>
                                        </div>
                                        <div className="property-excerpt">
                                          <p>
                                            A CITY What makes the A City unique
                                            besides urban life is the futures
                                            that anticipate the needs, quality,
                                            respectable and reliable projects
                                            that create a difference, sensitive
                                            to the environment, with high brand
                                            value and walking distance to the
                                            bazaar, shopping malls, markets,
                                            schools not forgetting nature and
                                            amazing sea, mountain and city
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
                                  </div>{" "}
                                  <div className="ere-item-wrap property-item mg-bottom-30 ere-property-featured">
                                    <div className="property-inner">
                                      <div className="property-image">
                                        <img
                                          decoding="async"
                                          loading="lazy"
                                          width="710"
                                          height="387"
                                          src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-710x387.jpg"
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
                                              <Link
                                                data-property-id="7424"
                                                href="javascript:void(0)"
                                                className="property-view-gallery"
                                              >
                                                <i className="fa fa-camera"></i>
                                              </Link>
                                            </div>
                                            <Link
                                              href="javascript:void(0)"
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
                                            </Link>
                                            <Link
                                              className="compare-property"
                                              href="javascript:void(0)"
                                              data-property-id="7424"
                                              data-toggle="tooltip"
                                              title=""
                                              data-original-title="Compare"
                                            >
                                              <i className="fa fa-plus"></i>
                                            </Link>{" "}
                                          </div>
                                          <Link
                                            className="property-link"
                                            href="/property/luxury-villa-with-an-amazing-view/"
                                            title="Luxury Villa with an amazing view"
                                          ></Link>
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
                                            <span className="property-status-bg bg-[#dd3333]">
                                              For Sale{" "}
                                              <span className="property-arrow border-l-[#dd3333] border-r-[#dd3333]"></span>
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="property-item-content">
                                        <div className="property-heading">
                                          <h2 className="property-title">
                                            <Link
                                              href="/property/luxury-villa-with-an-amazing-view/"
                                              title="Luxury Villa with an amazing view"
                                            >
                                              Luxury Villa with an amazing view
                                            </Link>
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
                                          <Link
                                            target="_blank"
                                            href="http://maps.google.com/?q=Syrys%20Investment%20Ltd"
                                          >
                                            <span>Syrys Investment Ltd</span>
                                          </Link>
                                        </div>
                                        <div className="property-element-inline">
                                          <div className="property-type-list">
                                            <i className="fa fa-tag"></i>
                                            <Link
                                              href="https://www.qsyrys.com/property-type/detached-villa/"
                                              title="Detached Villa"
                                            >
                                              <span>Detached Villa </span>
                                            </Link>
                                            <Link
                                              href="https://www.qsyrys.com/property-type/villa/"
                                              title="Villa"
                                            >
                                              <span>Villa </span>
                                            </Link>
                                          </div>
                                          <div className="property-agent">
                                            <Link
                                              href="/author/syrysgmail-com/"
                                              title="SYRYS GROUP"
                                            >
                                              {" "}
                                              <i className="fa fa-user"></i>
                                              <span>SYRYS GROUP</span>
                                            </Link>{" "}
                                          </div>
                                          <div className="property-date">
                                            <i className="fa fa-calendar"></i>
                                            12 months ago{" "}
                                          </div>
                                        </div>
                                        <div className="property-excerpt">
                                          <p>
                                            5 Bedroom Luxury Villa 1 Bedroom
                                            Staff Apartment Private Office 2
                                            Storage Rooms 4 Car Underground
                                            Garage 15m x 5m Infinity Swimming
                                            Pool Private Elevator Pool with
                                            Window into Basement Private Gym
                                            Area, Home Office, Cinema Room,
                                            Sauna &amp; Hammam facilities
                                            Covered Roof Terrace with Hot tub,
                                            Roof terrace with Kitchen &amp; BBQ
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
                                  </div>{" "}
                                  <div className="ere-item-wrap property-item mg-bottom-30 ere-property-featured">
                                    <div className="property-inner">
                                      <div className="property-image">
                                        <img
                                          decoding="async"
                                          loading="lazy"
                                          width="710"
                                          height="387"
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
                                              <Link
                                                data-property-id="8404"
                                                href="javascript:void(0)"
                                                className="property-view-gallery"
                                              >
                                                <i className="fa fa-camera"></i>
                                              </Link>
                                            </div>
                                            <Link
                                              href="javascript:void(0)"
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
                                            </Link>
                                            <Link
                                              className="compare-property"
                                              href="javascript:void(0)"
                                              data-property-id="8404"
                                              data-toggle="tooltip"
                                              title=""
                                              data-original-title="Compare"
                                            >
                                              <i className="fa fa-plus"></i>
                                            </Link>{" "}
                                          </div>
                                          <Link
                                            className="property-link"
                                            href="/property/a-city-penthouse/"
                                            title="A CITY PENTHOUSE"
                                          ></Link>
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
                                            <span className="property-status-bg bg-[#dd3333]">
                                              For Sale{" "}
                                              <span className="property-arrow border-l-[#dd3333] border-r-[#dd3333]"></span>
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="property-item-content">
                                        <div className="property-heading">
                                          <h2 className="property-title">
                                            <Link
                                              href="https://www.qsyrys.com/property/a-city-penthouse/"
                                              title="A CITY PENTHOUSE"
                                            >
                                              A CITY PENTHOUSE
                                            </Link>
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
                                          <Link
                                            target="_blank"
                                            href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"
                                          >
                                            <span>SYRYS INVESTMENT LTD</span>
                                          </Link>
                                        </div>
                                        <div className="property-element-inline">
                                          <div className="property-type-list">
                                            <i className="fa fa-tag"></i>
                                            <Link
                                              href="/property-type/penthouse/"
                                              title="Penthouse"
                                            >
                                              <span>Penthouse </span>
                                            </Link>
                                          </div>
                                          <div className="property-agent">
                                            <Link
                                              href="author/syrysgmail-com/"
                                              title="SYRYS GROUP"
                                            >
                                              {" "}
                                              <i className="fa fa-user"></i>
                                              <span>SYRYS GROUP</span>
                                            </Link>{" "}
                                          </div>
                                          <div className="property-date">
                                            <i className="fa fa-calendar"></i>
                                            11 months ago{" "}
                                          </div>
                                        </div>
                                        <div className="property-excerpt">
                                          <p>
                                            A CITY What makes the A City unique
                                            besides urban life is the futures
                                            that anticipate the needs, quality,
                                            respectable and reliable projects
                                            that create a difference, sensitive
                                            to the environment, with high brand
                                            value and walking distance to the
                                            bazaar, shopping malls, markets,
                                            schools not forgetting nature and
                                            amazing sea, mountain and city
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
                                  </div>{" "}
                                  <div className="ere-item-wrap property-item mg-bottom-30 ere-property-featured">
                                    <div className="property-inner">
                                      <div className="property-image">
                                        <img
                                          decoding="async"
                                          loading="lazy"
                                          width="710"
                                          height="387"
                                          src="https://www.qsyrys.com/wp-content/uploads/2022/06/Main-710x387.png"
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
                                              <Link
                                                data-property-id="771"
                                                href="javascript:void(0)"
                                                className="property-view-gallery"
                                              >
                                                <i className="fa fa-camera"></i>
                                              </Link>
                                            </div>
                                            <Link
                                              href="javascript:void(0)"
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
                                            </Link>
                                            <Link
                                              className="compare-property"
                                              href="javascript:void(0)"
                                              data-property-id="771"
                                              data-toggle="tooltip"
                                              title=""
                                              data-original-title="Compare"
                                            >
                                              <i className="fa fa-plus"></i>
                                            </Link>{" "}
                                          </div>
                                          <Link
                                            className="property-link"
                                            href="/property/single-house-los-angeles/"
                                            title="Seasons City in Cyprus"
                                          ></Link>
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
                                            <span className="property-status-bg bg-[#dd3333]">
                                              For Sale{" "}
                                              <span
                                                className="property-arrow border-l-[#dd3333] border-r-[#dd3333]"
                                              ></span>
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="property-item-content">
                                        <div className="property-heading">
                                          <h2 className="property-title">
                                            <Link
                                              href="/property/single-house-los-angeles/"
                                              title="Seasons City in Cyprus"
                                            >
                                              Seasons City in Cyprus
                                            </Link>
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
                                          <Link
                                            target="_blank"
                                            href="http://maps.google.com/?q=Syrys%20Investment%20Ltd"
                                          >
                                            <span>Syrys Investment Ltd</span>
                                          </Link>
                                        </div>
                                        <div className="property-element-inline">
                                          <div className="property-type-list">
                                            <i className="fa fa-tag"></i>
                                            <Link
                                              href="/property-type/residential-complex/"
                                              title="Residential Complex"
                                            >
                                              <span>Residential Complex </span>
                                            </Link>
                                          </div>
                                          <div className="property-agent">
                                            <Link
                                              href="/author/syrysgmail-com/"
                                              title="SYRYS GROUP"
                                            >
                                              {" "}
                                              <i className="fa fa-user"></i>
                                              <span>SYRYS GROUP</span>
                                            </Link>{" "}
                                          </div>
                                          <div className="property-date">
                                            <i className="fa fa-calendar"></i>6
                                            years ago{" "}
                                          </div>
                                        </div>
                                        <div className="property-excerpt">
                                          <p>
                                            ARE YOU READY TO LIVE ON THE BEACH?
                                            SEASONS City, is the newest project
                                            presenting you a life situated right
                                            on the sea front. Established by
                                            four major companies with the rising
                                            value of investments in Northern
                                            Cyprus this projects offers a
                                            guaranteed partnership in NORTHERN
                                            CYPRUS. The project, which will be
                                            built on 76 […]
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
                                  </div>{" "}
                                  <div className="ere-item-wrap property-item mg-bottom-30 ere-property-featured">
                                    <div className="property-inner">
                                      <div className="property-image">
                                        <img
                                          decoding="async"
                                          loading="lazy"
                                          width="710"
                                          height="387"
                                          src="https://www.qsyrys.com/wp-content/uploads/2022/06/cover-1-710x387.jpg"
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
                                              <Link
                                                data-property-id="768"
                                                href="javascript:void(0)"
                                                className="property-view-gallery"
                                              >
                                                <i className="fa fa-camera"></i>
                                              </Link>
                                            </div>
                                            <Link
                                              href="javascript:void(0)"
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
                                            </Link>
                                            <Link
                                              className="compare-property"
                                              href="javascript:void(0)"
                                              data-property-id="768"
                                              data-toggle="tooltip"
                                              title=""
                                              data-original-title="Compare"
                                            >
                                              <i className="fa fa-plus"></i>
                                            </Link>{" "}
                                          </div>
                                          <Link
                                            className="property-link"
                                            href="/property/apartment-morden-santa-monica-los-angeles/"
                                            title="4+1 Luxury villa in a residence"
                                          ></Link>
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
                                            <span className="property-status-bg bg-[#dd3333]">
                                              For Sale{" "}
                                              <span className="property-arrow border-l-[#dd3333] border-r-[#dd3333]"></span>
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="property-item-content">
                                        <div className="property-heading">
                                          <h2 className="property-title">
                                            <Link
                                              href="/property/apartment-morden-santa-monica-los-angeles/"
                                              title="4+1 Luxury villa in a residence"
                                            >
                                              4+1 Luxury villa in a residence
                                            </Link>
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
                                          <Link
                                            target="_blank"
                                            href="http://maps.google.com/?q=SYRYS%20Investment%20Ltd"
                                          >
                                            <span>SYRYS Investment Ltd</span>
                                          </Link>
                                        </div>
                                        <div className="property-element-inline">
                                          <div className="property-type-list">
                                            <i className="fa fa-tag"></i>
                                            <Link
                                              href="/property-type/villa/"
                                              title="Villa"
                                            >
                                              <span>Villa </span>
                                            </Link>
                                          </div>
                                          <div className="property-agent">
                                            <Link
                                              href="/author/syrysgmail-com/"
                                              title="SYRYS GROUP"
                                            >
                                              {" "}
                                              <i className="fa fa-user"></i>
                                              <span>SYRYS GROUP</span>
                                            </Link>{" "}
                                          </div>
                                          <div className="property-date">
                                            <i className="fa fa-calendar"></i>6
                                            years ago{" "}
                                          </div>
                                        </div>
                                        <div className="property-excerpt">
                                          <p>
                                            A Privileged Life This project,
                                            where all the beauties of Ozanköy
                                            come together, is named after Murat
                                            Efendi, the unforgettable figure of
                                            this region (Murat Hüseyin), who
                                            knows the value of the land he lives
                                            in, and who blends the abundance of
                                            his labor with his hard work and
                                            generosity, will carry happiness and
                                            peace […]
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
                                  </div>{" "}
                                  <div className="ere-item-wrap property-item mg-bottom-30 ere-property-featured">
                                    <div className="property-inner">
                                      <div className="property-image">
                                        <img
                                          decoding="async"
                                          loading="lazy"
                                          width="710"
                                          height="387"
                                          src="https://www.qsyrys.com/wp-content/uploads/2022/06/cover-710x387.jpg"
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
                                              <Link
                                                data-property-id="663"
                                                href="javascript:void(0)"
                                                className="property-view-gallery"
                                              >
                                                <i className="fa fa-camera"></i>
                                              </Link>
                                            </div>
                                            <Link
                                              href="javascript:void(0)"
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
                                            </Link>
                                            <Link
                                              className="compare-property"
                                              href="javascript:void(0)"
                                              data-property-id="663"
                                              data-toggle="tooltip"
                                              title=""
                                              data-original-title="Compare"
                                            >
                                              <i className="fa fa-plus"></i>
                                            </Link>{" "}
                                          </div>
                                          <Link
                                            className="property-link"
                                            href="/property/restaurant-austin-tx-78702/"
                                            title="Dreamlike Homes in a complex"
                                          ></Link>
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
                                            <span className="property-status-bg bg-[#dd3333]">
                                              For Sale{" "}
                                              <span className="property-arrow border-l-[#dd3333] border-r-[#dd3333]"></span>
                                            </span>
                                          </p>
                                        </div>
                                      </div>
                                      <div className="property-item-content">
                                        <div className="property-heading">
                                          <h2 className="property-title">
                                            <Link
                                              href="https://www.qsyrys.com/property/restaurant-austin-tx-78702/"
                                              title="Dreamlike Homes in a complex"
                                            >
                                              Dreamlike Homes in a complex
                                            </Link>
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
                                          <Link
                                            target="_blank"
                                            href="http://maps.google.com/?q=syrys%20investment%20ltd"
                                          >
                                            <span>syrys investment ltd</span>
                                          </Link>
                                        </div>
                                        <div className="property-element-inline">
                                          <div className="property-type-list">
                                            <i className="fa fa-tag"></i>
                                            <Link
                                              href="/property-type/villa/"
                                              title="Villa"
                                            >
                                              <span>Villa </span>
                                            </Link>
                                          </div>
                                          <div className="property-agent">
                                            <Link
                                              href="/author/syrysgmail-com/"
                                              title="SYRYS GROUP"
                                            >
                                              {" "}
                                              <i className="fa fa-user"></i>
                                              <span>SYRYS GROUP</span>
                                            </Link>{" "}
                                          </div>
                                          <div className="property-date">
                                            <i className="fa fa-calendar"></i>6
                                            years ago{" "}
                                          </div>
                                        </div>
                                        <div className="property-excerpt">
                                          <p>
                                            Dreams to live on island that
                                            embraces the shimmering blue Large
                                            windows and terraces opens to the
                                            most beautiful sea of the
                                            Mediterranean come true with
                                            Dreamlike Houses. This villas are
                                            located in the Kyrenia district and
                                            consist of 13 villas with private
                                            pool built on an area of 6843m2. A
                                            DREAMLIKE LIFE ON THE […]
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
                                  </div>{" "}
                                </div>
                                <div className="clearfix"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsefulInformation;
