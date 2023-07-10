import { useEffect, useState, useCallback, useRef } from "react";
import LanguageBar from "../components/HomeComponents/topbar/languagebar";
import NavigationBar from "../components/HomeComponents/topbar/navigationbar";
import MetaTags from "react-meta-tags";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Footer from "../components/footer";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import "../assets/css/propertysingle.css";

import { Link } from "react-router-dom";


const Overview = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState();

  const [tabs, setTabs] = useState('overview');

  const latitude = 51.5074;
  const longitude = 0.1278;

  useEffect(() => {

    document
      .querySelector(".sidebar-mobile-canvas-icon")
      .addEventListener("click", (e) => {
        document
          .querySelector(".sidebar-mobile-canvas-icon")
          .classList.add("changed");

        document
          .querySelector(".overlay-canvas-sidebar")
          .classList.add("changed");

        document.querySelector(".primary-sidebar").classList.add("changed");
      });

      document
        .querySelector(".overlay-canvas-sidebar")
        .addEventListener("click", (e) => {
          document
            .querySelector(".sidebar-mobile-canvas-icon")
            .classList.remove("changed");

          document
            .querySelector(".overlay-canvas-sidebar")
            .classList.remove("changed");

          document
            .querySelector(".primary-sidebar")
            .classList.remove("changed");
        });

  }, [])

  return (
    <>

      <MetaTags>
        <title>Property Name | Property Investment</title>
      </MetaTags>

      <div
        className="home page-template page-template-elementor_header_footer elementor-kit-4695 page page-id-58 wp-embed-responsive beyot-class chrome header-is-float header-sticky-fix-style elementor-default elementor-template-full-width elementor-kit-4695 elementor-page elementor-page-58 e--ua-blink e--ua-chrome e--ua-webkit elementor elementor-58 property-template-default single single-property postid-8381 has-sidebar"
        id="wrapper"
      >
        <LanguageBar />
        <NavigationBar />

        <div id="wrapper-content" className="clearfix ">
        <section className="page-title property-single-map page-title-background">
        {/* google stuff */}
         <div style={{width: '100%'}}><iframe width="100%" height="450" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={`https://maps.google.com/maps?width=100%&height=300&hl=en&q=${latitude},${longitude}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}></iframe></div>
	</section><div id="primary-content" className="pd-top-0 pd-bottom-0">
			<div className="container clearfix">
						<div className="single-property-element property-info-header property-info-action">
	<div className="property-main-info">
		<div className="property-heading">
							<h2>1+1 A CITY</h2>
						<div className="property-info-block-inline">
				<div>
											<span className="property-price">
												97,000£											</span>
																<div className="property-status">
															<span className="!bg-[#dd3333]">For Sale</span>
													</div>
									</div>
									<div className="property-location" title="SYRYS INVESTMENT LTD">
						<i className="fa fa-map-marker"></i>
						<a target="_blank" href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></a>
					</div>
							</div>
		</div>
	</div>
	<div className="property-info">
		<div className="property-id">
			<span className="fa fa-barcode"></span>
			<div className="content-property-info">
				<p className="property-info-value">SYS654996</p>
				<p className="property-info-title">Property ID</p>
			</div>
		</div>
					<div className="property-area">
				<span className="fa fa-arrows"></span>
				<div className="content-property-info">
					<p className="property-info-value">61.6							<span>m<sup>2</sup></span>
					</p>
					<p className="property-info-title">Size</p>
				</div>
			</div>
							<div className="property-bedrooms">
				<span className="fa fa-hotel"></span>
				<div className="content-property-info">
					<p className="property-info-value">1</p>
					<p className="property-info-title">Bedroom</p>
				</div>
			</div>
							<div className="property-bathrooms">
				<span className="fa fa-bath"></span>
				<div className="content-property-info">
					<p className="property-info-value">1</p>
					<p className="property-info-title">Bathroom</p>
				</div>
			</div>
			</div>
	<div className="property-action">
		<div className="property-action-inner clearfix">
			<div className="social-share">
	<div className="social-share-hover">
		<i className="fa fa-share-alt" aria-hidden="true"></i>
		<div className="social-share-list">
			<div className="list-social-icon clearfix">
									<a target="_blank" href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.qsyrys.com%2Fproperty%2F11-a-city%2F">
						<i className="fa fa-facebook"></i>
					</a>
				
									<a href="javascript: window.open('http://twitter.com/share?text=1%2B1+A+CITY&url=https%3A%2F%2Fwww.qsyrys.com%2Fproperty%2F11-a-city%2F','_blank', 'width=900, height=450')">
						<i className="fa fa-twitter"></i>
					</a>
				
									<a href="javascript: window.open('http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.qsyrys.com%2Fproperty%2F11-a-city%2F&title=1%2B1+A+CITY','_blank', 'width=500, height=450')">
						<i className="fa fa-linkedin"></i>
					</a>
				
				
													<a target="_blank" href="https://wa.me/?text=https%3A%2F%2Fwww.qsyrys.com%2Fproperty%2F11-a-city%2F"><i className="fa fa-whatsapp"></i></a>
							</div>
		</div>
	</div>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="8381" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a>				<a className="compare-property" href="javascript:void(0)" data-property-id="8381" data-toggle="tooltip" title="" data-original-title="Compare">
					<i className="fa fa-plus"></i>
				</a>
						<a href="javascript:void(0)" id="property-print" data-ajax-url="/wp-admin/admin-ajax.php" data-toggle="tooltip" data-original-title="Print" data-property-id="8381"><i className="fa fa-print"></i></a>
					</div>
	</div>
</div><div className="row">
					<div className="col-lg-9 single-property-inner">
<div id="container"><div id="content" role="main">        <link rel="stylesheet" id="ere_single-property-css" href="https://www.qsyrys.com/wp-content/plugins/essential-real-estate/public/assets/css/single-property.min.css" type="text/css" media="all" />

<div id="property-8381" className="ere-property-wrap single-property-area content-single-property post-8381 property type-property status-publish has-post-thumbnail hentry property-type-residential-complex property-status-for-sale property-feature-air-conditioning property-feature-balcony property-feature-beauty-centre property-feature-built-in-kitchen property-feature-car-park property-feature-central-heating property-feature-city-view property-feature-communal-swimming-pool property-feature-electrical-infrastructure property-feature-elevator property-feature-gym property-feature-marble-floors property-feature-mountain-view property-feature-refrigerator property-feature-residence-housing-complex property-feature-restaurant property-feature-sauna property-feature-sea-view property-feature-security property-feature-spa property-feature-tv-infrastructure property-feature-underground-car-parking property-feature-water-infrastructure property-feature-wifi property-state-kyrenia property-city-girne">
		    <div className="single-property-element property-gallery-wrap">
    <div className="ere-property-element">

    <div className="single-property-image-main owl-carousel manual ere-carousel-manual owl-loaded owl-drag">

    <Swiper
    spaceBetween={0}
    navigation={true}
    slidesPerView={1}
    grabCursor={true}
    style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
    }}
    loop={true}
    navigation={{
    prevEl: ".prev-item",
    nextEl: ".next-item",
    }}
    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
    modules={[FreeMode, Navigation, Thumbs]}
    className="property-content owl-carousel mb-2 mySwiper2 manual owl-loaded owl-drag"
    >

  <SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-1-5-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
    <a data-thumb-src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-1-5.jpg" data-gallery-id="ere_gallery-2061947168" data-rel="ere_light_gallery" href="https://www.qsyrys.com/wp-content/uploads/2022/07/1-1-5.jpg" className="zoomGallery"><i className="fa fa-expand"></i></a>
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-2-8-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
    <a data-thumb-src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-2-8.jpg" data-gallery-id="ere_gallery-2061947168" data-rel="ere_light_gallery" href="https://www.qsyrys.com/wp-content/uploads/2022/07/1-2-8.jpg" className="zoomGallery"><i className="fa fa-expand"></i></a>
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-3-8-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
    <a data-thumb-src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-3-8.jpg" data-gallery-id="ere_gallery-2061947168" data-rel="ere_light_gallery" href="https://www.qsyrys.com/wp-content/uploads/2022/07/1-3-8.jpg" className="zoomGallery"><i className="fa fa-expand"></i></a>
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-4-8-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
    <a data-thumb-src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-4-8.jpg" data-gallery-id="ere_gallery-2061947168" data-rel="ere_light_gallery" href="https://www.qsyrys.com/wp-content/uploads/2022/07/1-4-8.jpg" className="zoomGallery"><i className="fa fa-expand"></i></a>
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-5-6-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
    <a data-thumb-src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-5-6.jpg" data-gallery-id="ere_gallery-2061947168" data-rel="ere_light_gallery" href="https://www.qsyrys.com/wp-content/uploads/2022/07/1-5-6.jpg" className="zoomGallery"><i className="fa fa-expand"></i></a>
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-6-3-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
    <a data-thumb-src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-6-3.jpg" data-gallery-id="ere_gallery-2061947168" data-rel="ere_light_gallery" href="https://www.qsyrys.com/wp-content/uploads/2022/07/1-6-3.jpg" className="zoomGallery"><i className="fa fa-expand"></i></a>
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-7-6-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
    <a data-thumb-src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-7-6.jpg" data-gallery-id="ere_gallery-2061947168" data-rel="ere_light_gallery" href="https://www.qsyrys.com/wp-content/uploads/2022/07/1-7-6.jpg" className="zoomGallery"><i className="fa fa-expand"></i></a>
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-8-6-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
    <a data-thumb-src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-8-6.jpg" data-gallery-id="ere_gallery-2061947168" data-rel="ere_light_gallery" href="https://www.qsyrys.com/wp-content/uploads/2022/07/1-8-6.jpg" className="zoomGallery"><i className="fa fa-expand"></i></a>
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-9-6-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY"/>
    <a data-thumb-src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-9-6.jpg" data-gallery-id="ere_gallery-2061947168" data-rel="ere_light_gallery" href="https://www.qsyrys.com/wp-content/uploads/2022/07/1-9-6.jpg" className="zoomGallery"><i className="fa fa-expand"></i></a>
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-10-6-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
    <a data-thumb-src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-10-6.jpg" data-gallery-id="ere_gallery-2061947168" data-rel="ere_light_gallery" href="https://www.qsyrys.com/wp-content/uploads/2022/07/1-10-6.jpg" className="zoomGallery"><i className="fa fa-expand"></i></a>
</div></SwiperSlide>

<div className="owl-nav relative z-[10]"><div className="owl-prev prev-item"><i className="fa fa-angle-left"></i></div><div className="owl-next next-item"><i className="fa fa-angle-right"></i></div></div>

</Swiper>

<Swiper
   onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        className="mySwiper"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode,Navigation,Thumbs]}
    >

  <SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-1-5-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-2-8-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-3-8-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-4-8-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-5-6-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-6-3-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-7-6-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-8-6-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-9-6-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY"/>
</div></SwiperSlide>

<SwiperSlide className="owl-item"><div className="property-gallery-item ere-light-gallery">
    <img src="https://www.qsyrys.com/wp-content/uploads/2022/07/1-10-6-870x420.jpg" alt="1+1 A CITY" title="1+1 A CITY" />
</div></SwiperSlide>

</Swiper>

</div>


        </div>
    </div>
<div className="single-property-element property-description">
    <div className="ere-heading-style2">
        <h2>Description</h2>
    </div>
    <div className="ere-property-element">
        <h3><strong>A CITY</strong></h3>
<p>What makes the A City unique besides urban life is the futures that anticipate the needs, quality, respectable and reliable projects that create a difference, sensitive to the environment, with high brand value and walking distance to the bazaar, shopping malls, markets, schools not forgetting nature and amazing sea, mountain and city views.</p>
<p>This project consists of 1+1, 2+1, 3+1 with swimming pool that consisting of 7 blocks and 155 flats including amenities such as basketball court, fitness center, children’s playground, Turkish bath, 24/7 site security, site management, indoor and outdoor parking lot.</p>
<p>The A City is where quality and aesthetics meet. The domestic, international experience and understanding of modern architectural structure in the constantly changing and renewed construction sector with its peaceful and safe living spaces, dynamic, creative and competent employees drives strategic growth planning in the real estate development and construction sectors with high quality.</p>
<p>The priority of A City is the comfortable living, right solutions and customer satisfaction with knowledge and experience.</p>
    </div>
</div>
<div className="single-property-element property-location">
    <div className="ere-heading-style2">
        <h2>Address</h2>
    </div>
    <div className="ere-property-element">
        <div className="property-address">
    <strong>Address:</strong>
    <span>SYRYS INVESTMENT LTD</span>
</div>
    <ul className="list-2-col">
    <li>
        <strong>Country:</strong>
        <span>Cyprus</span>
    </li>
    <li>
        <strong>Province / State:</strong>
        <span>Kyrenia</span>
    </li>
    <li>
        <strong>City / Town:</strong>
        <span>Girne</span>
    </li>
        </ul>
        <a className="open-on-google-maps" target="_blank" href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD">Open on Google Maps    <i className="fa fa-map-marker"></i></a>
</div>
</div>
<div className="single-property-element property-info-tabs property-tab">
    <div className="ere-property-element">
        <ul id="ere-features-tabs" className="nav nav-tabs hidden-xs">
<li onClick={() => setTabs('overview')}><a className={`nav-link ${tabs == 'overview' && 'active'}`} data-toggle="tab" href="#ere-overview">Overview</a></li>

    <li onClick={() => setTabs('features')}><a className={`nav-link ${tabs == 'features' && 'active'}`} data-toggle="tab" href="#ere-features">Features</a></li>
        </ul><div className="panel-group visible-xs" id="ere-features-tabs-accordion"></div>
        <div className="tab-content hidden-xs">
<div id="ere-overview" className={`tab-pane fade ${tabs == 'overview' && 'active show'}`}>
    <ul className="list-2-col ere-property-list">
        <li>
<strong>Property ID</strong>
        <span>SYS654996</span>
        </li>
        <li><strong>Price</strong>
<span className="ere-property-price">
97,000£        </span>
</li>
    <li>
    <strong>Property Type</strong>
    <span>Residential Complex</span>
</li>
    <li>
    <strong>Property status</strong>
    <span>For Sale</span>
</li>
    <li>
    <strong>Rooms</strong>
    <span>1</span>
</li>
    <li>
    <strong>Bedrooms</strong>
    <span>1</span>
</li>
    <li>
    <strong>Bathrooms</strong>
    <span>1</span>
</li>
    <li>
    <strong>Year Built</strong>
    <span>2022</span>
</li>
    <li>
    <strong>Size</strong>

    <span>61.6 m<sup>2</sup></span>
</li>
    
        

</ul>
</div>
    <div id="ere-features" className={`tab-pane fade ${tabs == 'features' && 'active show'}`}>
        <div className="row"><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/air-conditioning/" className="feature-checked"><i className="fa fa-check-square-o"></i> Air Conditioning</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/central-heating/" className="feature-checked"><i className="fa fa-check-square-o"></i> Central Heating</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/gym/" className="feature-checked"><i className="fa fa-check-square-o"></i> Gym</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/marble-floors/" className="feature-checked"><i className="fa fa-check-square-o"></i> Marble Floors</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/refrigerator/" className="feature-checked"><i className="fa fa-check-square-o"></i> Refrigerator</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/sauna/" className="feature-checked"><i className="fa fa-check-square-o"></i> Sauna</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/communal-swimming-pool/" className="feature-checked"><i className="fa fa-check-square-o"></i> Communal Swimming Pool</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/tv-infrastructure/" className="feature-checked"><i className="fa fa-check-square-o"></i> TV Infrastructure</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/wifi/" className="feature-checked"><i className="fa fa-check-square-o"></i> WiFi-Internet</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/sea-view/" className="feature-checked"><i className="fa fa-check-square-o"></i> Sea View</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/mountain-view/" className="feature-checked"><i className="fa fa-check-square-o"></i> Mountain View</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/residence-housing-complex/" className="feature-checked"><i className="fa fa-check-square-o"></i> Residence (Housing Complex)</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/restaurant/" className="feature-checked"><i className="fa fa-check-square-o"></i> Restaurant</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/spa/" className="feature-checked"><i className="fa fa-check-square-o"></i> SPA</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/beauty-centre/" className="feature-checked"><i className="fa fa-check-square-o"></i> Beauty Centre</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/car-park/" className="feature-checked"><i className="fa fa-check-square-o"></i> Car Park</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/underground-car-parking/" className="feature-checked"><i className="fa fa-check-square-o"></i> Underground Car Parking</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/balcony/" className="feature-checked"><i className="fa fa-check-square-o"></i> Balcony</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/city-view/" className="feature-checked"><i className="fa fa-check-square-o"></i> City View</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/elevator/" className="feature-checked"><i className="fa fa-check-square-o"></i> Elevator</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/built-in-kitchen/" className="feature-checked"><i className="fa fa-check-square-o"></i> Built In Kitchen</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/electrical-infrastructure/" className="feature-checked"><i className="fa fa-check-square-o"></i> Electrical Infrastructure</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/water-infrastructure/" className="feature-checked"><i className="fa fa-check-square-o"></i> Water Infrastructure</a></div><div className="col-md-3 col-xs-6 col-mb-12 property-feature-wrap"><a href="https://www.qsyrys.com/property-feature/security/" className="feature-checked"><i className="fa fa-check-square-o"></i> Security</a></div></div>    </div>
        </div>
    </div>
    
</div>  </div></div>
</div>
</div>

	<div className="sidebar-mobile-canvas-icon" title="Click to show Canvas Sidebar">
		<i className="fa fa-sliders"></i>
	</div>
<div className="primary-sidebar sidebar col-lg-3 sidebar-mobile-canvas">
	<div className="primary-sidebar-inner gf-sticky static left-auto w-[213px]">

		<aside id="block-3" className="widget widget_block widget_media_image">
<div className="wp-block-image"><figure className="aligncenter size-large is-resized"><img decoding="async" loading="lazy" src="https://www.qsyrys.com/wp-content/uploads/2022/05/S-ICON-POINT5-684x1024.png" alt="" className="wp-image-6506" width="106" height="158" srcset="https://www.qsyrys.com/wp-content/uploads/2022/05/S-ICON-POINT5-684x1024.png 684w, https://www.qsyrys.com/wp-content/uploads/2022/05/S-ICON-POINT5-200x300.png 200w, https://www.qsyrys.com/wp-content/uploads/2022/05/S-ICON-POINT5-768x1149.png 768w, https://www.qsyrys.com/wp-content/uploads/2022/05/S-ICON-POINT5-1026x1536.png 1026w, https://www.qsyrys.com/wp-content/uploads/2022/05/S-ICON-POINT5.png 1239w" sizes="(max-width: 106px) 100vw, 106px" /></figure></div>
</aside><aside id="block-2" className="widget widget_block">
<div className="wp-block-contact-form-7-contact-form-selector">
<div className="wpcf7 js" id="wpcf7-f4-o1" lang="en-US" dir="ltr">
<div className="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form action="/property/11-a-city/#wpcf7-f4-o1" method="post" className="wpcf7-form init" aria-label="Contact form" noValidate="novalidate" data-status="init">
<div className="!hidden">
<input type="hidden" name="_wpcf7" value="4" />
<input type="hidden" name="_wpcf7_version" value="5.7.5.1" />
<input type="hidden" name="_wpcf7_locale" value="en_US" />
<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f4-o1" />
<input type="hidden" name="_wpcf7_container_post" value="0" />
<input type="hidden" name="_wpcf7_posted_data_hash" value="" />
</div>
<p><label> Your Email (required)<br />
<span className="wpcf7-form-control-wrap" data-name="your-email"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email w-full" aria-required="true" aria-invalid="false" value="" type="email" name="your-email" /></span> </label>
</p>
<p><label> Your Phone number (required)<br />
<span className="wpcf7-form-control-wrap" data-name="PhoneNumber"><input size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel w-full" aria-invalid="false" value="" type="tel" name="PhoneNumber" /></span> </label>
</p>
<p><label> Your Message<br />
<span className="wpcf7-form-control-wrap" data-name="your-message"><textarea cols="40" rows="10" className="wpcf7-form-control wpcf7-textarea w-full" aria-invalid="false" name="your-message"></textarea></span> </label>
</p>
<p><input className="wpcf7-form-control has-spinner wpcf7-submit" type="submit" value="Send" /><span className="wpcf7-spinner"></span>
</p><div className="wpcf7-response-output" aria-hidden="true"></div>
</form>
</div>
</div>
</aside><aside id="ere_widget_search_form-2" className="widget ere_widget ere_widget_search_form"><h4 className="widget-title"><span>Search</span></h4><div data-options="{&quot;ajax_url&quot;:&quot;\/wp-admin\/admin-ajax.php&quot;,&quot;price_is_slider&quot;:&quot;true&quot;,&quot;enable_filter_location&quot;:&quot;1&quot;}" className="ere-property-advanced-search clearfix tab color-dark ">
    <div className="form-search-wrap">
        <div className="form-search-inner">
<div className="ere-search-content">
        <div data-href="https://www.qsyrys.com/advanced-search/" className="search-properties-form">
        <div className="ere-search-status-tab">
    <input className="search-field" type="hidden" name="status" value="for-sale" data-default-value="" />
    <button type="button" data-value="for-sale" className="btn-status-filter active">For Sale</button>
        <button type="button" data-value="for-rent" className="btn-status-filter">For Rent</button>
        </div>
    <div className="row">
<div className="col-lg-12 col-md-12 col-12 form-group">
    <select name="type" title="Property Types" className="search-field form-control" data-default-value="">
        <option value="apartment">Apartment</option><option value="bungalow">Bungalow</option><option value="detached-villa">Detached Villa</option><option value="hotel">Hotel</option><option value="house">House</option><option value="land">Land</option><option value="office">Office</option><option value="penthouse">Penthouse</option><option value="residential-complex">Residential Complex</option><option value="restaurant">Restaurant</option><option value="semi-detached-villa">Semi Detached Villa</option><option value="shop">Shop</option><option value="studio">Studio</option><option value="twin-villa">Twin Villa</option><option value="villa">Villa</option>        <option value="" selected="selected">
All Types        </option>
    </select>
</div><div className="ere-sliderbar-price-wrap col-lg-12 col-md-12 col-12 form-group">
	    <div className="ere-sliderbar-price ere-sliderbar-filter" data-min-default="25000" data-max-default="1000000" data-min="25000" data-max="1000000">
        <div className="title-slider-filter">
Price [<span className="min-value">25,000£</span> - <span className="max-value">1,000,000£</span>]
<input type="hidden" name="min-price" className="min-input-request" value="25000" />
<input type="hidden" name="max-price" className="max-input-request" value="1000000" />
        </div>
        <div className="sidebar-filter ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
        <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: 0, width: '100%'}}></div><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left: 0}}></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left: '100%'}}></span></div>
    </div>
</div>
    <div className="col-lg-12 col-md-12 col-12 form-group">
    <div className="ere-sliderbar-area ere-sliderbar-filter" data-min-default="0" data-max-default="1000" data-min="0" data-max="1000">
<div className="title-slider-filter">
    <span>Size [</span><span className="min-value">0</span> - <span className="max-value">1,000</span><span>]
        m<sup>2</sup></span>        <input type="hidden" name="min-area" className="min-input-request" value="0" />
    <input type="hidden" name="max-area" className="max-input-request" value="1000" />
</div>
<div className="sidebar-filter ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
<div className="ui-slider-range ui-corner-all ui-widget-header" style={{ left: '0%', width: '100%' }}></div><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default left-0"></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{left:'100%'}}></span></div>
        </div>
    </div>
<div className="col-lg-12 col-md-12 col-12 form-group">
    <input type="text" className="ere-property-identity form-control search-field" data-default-value="" value="" name="property_identity" placeholder="Property ID" />
</div><div className="col-lg-12 col-md-12 col-12 form-group submit-search-form pull-right">
    <button type="button" className="ere-advanced-search-btn"><i className="fa fa-search"></i>
        Search    </button>
</div>
        </div>
    </div>
</div>
        </div>
    </div>
</div></aside>

</div>
</div>
	</div>
</div>
</div>
      </div>
      <div className="overlay-canvas-sidebar"></div>
      </div>
      <Footer />
    </>
  )
};

export default Overview;
