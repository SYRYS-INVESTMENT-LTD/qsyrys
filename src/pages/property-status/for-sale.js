import "../../assets/css/property.css";
import "../../assets/css/property.min.css";
import "../../assets/css/archive-property.min.css";
import { useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import Footer from "../../components/footer";
import NavigationBar from "../../components/HomeComponents/topbar/navigationbar";
import LanguageBar from "../../components/HomeComponents/topbar/languagebar";
import PropertyHeader from "../../components/propertyComponents/header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Link } from "react-router-dom"


const Sale = () => {

    useEffect(() => {

        document.querySelector('.sidebar-mobile-canvas-icon').addEventListener('click', (e) => {

            document.querySelector('.sidebar-mobile-canvas-icon').classList.add('changed')

            document.querySelector('.overlay-canvas-sidebar').classList.add('changed');

            document.querySelector('.primary-sidebar').classList.add('changed')

        })

        document.querySelector('.overlay-canvas-sidebar').addEventListener('click', (e) => {
            document.querySelector('.sidebar-mobile-canvas-icon').classList.remove('changed')

            document.querySelector('.overlay-canvas-sidebar').classList.remove('changed');

            document.querySelector('.primary-sidebar').classList.remove('changed')
        })

    }, [])


    return (
        <>
            <MetaTags>
                <title>For Sale Archives | Property Investment</title>
            </MetaTags>

            <div
            className="home page-template page-template-elementor_header_footer elementor-kit-4695 page page-id-58 wp-embed-responsive beyot-class chrome header-is-float header-sticky-fix-style elementor-default elementor-template-full-width elementor-kit-4695 elementor-page elementor-page-58 e--ua-blink e--ua-chrome e--ua-webkit elementor elementor-58"
            id="wrapper"
            >
            <LanguageBar />
            <NavigationBar />

            <div id="wrapper-content" className="clearfix ">

            <PropertyHeader forType="sale" />

<div id="primary-content" className="pd-top-100 pd-bottom-100 sm-pd-top-80 sm-pd-bottom-80">
    <div className="container clearfix">
        <div className="row">

            <div className="primary-sidebar sidebar col-lg-3 sidebar-mobile-canvas h-[761px] overflow-y-auto">
<div className="primary-sidebar-inner gf-sticky">
    <aside id="ere_widget_search_form-4" className="widget ere_widget ere_widget_search_form"><div className="ere-property-advanced-search clearfix tab color-dark ">
        <div className="form-search-wrap">
            <div className="form-search-inner">
<div className="ere-search-content">
    <div data-href="/advanced-search/" className="search-properties-form">
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
            </div><div className="col-lg-12 col-md-12 col-12 form-group">
<select name="bedrooms" title="Property Bedrooms" className="search-field form-control" data-default-value="">
    <option value="">
        Any Bedrooms        </option>
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
            </div><div className="col-lg-12 col-md-12 col-12 form-group">
<select name="bathrooms" title="Property Bathrooms" className="search-field form-control" data-default-value="">
    <option value="">
        Any Bathrooms        </option>
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
            </div><div className="ere-sliderbar-price-wrap col-lg-12 col-md-12 col-12 form-group">
<div className="ere-sliderbar-price ere-sliderbar-filter" data-min-default="25000" data-max-default="1000000" data-min="25000" data-max="1000000">
    <div className="title-slider-filter">
        Price [<span className="min-value">25,000£</span> - <span className="max-value">1,000,000£</span>]
        <input type="hidden" name="min-price" className="min-input-request" value="25000" />
        <input type="hidden" name="max-price" className="max-input-request" value="1000000" />
    </div>
    <div className="sidebar-filter ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
        <div className="ui-slider-range ui-corner-all ui-widget-header left-0 w-full"></div><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default left-0"></span><span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default left-full"></span></div>
</div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 form-group">
<select name="min-area" title="Min Size" className="search-field form-control" data-default-value="">
    <option value="">
        Min Size            </option>
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
            <div className="col-lg-6 col-md-6 col-12 form-group">
<select name="max-area" title="Max Size" className="search-field form-control" data-default-value="">
    <option value="">
        Max Size            </option>
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
            <div className="col-lg-12 col-md-12 col-12 form-group">
<input type="text" className="ere-property-identity form-control search-field" data-default-value="" value="" name="property_identity" placeholder="Property ID" />
            </div>    <div className="col-lg-12 col-md-12 col-12 form-group submit-search-form pull-right">
<button type="button" className="ere-advanced-search-btn"><i className="fa fa-search mr-1"></i>
    Search        </button>
            </div>
        </div>
    </div>
</div>
            </div>
        </div>
    </div></aside><aside id="ere_widget_recent_properties-3" className="widget ere_widget ere_widget_recent_properties ere-property"><h4 className="widget-title"><span>Recent Properties</span></h4><div className="list-recent-properties">


        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            grabCursor={true}
            pagination={{ clickable: true }}
            autoplay={{
delay: 6000,
disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="owl-carousel owl-loaded owl-drag"
        >


            <SwiperSlide className="owl-item active !min-h-[230px] w-[220px]"><div className="property-item">
<div className="property-inner">
    <div className="property-image">
        <img width="370" height="180" src="../../assets/img/IMG-20230425-WA0002-370x180.jpg" onerror="this.src = '/wp-content/uploads/2017/12/no-image.jpg';" alt="BARGAIN 2+1 APARTMENT IN ALSANCAK" title="BARGAIN 2+1 APARTMENT IN ALSANCAK" />

        <div className="property-action block-center">
            <div className="block-center-inner">
<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(9) Photos">
    <Link data-property-id="11138" to="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></Link>
</div><Link to="javascript:void(0)" className="property-favorite" data-property-id="11138" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></Link><Link className="compare-property" to="javascript:void(0)" data-property-id="11138" data-toggle="tooltip" title="" data-original-title="Compare">
    <i className="fa fa-plus"></i>
</Link>            </div>
            <Link className="property-link" to="/property/bargain-21-apartment-in-alsancak/" title="BARGAIN 2+1 APARTMENT IN ALSANCAK"></Link>
        </div>
        <div className="property-label">
            <p className="label-item"><span>Hot Offer</span>
            </p>
        </div>
    </div>
    <div className="property-item-content">
        <h2 className="property-title"><Link to="/property/bargain-21-apartment-in-alsancak/" title="BARGAIN 2+1 APARTMENT IN ALSANCAK">BARGAIN 2+1 APARTMENT IN ALSANCAK</Link>
        </h2>
        <div className="property-price">
            <span>
67,000£</span>
        </div>
        <div className="property-location" title="SYRYS INVESTMENT LTD">
            <i className="fa fa-map-marker"></i>
            <Link target="_blank" to="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></Link>
        </div>
    </div>
</div>
            </div></SwiperSlide><SwiperSlide className="owl-item !min-h-[230px] w-[220px]"><div className="property-item">
<div className="property-inner">
    <div className="property-image">
        <img width="370" height="180" src="../../assets/img/photo_17@20-01-2023_11-39-48-370x180.jpg" onerror="this.src = '/wp-content/uploads/2017/12/no-image.jpg';" alt="1 BEDROOM APARTMENT IN ATOLL PARK" title="1 BEDROOM APARTMENT IN ATOLL PARK" />

        <div className="property-action block-center">
            <div className="block-center-inner">
<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(6) Photos">
    <Link data-property-id="11128" to="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></Link>
</div><Link to="javascript:void(0)" className="property-favorite" data-property-id="11128" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></Link><Link className="compare-property" to="javascript:void(0)" data-property-id="11128" data-toggle="tooltip" title="" data-original-title="Compare">
    <i className="fa fa-plus"></i>
</Link>            </div>
            <Link className="property-link" to="/property/1-bedroom-apartment-in-atoll-park/" title="1 BEDROOM APARTMENT IN ATOLL PARK"></Link>
        </div>
    </div>
    <div className="property-item-content">
        <h2 className="property-title"><Link to="/property/1-bedroom-apartment-in-atoll-park/" title="1 BEDROOM APARTMENT IN ATOLL PARK">1 BEDROOM APARTMENT IN ATOLL PARK</Link>
        </h2>
        <div className="property-price">
            <span>
500£</span>
        </div>
        <div className="property-location" title="SYRYS INVESTMENT LTD">
            <i className="fa fa-map-marker"></i>
            <Link target="_blank" to="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></Link>
        </div>
    </div>
</div>
            </div></SwiperSlide><SwiperSlide className="owl-item !min-h-[230px] w-[220px]"><div className="property-item">
<div className="property-inner">
    <div className="property-image">
        <img width="370" height="180" src="../../assets/img/IMG-20230425-WA0020-370x180.jpg" onerror="this.src = '/wp-content/uploads/2017/12/no-image.jpg';" alt="SPACIOUS 2+1 FLAT IN THE CENTER OF KYRENIA" title="SPACIOUS 2+1 FLAT IN THE CENTER OF KYRENIA" />

        <div className="property-action block-center">
            <div className="block-center-inner">
<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(10) Photos">
    <Link data-property-id="11119" to="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></Link>
</div><Link to="javascript:void(0)" className="property-favorite" data-property-id="11119" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></Link><Link className="compare-property" to="javascript:void(0)" data-property-id="11119" data-toggle="tooltip" title="" data-original-title="Compare">
    <i className="fa fa-plus"></i>
</Link>            </div>
            <Link className="property-link" to="/property/spacious-21-flat-in-the-center-of-kyrenia/" title="SPACIOUS 2+1 FLAT IN THE CENTER OF KYRENIA"></Link>
        </div>
    </div>
    <div className="property-item-content">
        <h2 className="property-title"><Link to="/property/spacious-21-flat-in-the-center-of-kyrenia/" title="SPACIOUS 2+1 FLAT IN THE CENTER OF KYRENIA">SPACIOUS 2+1 FLAT IN THE CENTER OF KYRENIA</Link>
        </h2>
        <div className="property-price">
            <span>
650£</span>
        </div>
        <div className="property-location" title="SYRYS INVESTMENT LTD">
            <i className="fa fa-map-marker"></i>
            <Link target="_blank" to="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></Link>
        </div>
    </div>
</div>
            </div></SwiperSlide>



        </Swiper>



    </div>
    </aside>	</div>
            </div>

            <div className="col-lg-9 order-lg-2 archive-property-inner">
<div id="container"><div id="content" role="main">

    <div className="ere-archive-property-wrap ere-property-wrap">
        <div className="ere-heading-style2">
            <h2>Search Property</h2>
        </div>

        <div className="ere-property-advanced-search clearfix tab color-dark ">
            <div className="form-search-wrap">
<div className="form-search-inner">
    <div className="ere-search-content">
        <div data-href="/advanced-search/" className="search-properties-form">
            <div className="row">
<div className="col-lg-4 col-md-6 col-12 form-group">
    <input type="text" className="ere-property-identity form-control search-field" data-default-value="" value="" name="property_identity" placeholder="Property ID" />
</div>    <div className="col-lg-4 col-md-6 col-12 form-group submit-search-form pull-right">
    <button type="button" className="ere-advanced-search-btn"><i className="fa fa-search mr-1"></i>
        Search        </button>
</div>
            </div>
        </div>
    </div>
</div>
            </div>
        </div>        <div className="ere-archive-property archive-property">
            <div className="above-archive-property">
<div className="ere-heading">
    <h2>For Sale <sub>(182)</sub></h2>
</div><div className="archive-property-action property-status-filter">
    <div className="archive-property-action-item sort-view-property">
        <div className="sort-property property-filter">
            <span className="property-filter-placeholder">Sort By</span>
            <ul>
<li><Link data-sortby="default" to="/property-status/for-rent/?sortby=default" title="Default Order">Default Order</Link>
</li>
<li><Link data-sortby="featured" to="/property-status/for-rent/?sortby=featured" title="Featured">Featured</Link>
</li>
<li><Link data-sortby="most_viewed" to="/property-status/for-rent/?sortby=most_viewed" title="Most Viewed">Most Viewed</Link>
</li>
<li><Link data-sortby="a_price" to="/property-status/for-rent/?sortby=a_price" title="Price (Low to High)">Price (Low to High)</Link>
</li>
<li><Link data-sortby="d_price" to="/property-status/for-rent/?sortby=d_price" title="Price (High to Low)">Price (High to Low)</Link>
</li>
<li><Link data-sortby="a_date" to="/property-status/for-rent/?sortby=a_date" title="Date (Old to New)">Date (Old to New)</Link>
</li>
<li><Link data-sortby="d_date" to="/property-status/for-rent/?sortby=d_date" title="Date (New to Old)">Date (New to Old)</Link>
</li>
            </ul>
        </div>
        <div className="view-as" data-admin-url="/wp-admin/admin-ajax.php">
            <span data-view-as="property-list" className="view-as-list" title="View as List">
<i className="fa fa-list-ul"></i>
            </span>
            <span data-view-as="property-grid" className="view-as-grid active" title="View as Grid">
<i className="fa fa-th-large"></i>
            </span>
        </div>
    </div>
</div>
            </div>
            <div style={{
                columns: 'auto'
            }} className="ere-property clearfix property-grid col-gap-30 columns-md-2 columns-sm-2 columns-xs-1 columns-mb-1">

    <div className="mg-bottom-30 ere-item-wrap ere-property-featured">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/1-1-5-330x180.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="1+1 A CITY" title="1+1 A CITY"/>
			<div className="property-action block-center" >
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(10) Photos">
    <a data-property-id="8381" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="8381" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="8381" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/11-a-city/" title="1+1 A CITY"></a>
			</div>
							<div className="property-label property-featured">
											<p className="label-item">
                                <span className="property-label-bg">Featured                                    <span className="property-arrow"></span></span>
						</p>
														</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]" >For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]" ></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/11-a-city/" title="1+1 A CITY">1+1 A CITY</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        97,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="SYRYS INVESTMENT LTD">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/residential-complex/" title="Residential Complex"><span>Residential Complex </span></a>
											</div>
													<div className="property-agent">
						<a href="/author/syrysgmail-com/" title="SYRYS GROUP">						<i className="fa fa-user"></i>
						<span>SYRYS GROUP</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 12 months ago				</div>
			</div>
							<div className="property-excerpt">
					<p>A CITY What makes the A City unique besides urban life is the futures that anticipate the needs, quality, respectable and reliable projects that create a difference, sensitive to the environment, with high brand value and walking distance to the bazaar, shopping malls, markets, schools not forgetting nature and amazing sea, mountain and city views. […]</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">61.6 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																<div className="property-bedrooms">
							<div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="1 Bedroom">
								<span className="fa fa-hotel"></span>
								<span className="property-info-value">1</span>
							</div>
						</div>
																<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="1 Bathroom">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">1</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap ere-property-featured">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/1-330x180.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="Luxury Villa with an amazing view" title="Luxury Villa with an amazing view"/>
			<div className="property-action block-center" >
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(10) Photos">
    <a data-property-id="7424" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="7424" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="7424" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/luxury-villa-with-an-amazing-view/" title="Luxury Villa with an amazing view"></a>
			</div>
							<div className="property-label property-featured">
											<p className="label-item">
                                <span className="property-label-bg">Featured                                    <span className="property-arrow"></span></span>
						</p>
														</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]" >For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]" ></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/luxury-villa-with-an-amazing-view/" title="Luxury Villa with an amazing view">Luxury Villa with an amazing view</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        1,500,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="Syrys Investment Ltd">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=Syrys%20Investment%20Ltd"><span>Syrys Investment Ltd</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/detached-villa/" title="Detached Villa"><span>Detached Villa </span></a>
													<a href="/property-type/villa/" title="Villa"><span>Villa </span></a>
											</div>
													<div className="property-agent">
						<a href="/author/syrysgmail-com/" title="SYRYS GROUP">						<i className="fa fa-user"></i>
						<span>SYRYS GROUP</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 1 year ago				</div>
			</div>
							<div className="property-excerpt">
					<p>5 Bedroom Luxury Villa 1 Bedroom Staff Apartment Private Office 2 Storage Rooms 4 Car Underground Garage 15m x 5m Infinity Swimming Pool Private Elevator Pool with Window into Basement Private Gym Area, Home Office, Cinema Room, Sauna &amp; Hammam facilities Covered Roof Terrace with Hot tub, Roof terrace with Kitchen &amp; BBQ Area Hobby […]</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">773.97 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																<div className="property-bedrooms">
							<div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="6 Bedrooms">
								<span className="fa fa-hotel"></span>
								<span className="property-info-value">6</span>
							</div>
						</div>
																<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="7 Bathrooms">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">7</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap ere-property-featured">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/1-1-6.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="A CITY PENTHOUSE" title="A CITY PENTHOUSE"/>
			<div className="property-action block-center">
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(10) Photos">
    <a data-property-id="8404" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="8404" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="8404" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/a-city-penthouse/" title="A CITY PENTHOUSE"></a>
			</div>
							<div className="property-label property-featured">
											<p className="label-item">
                                <span className="property-label-bg">Featured                                    <span className="property-arrow"></span></span>
						</p>
														</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]" >For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]" ></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/a-city-penthouse/" title="A CITY PENTHOUSE">A CITY PENTHOUSE</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        372,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="SYRYS INVESTMENT LTD">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/penthouse/" title="Penthouse"><span>Penthouse </span></a>
											</div>
													<div className="property-agent">
						<a href="/author/syrysgmail-com/" title="SYRYS GROUP">						<i className="fa fa-user"></i>
						<span>SYRYS GROUP</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 12 months ago				</div>
			</div>
							<div className="property-excerpt">
					<p>A CITY What makes the A City unique besides urban life is the futures that anticipate the needs, quality, respectable and reliable projects that create a difference, sensitive to the environment, with high brand value and walking distance to the bazaar, shopping malls, markets, schools not forgetting nature and amazing sea, mountain and city views. […]</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">376.7 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																<div className="property-bedrooms">
							<div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="3 Bedrooms">
								<span className="fa fa-hotel"></span>
								<span className="property-info-value">3</span>
							</div>
						</div>
																<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="3 Bathrooms">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">3</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap ere-property-featured">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/Main-330x180.png" onerror="this.src = '../../assets/img/no-image.jpg';" alt="Seasons City in Cyprus" title="Seasons City in Cyprus" />
			<div className="property-action block-center">
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(8) Photos">
    <a data-property-id="771" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="771" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="771" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/single-house-los-angeles/" title="Seasons City in Cyprus"></a>
			</div>
							<div className="property-label property-featured">
											<p className="label-item">
                                <span className="property-label-bg">Featured                                    <span className="property-arrow"></span></span>
						</p>
														</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]" >For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]" ></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/single-house-los-angeles/" title="Seasons City in Cyprus">Seasons City in Cyprus</a>
				</h2>
									<div className="property-price">
                        <span>
                            <span className="property-price-prefix">Starting from </span>                            165,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="Syrys Investment Ltd">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=Syrys%20Investment%20Ltd"><span>Syrys Investment Ltd</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/residential-complex/" title="Residential Complex"><span>Residential Complex </span></a>
											</div>
													<div className="property-agent">
						<a href="/author/syrysgmail-com/" title="SYRYS GROUP">						<i className="fa fa-user"></i>
						<span>SYRYS GROUP</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 6 years ago				</div>
			</div>
							<div className="property-excerpt">
					<p>ARE YOU READY TO LIVE ON THE BEACH? SEASONS City, is the newest project presenting you a life situated right on the sea front. Established by four major companies with the rising value of investments in Northern Cyprus this projects offers a guaranteed partnership in NORTHERN CYPRUS. The project, which will be built on 76 […]</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">75 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																<div className="property-bedrooms">
							<div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="2 Bedrooms">
								<span className="fa fa-hotel"></span>
								<span className="property-info-value">2</span>
							</div>
						</div>
																<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="2 Bathrooms">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">2</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap ere-property-featured">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/cover-1-330x180.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="4+1 Luxury villa in a residence" title="4+1 Luxury villa in a residence"/>
			<div className="property-action block-center" >
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(9) Photos">
    <a data-property-id="768" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="768" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="768" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/apartment-morden-santa-monica-los-angeles/" title="4+1 Luxury villa in a residence"></a>
			</div>
							<div className="property-label property-featured">
											<p className="label-item">
                                <span className="property-label-bg">Featured                                    <span className="property-arrow"></span></span>
						</p>
														</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]" >For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]" ></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/apartment-morden-santa-monica-los-angeles/" title="4+1 Luxury villa in a residence">4+1 Luxury villa in a residence</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        380,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="SYRYS Investment Ltd">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=SYRYS%20Investment%20Ltd"><span>SYRYS Investment Ltd</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/villa/" title="Villa"><span>Villa </span></a>
											</div>
													<div className="property-agent">
						<a href="/author/syrysgmail-com/" title="SYRYS GROUP">						<i className="fa fa-user"></i>
						<span>SYRYS GROUP</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 6 years ago				</div>
			</div>
							<div className="property-excerpt">
					<p>A Privileged Life This project, where all the beauties of Ozanköy come together, is named after Murat Efendi, the unforgettable figure of this region (Murat Hüseyin), who knows the value of the land he lives in, and who blends the abundance of his labor with his hard work and generosity, will carry happiness and peace […]</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">290 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																<div className="property-bedrooms">
							<div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="4 Bedrooms">
								<span className="fa fa-hotel"></span>
								<span className="property-info-value">4</span>
							</div>
						</div>
																<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="3 Bathrooms">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">3</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap ere-property-featured">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/cover-330x180.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="Dreamlike Homes in a complex" title="Dreamlike Homes in a complex"/>
			<div className="property-action block-center">
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(9) Photos">
    <a data-property-id="663" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="663" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="663" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/restaurant-austin-tx-78702/" title="Dreamlike Homes in a complex"></a>
			</div>
							<div className="property-label property-featured">
											<p className="label-item">
                                <span className="property-label-bg">Featured                                    <span className="property-arrow"></span></span>
						</p>
														</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]">For Sale                                                <span className="property-arrow !border-x-solid !border-x-[#dd3333]" ></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/restaurant-austin-tx-78702/" title="Dreamlike Homes in a complex">Dreamlike Homes in a complex</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        455,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="syrys investment ltd">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=syrys%20investment%20ltd"><span>syrys investment ltd</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/villa/" title="Villa"><span>Villa </span></a>
											</div>
													<div className="property-agent">
						<a href="/author/syrysgmail-com/" title="SYRYS GROUP">						<i className="fa fa-user"></i>
						<span>SYRYS GROUP</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 6 years ago				</div>
			</div>
							<div className="property-excerpt">
					<p>Dreams to live on island that embraces the shimmering blue Large windows and terraces opens to the most beautiful sea of the Mediterranean come true with Dreamlike Houses. This villas are located in the Kyrenia district and consist of 13 villas with private pool built on an area of 6843m2. A DREAMLIKE LIFE ON THE […]</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">348 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																<div className="property-bedrooms">
							<div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="5 Bedrooms">
								<span className="fa fa-hotel"></span>
								<span className="property-info-value">5</span>
							</div>
						</div>
																<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="4 Bathrooms">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">4</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap ere-property-featured">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/Zolive-330x180.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="Zolive residential homes" title="Zolive residential homes" />
			<div className="property-action block-center">
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(10) Photos">
    <a data-property-id="657" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="657" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="657" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/villa-4445-lamont-st-san-diego-ca-92109/" title="Zolive residential homes"></a>
			</div>
							<div className="property-label property-featured">
											<p className="label-item">
                                <span className="property-label-bg">Featured                                    <span className="property-arrow"></span></span>
						</p>
														</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]">For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]" ></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/villa-4445-lamont-st-san-diego-ca-92109/" title="Zolive residential homes">Zolive residential homes</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        196,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="SYRYS Investment Ltd">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=SYRYS%20Investment%20Ltd"><span>SYRYS Investment Ltd</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/residential-complex/" title="Residential Complex"><span>Residential Complex </span></a>
											</div>
													<div className="property-agent">
						<a href="/author/syrysgmail-com/" title="SYRYS GROUP">						<i className="fa fa-user"></i>
						<span>SYRYS GROUP</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 6 years ago				</div>
			</div>
							<div className="property-excerpt">
					<p>Our project, which is the closest to the center of Kyrenia and 50 meters away from the magnificent Zeytinlik Village center, reflects the historical texture of Kyrenia positioned among olive trees with a unique mountain and sea view. All olive trees on the land in the project have been preserved, and the trees that need […]</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">165 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																<div className="property-bedrooms">
							<div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="3 Bedrooms">
								<span className="fa fa-hotel"></span>
								<span className="property-info-value">3</span>
							</div>
						</div>
																<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="3 Bathrooms">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">3</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap ere-property-featured">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/2-1-330x180.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="3+1 Capital CITY VILLA" title="3+1 Capital CITY VILLA" />
			<div className="property-action block-center">
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(10) Photos">
    <a data-property-id="649" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="649" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="649" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/apartment-1580-flat-shoals-rd-se-suite-f-atlanta/" title="3+1 Capital CITY VILLA"></a>
			</div>
							<div className="property-label property-featured">
											<p className="label-item">
                                <span className="property-label-bg">Featured                                    <span className="property-arrow"></span></span>
						</p>
														</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]" >For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]" ></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/apartment-1580-flat-shoals-rd-se-suite-f-atlanta/" title="3+1 Capital CITY VILLA">3+1 Capital CITY VILLA</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        167,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="Syrys Investment Ltd">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=Syrys%20Investment%20Ltd"><span>Syrys Investment Ltd</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/villa/" title="Villa"><span>Villa </span></a>
											</div>
													<div className="property-agent">
						<a href="/author/syrysgmail-com/" title="SYRYS GROUP">						<i className="fa fa-user"></i>
						<span>SYRYS GROUP</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 6 years ago				</div>
			</div>
							<div className="property-excerpt">
					<p>Are you ready for a brand new life worthy of your name? A new day begins… Peaceful, energetic and exciting. The rising sun is pampering us again… Every time we are born, so that we can live our dreams We are generously presented with a gift. A new day, an opportunity, a hope and a […]</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">280 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																<div className="property-bedrooms">
							<div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="3 Bedrooms">
								<span className="fa fa-hotel"></span>
								<span className="property-info-value">3</span>
							</div>
						</div>
																<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="3 Bathrooms">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">3</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap ere-property-featured">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/3-1-1-330x180.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="3+1 Intense Residence" title="3+1 Intense Residence" />
			<div className="property-action block-center">
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(10) Photos">
    <a data-property-id="632" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="632" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="632" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/villa-552-flat-shoals-ave-se-atlanta/" title="3+1 Intense Residence"></a>
			</div>
							<div className="property-label property-featured">
											<p className="label-item">
                                <span className="property-label-bg">Featured                                    <span className="property-arrow"></span></span>
						</p>
														</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]" >For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]" ></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/villa-552-flat-shoals-ave-se-atlanta/" title="3+1 Intense Residence">3+1 Intense Residence</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        295,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="Syrys Investment Ltd">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=Syrys%20Investment%20Ltd"><span>Syrys Investment Ltd</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/residential-complex/" title="Residential Complex"><span>Residential Complex </span></a>
											</div>
													<div className="property-agent">
						<a href="/author/syrysgmail-com/" title="SYRYS GROUP">						<i className="fa fa-user"></i>
						<span>SYRYS GROUP</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 6 years ago				</div>
			</div>
							<div className="property-excerpt">
					<p>Designed as a lifelong living space in Metehan, Nicosia and constructed in a 35 thousand m2 central and spacious area, Intense residence consists of Residential blocks offering 21 shops and 114 flats with options of 1+1, 2+1, 3+1 and 24 Blocks of apartments with 6 of 3+1 luxury flats and 2 of 2+1 penthouses. Offering […]</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">158 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																<div className="property-bedrooms">
							<div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="3 Bedrooms">
								<span className="fa fa-hotel"></span>
								<span className="property-info-value">3</span>
							</div>
						</div>
																<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="2 Bathrooms">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">2</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap ere-property-featured">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/cover-330x180.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="2+1 Peak View" title="2+1 Peak View" />
			<div className="property-action block-center">
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(10) Photos">
    <a data-property-id="605" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="605" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="605" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/villa-in-1800-ocean-front-walk-venice/" title="2+1 Peak View"></a>
			</div>
							<div className="property-label property-featured">
											<p className="label-item">
                                <span className="property-label-bg">Featured                                    <span className="property-arrow"></span></span>
						</p>
														</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]" >For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]" ></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/villa-in-1800-ocean-front-walk-venice/" title="2+1 Peak View">2+1 Peak View</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        95,000£                            <span className="property-price-postfix"> / Year</span>                        </span>
					</div>
							</div>
							<div className="property-location" title="syrys investment ltd">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=syrys%20investment%20ltd"><span>syrys investment ltd</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/apartment/" title="Apartment"><span>Apartment </span></a>
											</div>
													<div className="property-agent">
						<a href="/author/syrysgmail-com/" title="SYRYS GROUP">						<i className="fa fa-user"></i>
						<span>SYRYS GROUP</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 6 years ago				</div>
			</div>
							<div className="property-excerpt">
					<p>The project is in the heart of Nicosia, the main advantage of the project is the view and the architectural difference as well as the value it adds to Nicosia as a city. The payment plan for the project is 30% down-payment and installment payment till the project is ready June 2023</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">94.6 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																<div className="property-bedrooms">
							<div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="2 Bedrooms">
								<span className="fa fa-hotel"></span>
								<span className="property-info-value">2</span>
							</div>
						</div>
																<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="1 Bathroom">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">1</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/IMG-20230425-WA0002-330x180.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="BARGAIN 2+1 APARTMENT IN ALSANCAK" title="BARGAIN 2+1 APARTMENT IN ALSANCAK" />
			<div className="property-action block-center">
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(9) Photos">
    <a data-property-id="11138" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="11138" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="11138" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/bargain-21-apartment-in-alsancak/" title="BARGAIN 2+1 APARTMENT IN ALSANCAK"></a>
			</div>
							<div className="property-label property-featured">
																														<p className="label-item">
														<span className="property-label-bg bg-[#32b5f8]">Hot Offer                                                            <span className="property-arrow border-x-solid border-x-[#32b5f8]"></span>
														</span>
							</p>
															</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]" >For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]" ></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/bargain-21-apartment-in-alsancak/" title="BARGAIN 2+1 APARTMENT IN ALSANCAK">BARGAIN 2+1 APARTMENT IN ALSANCAK</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        67,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="SYRYS INVESTMENT LTD">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/apartment/" title="Apartment"><span>Apartment </span></a>
											</div>
													<div className="property-agent">
						<a href="/property/bargain-21-apartment-in-alsancak/" title="SYRYS INVESTMENT LTD">						<i className="fa fa-user"></i>
						<span>SYRYS INVESTMENT LTD</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 1 month ago				</div>
			</div>
							<div className="property-excerpt">
					<p>Our 2+1 flat have exchange title deed and is suitable for bank loan. Please contact us to see our flat and get detailed information.</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">75 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																<div className="property-bedrooms">
							<div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="2 Bedrooms">
								<span className="fa fa-hotel"></span>
								<span className="property-info-value">2</span>
							</div>
						</div>
																<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="1 Bathroom">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">1</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/16-330x180.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="SEA VIEW EN-SUITE FLAT IN THE CENTER OF KYRENIA" title="SEA VIEW EN-SUITE FLAT IN THE CENTER OF KYRENIA" />
			<div className="property-action block-center">
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(10) Photos">
    <a data-property-id="11089" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="11089" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="11089" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/sea-view-en-suite-flat-in-the-center-of-kyrenia/" title="SEA VIEW EN-SUITE FLAT IN THE CENTER OF KYRENIA"></a>
			</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]" >For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]"></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/sea-view-en-suite-flat-in-the-center-of-kyrenia/" title="SEA VIEW EN-SUITE FLAT IN THE CENTER OF KYRENIA">SEA VIEW EN-SUITE FLAT IN THE CENTER OF KYRENIA</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        165,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="SYRYS INVESTMENT LTD">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/apartment/" title="Apartment"><span>Apartment </span></a>
											</div>
													<div className="property-agent">
						<a href="/property/sea-view-en-suite-flat-in-the-center-of-kyrenia/" title="SYRYS INVESTMENT LTD">						<i className="fa fa-user"></i>
						<span>SYRYS INVESTMENT LTD</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 2 months ago				</div>
			</div>
							<div className="property-excerpt">
					<p>Our flat in the center of Kyrenia, with en-suite bathrooms and close to schools and the municipality building, is for sale. Please contact us for detailed information and payment plan.</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">125 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																<div className="property-bedrooms">
							<div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="3 Bedrooms">
								<span className="fa fa-hotel"></span>
								<span className="property-info-value">3</span>
							</div>
						</div>
																<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="2 Bathrooms">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">2</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/14-330x180.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="SPACIOUS 3+1 FLAT IN THE CENTER OF KYRENIA" title="SPACIOUS 3+1 FLAT IN THE CENTER OF KYRENIA"/>
			<div className="property-action block-center">
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(10) Photos">
    <a data-property-id="11078" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="11078" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="11078" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/spacious-31-flat-in-the-center-of-kyrenia/" title="SPACIOUS 3+1 FLAT IN THE CENTER OF KYRENIA"></a>
			</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]" >For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]"></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/spacious-31-flat-in-the-center-of-kyrenia/" title="SPACIOUS 3+1 FLAT IN THE CENTER OF KYRENIA">SPACIOUS 3+1 FLAT IN THE CENTER OF KYRENIA</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        140,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="SYRYS INVESTMENT LTD">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/apartment/" title="Apartment"><span>Apartment </span></a>
											</div>
													<div className="property-agent">
						<a href="/property/spacious-31-flat-in-the-center-of-kyrenia/" title="SYRYS INVESTMENT LTD">						<i className="fa fa-user"></i>
						<span>SYRYS INVESTMENT LTD</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 2 months ago				</div>
			</div>
							<div className="property-excerpt">
					<p>Located in the center of Kyrenia, close to schools and the municipality building, our brand new flat, which will be completed soon, is for sale, please contact for detailed information and payment plan.</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">117 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																<div className="property-bedrooms">
							<div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="3 Bedrooms">
								<span className="fa fa-hotel"></span>
								<span className="property-info-value">3</span>
							</div>
						</div>
																<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="1 Bathroom">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">1</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/IMG-20230419-WA0006-330x180.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="FURNISHED FLAT WITH SEA VIEW" title="FURNISHED FLAT WITH SEA VIEW"/>
			<div className="property-action block-center">
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(9) Photos">
    <a data-property-id="11067" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="11067" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="11067" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/furnished-flat-with-sea-view/" title="FURNISHED FLAT WITH SEA VIEW"></a>
			</div>
							<div className="property-label property-featured">
																														<p className="label-item">
														<span className="property-label-bg bg-[#32b5f8]">Hot Offer                                                            <span className="property-arrow border-x-solid border-x-[#32b5f8]"></span>
														</span>
							</p>
															</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]" >For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]" ></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/furnished-flat-with-sea-view/" title="FURNISHED FLAT WITH SEA VIEW">FURNISHED FLAT WITH SEA VIEW</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        73,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="SYRYS INVESTMENT LTD">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/studio/" title="Studio"><span>Studio </span></a>
											</div>
													<div className="property-agent">
						<a href="/property/furnished-flat-with-sea-view/" title="SYRYS INVESTMENT LTD">						<i className="fa fa-user"></i>
						<span>SYRYS INVESTMENT LTD</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 2 months ago				</div>
			</div>
							<div className="property-excerpt">
					<p>Our studio flat, located in the residence with all the facilities from the indoor pool to the sauna, in the comfort of a sea view hotel in İskele, is for sale together with its furniture, please contact for detailed information.</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">24 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																					<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="1 Bathroom">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">1</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/IMG-20230418-WA0032-330x180.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="STUDIO FLAT WITH WONDERFUL VIEW" title="STUDIO FLAT WITH WONDERFUL VIEW"/>
			<div className="property-action block-center">
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(9) Photos">
    <a data-property-id="11055" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="11055" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="11055" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/studio-flat-with-wonderful-view/" title="STUDIO FLAT WITH WONDERFUL VIEW"></a>
			</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]" >For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]" ></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/studio-flat-with-wonderful-view/" title="STUDIO FLAT WITH WONDERFUL VIEW">STUDIO FLAT WITH WONDERFUL VIEW</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        83,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="SYRYS INVESTMENT LTD">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/studio/" title="Studio"><span>Studio </span></a>
											</div>
													<div className="property-agent">
						<a href="/property/studio-flat-with-wonderful-view/" title="SYRYS INVESTMENT LTD">						<i className="fa fa-user"></i>
						<span>SYRYS INVESTMENT LTD</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 2 months ago				</div>
			</div>
							<div className="property-excerpt">
					<p>Our studio flat in the comfort of a hotel with a sea view on the pier is for sale, you can contact us for detailed information.</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">28 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																					<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="1 Bathroom">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">1</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                                            <div className="mg-bottom-30 ere-item-wrap">
	<div className="property-inner">
		<div className="property-image">
			<img width="330" height="180" src="../../assets/img/photo_5_2023-03-07_18-08-46-330x180.jpg" onerror="this.src = '../../assets/img/no-image.jpg';" alt="BARGAIN 1+1 AT A POPULAR LOCATION" title="BARGAIN 1+1 AT A POPULAR LOCATION"/>
			<div className="property-action block-center">
				<div className="block-center-inner">
					<div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(7) Photos">
    <a data-property-id="11037" href="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></a>
</div><a href="javascript:void(0)" className="property-favorite" data-property-id="11037" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></a><a className="compare-property" href="javascript:void(0)" data-property-id="11037" data-toggle="tooltip" title="" data-original-title="Compare">
	<i className="fa fa-plus"></i>
</a>				</div>
				<a className="property-link" href="/property/bargain-11-at-a-popular-location/" title="BARGAIN 1+1 AT A POPULAR LOCATION"></a>
			</div>
										<div className="property-status">
																	<p className="status-item">
											<span className="property-status-bg !bg-[#dd3333]" >For Sale                                                <span className="property-arrow border-x-solid border-x-[#dd3333]" ></span>
											</span>
						</p>
									</div>
			
		</div>
		<div className="property-item-content">
			<div className="property-heading">
				<h2 className="property-title"><a href="/property/bargain-11-at-a-popular-location/" title="BARGAIN 1+1 AT A POPULAR LOCATION">BARGAIN 1+1 AT A POPULAR LOCATION</a>
				</h2>
									<div className="property-price">
                        <span>
                                                        70,000£                                                    </span>
					</div>
							</div>
							<div className="property-location" title="SYRYS INVESTMENT LTD">
					<i className="fa fa-map-marker"></i>
					<a target="_blank" href="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></a>
				</div>
						<div className="property-element-inline">
									<div className="property-type-list">
						<i className="fa fa-tag"></i>
													<a href="/property-type/apartment/" title="Apartment"><span>Apartment </span></a>
											</div>
													<div className="property-agent">
						<a href="/property/bargain-11-at-a-popular-location/" title="SYRYS INVESTMENT LTD">						<i className="fa fa-user"></i>
						<span>SYRYS INVESTMENT LTD</span>
						</a>					</div>
								<div className="property-date">
					<i className="fa fa-calendar"></i>
					 3 months ago				</div>
			</div>
							<div className="property-excerpt">
					<p>This apartment is located at a popular location of Girne city center, it is close to all other amnesties and to GAU bus route because of that it is a good investment to rent it fast to students.</p>
				</div>
						<div className="property-info">
				<div className="property-info-inner">
											<div className="property-area">
							<div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
								<span className="fa fa-arrows"></span>
								<span className="property-info-value">55 m<sup>2</sup>		                                            </span>
							</div>
						</div>
																<div className="property-bedrooms">
							<div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="1 Bedroom">
								<span className="fa fa-hotel"></span>
								<span className="property-info-value">1</span>
							</div>
						</div>
																<div className="property-bathrooms">
							<div className="property-bathrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="1 Bathroom">
								<span className="fa fa-bath"></span>
								<span className="property-info-value">1</span>
							</div>
						</div>
									</div>
			</div>
		</div>
	</div>
</div>

                </div>

            </div>



            <div className="clearfix"></div>
            <div className="paging-navigation clearfix">
<span aria-current="page" className="page-numbers current">1</span>
<Link className="page-numbers" to="/property-status/for-rent/page/2/">2</Link>
<span className="page-numbers dots">…</span>
<Link className="page-numbers" to="/property-status/for-rent/page/7/">7</Link>
<Link className="next page-numbers" to="/property-status/for-rent/page/2/">Next</Link></div>            </div>
    </div>
</div>
</div></div>
        </div>
        <div className="sidebar-mobile-canvas-icon" title="Click to show Canvas Sidebar">
            <i className="fa fa-sliders"></i>
        </div>

    </div>
</div>
<div className="overlay-canvas-sidebar"></div>
            
                <Footer />
            </div>

        </>
    )

}

    export default Sale