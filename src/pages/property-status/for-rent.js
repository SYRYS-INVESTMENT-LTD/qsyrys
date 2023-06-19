import LanguageBar from "../../components/HomeComponents/topbar/languagebar";
import NavigationBar from "../../components/HomeComponents/topbar/navigationbar";
import PropertyHeader from "../../components/propertyComponents/header";
import MetaTags from 'react-meta-tags';
import "../../assets/css/property.css";
import "../../assets/css/property.min.css";
import "../../assets/css/archive-property.min.css";
import Footer from "../../components/footer";
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { useEffect } from 'react';

const Rent = () => {

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
                <title>For Rent Archives | Property Investment</title>
            </MetaTags>

            <div
                className="home page-template page-template-elementor_header_footer elementor-kit-4695 page page-id-58 wp-embed-responsive beyot-class chrome header-is-float header-sticky-fix-style elementor-default elementor-template-full-width elementor-kit-4695 elementor-page elementor-page-58 e--ua-blink e--ua-chrome e--ua-webkit elementor elementor-58"
                id="wrapper"
            >
                <LanguageBar />
                <NavigationBar />

                <div id="wrapper-content" className="clearfix ">

<PropertyHeader forType="rent" />

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
    <img width="370" height="180" src="https://www.qsyrys.com/wp-content/uploads/2023/05/IMG-20230425-WA0002-370x180.jpg" onerror="this.src = '/wp-content/uploads/2017/12/no-image.jpg';" alt="BARGAIN 2+1 APARTMENT IN ALSANCAK" title="BARGAIN 2+1 APARTMENT IN ALSANCAK" />

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
            67,000£                </span>
    </div>
    <div className="property-location" title="SYRYS INVESTMENT LTD">
        <i className="fa fa-map-marker"></i>
        <Link target="_blank" to="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></Link>
    </div>
</div>
                </div>
            </div></SwiperSlide><SwiperSlide  className="owl-item !min-h-[230px] w-[220px]"><div className="property-item">
                <div className="property-inner">
<div className="property-image">
    <img width="370" height="180" src="https://www.qsyrys.com/wp-content/uploads/2023/05/photo_17@20-01-2023_11-39-48-370x180.jpg" onerror="this.src = '/wp-content/uploads/2017/12/no-image.jpg';" alt="1 BEDROOM APARTMENT IN ATOLL PARK" title="1 BEDROOM APARTMENT IN ATOLL PARK" />

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
            500£                </span>
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
    <img width="370" height="180" src="https://www.qsyrys.com/wp-content/uploads/2023/04/IMG-20230425-WA0020-370x180.jpg" onerror="this.src = '/wp-content/uploads/2017/12/no-image.jpg';" alt="SPACIOUS 2+1 FLAT IN THE CENTER OF KYRENIA" title="SPACIOUS 2+1 FLAT IN THE CENTER OF KYRENIA" />

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
            650£                </span>
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
                <h2>For Rent			<sub>(111)</sub></h2>
            </div>                <div className="archive-property-action property-status-filter">
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
            <div className="mg-bottom-30 ere-item-wrap">
                <div className="property-inner">
<div className="property-image">
    <img width="330" height="180" src="https://www.qsyrys.com/wp-content/uploads/2023/01/photo_9@10-01-2023_10-54-53-330x180.jpg" onerror="this.src = '/wp-content/uploads/2017/12/no-image.jpg';" alt="1+1 Holiday Home" title="1+1 Holiday Home" />
        <div className="property-action block-center">
            <div className="block-center-inner">
                <div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(10) Photos">
<Link data-property-id="8440" to="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></Link>
                </div><Link to="javascript:void(0)" className="property-favorite" data-property-id="8440" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></Link><Link className="compare-property" to="javascript:void(0)" data-property-id="8440" data-toggle="tooltip" title="" data-original-title="Compare">
<i className="fa fa-plus"></i>
                </Link>				</div>
            <Link className="property-link" to="/property/11-holiday-home/" title="1+1 Holiday Home"></Link>
        </div>
        <div className="property-label property-featured">
            <p className="label-item">
                <span className="property-label-bg bg-[#888]">Short Rental<span className="property-arrow border-x-solid border-x-[#888]"></span>
                </span>
            </p>
        </div>
        <div className="property-status">
            <p className="status-item">
                <span className="property-status-bg !bg-[#32b5f8]">For Rent        <span className="property-arrow !border-x-solid !border-x-[#32b5f8]"></span>
                </span>
            </p>
        </div>

</div>
<div className="property-item-content">
    <div className="property-heading">
        <h2 className="property-title"><Link to="/property/11-holiday-home/" title="1+1 Holiday Home">1+1 Holiday Home</Link>
        </h2>
        <div className="property-price">
            <span>
                55£        <span className="property-price-postfix"> / Per Night</span>    </span>
        </div>
    </div>
    <div className="property-element-inline">
        <div className="property-type-list">
            <i className="fa fa-tag"></i>
            <Link to="/property-type/apartment/" title="Apartment"><span>Apartment </span></Link>
        </div>
        <div className="property-agent">
            <Link to="/author/syrysgmail-com/" title="SYRYS GROUP">						<i className="fa fa-user"></i>
                <span>SYRYS GROUP</span>
            </Link>					</div>
        <div className="property-date">
            <i className="fa fa-calendar"></i>
            11 months ago				</div>
    </div>
    <div className="property-excerpt">
        <p>Short Term Rental Deposit is £100 and refundable. Cleaning fee is not included for any booking less than 4 nights. Check in Time 14:00. Check Out Time: 12:00. No Pets. Smart Lock. Smart Air Conditioner. Modern Garden. Privacy. 65 inch Television. Free Netflix. No Smoking inside the property. Smart Lock code is issued upon payment […]</p>
    </div>
    <div className="property-info">
        <div className="property-info-inner">
            <div className="property-area">
                <div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
<span className="fa fa-arrows"></span>
<span className="property-info-value">70 m<sup>2</sup>		    </span>
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

            <div className="mg-bottom-30 ere-item-wrap">
                <div className="property-inner">
<div className="property-image">
    <img width="330" height="180" src="https://www.qsyrys.com/wp-content/uploads/2023/05/photo_17@20-01-2023_11-39-48-330x180.jpg" onerror="this.src = '/wp-content/uploads/2017/12/no-image.jpg';" alt="1 BEDROOM APARTMENT IN ATOLL PARK" title="1 BEDROOM APARTMENT IN ATOLL PARK" />
        <div className="property-action block-center">
            <div className="block-center-inner">
                <div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(6) Photos">
<Link data-property-id="11128" to="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></Link>
                </div><Link to="javascript:void(0)" className="property-favorite" data-property-id="11128" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></Link><Link className="compare-property" to="javascript:void(0)" data-property-id="11128" data-toggle="tooltip" title="" data-original-title="Compare">
<i className="fa fa-plus"></i>
                </Link>				</div>
            <Link className="property-link" to="/property/1-bedroom-apartment-in-atoll-park/" title="1 BEDROOM APARTMENT IN ATOLL PARK"></Link>
        </div>
        <div className="property-status">
            <p className="status-item">
                <span className="property-status-bg !bg-[#32b5f8]">For Rent        <span className="property-arrow !border-l-solid !border-x-[#32b5f8]" ></span>
                </span>
            </p>
        </div>

</div>
<div className="property-item-content">
    <div className="property-heading">
        <h2 className="property-title"><Link to="/property/1-bedroom-apartment-in-atoll-park/" title="1 BEDROOM APARTMENT IN ATOLL PARK">1 BEDROOM APARTMENT IN ATOLL PARK</Link>
        </h2>
        <div className="property-price">
            <span>
                500£            </span>
        </div>
    </div>
    <div className="property-location" title="SYRYS INVESTMENT LTD">
        <i className="fa fa-map-marker"></i>
        <Link target="_blank" to="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></Link>
    </div>
    <div className="property-element-inline">
        <div className="property-type-list">
            <i className="fa fa-tag"></i>
            <Link to="/property-type/apartment/" title="Apartment"><span>Apartment </span></Link>
        </div>
        <div className="property-agent">
            <Link to="/property/1-bedroom-apartment-in-atoll-park/" title="SYRYS INVESTMENT LTD">						<i className="fa fa-user"></i>
                <span>SYRYS INVESTMENT LTD</span>
            </Link>					</div>
        <div className="property-date">
            <i className="fa fa-calendar"></i>
            1 month ago				</div>
    </div>
    <div className="property-excerpt">
        <p>Our 1 + 1 furnished apartment with pool, gym, cafe and security is for rent, please contact for detailed information.</p>
    </div>
    <div className="property-info">
        <div className="property-info-inner">
            <div className="property-area">
                <div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
<span className="fa fa-arrows"></span>
<span className="property-info-value">55 m<sup>2</sup>		    </span>
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

            <div className="mg-bottom-30 ere-item-wrap">
                <div className="property-inner">
<div className="property-image">
    <img width="330" height="180" src="https://www.qsyrys.com/wp-content/uploads/2023/04/IMG-20230425-WA0020-330x180.jpg" onerror="this.src = '/wp-content/uploads/2017/12/no-image.jpg';" alt="SPACIOUS 2+1 FLAT IN THE CENTER OF KYRENIA" title="SPACIOUS 2+1 FLAT IN THE CENTER OF KYRENIA" />
        <div className="property-action block-center">
            <div className="block-center-inner">
                <div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(10) Photos">
<Link data-property-id="11119" to="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></Link>
                </div><Link to="javascript:void(0)" className="property-favorite" data-property-id="11119" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></Link><Link className="compare-property" to="javascript:void(0)" data-property-id="11119" data-toggle="tooltip" title="" data-original-title="Compare">
<i className="fa fa-plus"></i>
                </Link>				</div>
            <Link className="property-link" to="/property/spacious-21-flat-in-the-center-of-kyrenia/" title="SPACIOUS 2+1 FLAT IN THE CENTER OF KYRENIA"></Link>
        </div>
        <div className="property-status">
            <p className="status-item">
                <span className="property-status-bg !bg-[#32b5f8]">For Rent        <span className="property-arrow !border-x-solid !border-x-[#32b5f8]"></span>
                </span>
            </p>
        </div>

</div>
<div className="property-item-content">
    <div className="property-heading">
        <h2 className="property-title"><Link to="/property/spacious-21-flat-in-the-center-of-kyrenia/" title="SPACIOUS 2+1 FLAT IN THE CENTER OF KYRENIA">SPACIOUS 2+1 FLAT IN THE CENTER OF KYRENIA</Link>
        </h2>
        <div className="property-price">
            <span>
                650£            </span>
        </div>
    </div>
    <div className="property-location" title="SYRYS INVESTMENT LTD">
        <i className="fa fa-map-marker"></i>
        <Link target="_blank" to="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></Link>
    </div>
    <div className="property-element-inline">
        <div className="property-type-list">
            <i className="fa fa-tag"></i>
            <Link to="/property-type/apartment/" title="Apartment"><span>Apartment </span></Link>
        </div>
        <div className="property-agent">
            <Link to="/property/spacious-21-flat-in-the-center-of-kyrenia/" title="SYRYS INVESTMENT LTD">						<i className="fa fa-user"></i>
                <span>SYRYS INVESTMENT LTD</span>
            </Link>					</div>
        <div className="property-date">
            <i className="fa fa-calendar"></i>
            2 months ago				</div>
    </div>
    <div className="property-excerpt">
        <p>Located in the center of Kyrenia, our 2+1 flat is furnished for rent, has a 30 GBP fee, 3 rents, 2 deposits, 1 service fee, you can contact us to see our flat.</p>
    </div>
    <div className="property-info">
        <div className="property-info-inner">
            <div className="property-area">
                <div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
<span className="fa fa-arrows"></span>
<span className="property-info-value">90 m<sup>2</sup>		    </span>
                </div>
            </div>
            <div className="property-bedrooms">
                <div className="property-bedrooms-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="2 Bedrooms">
<span className="fa fa-hotel"></span>
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
    <img width="330" height="180" src="https://www.qsyrys.com/wp-content/uploads/2023/04/IMG-20230413-WA0022-330x180.jpg" onerror="this.src = '/wp-content/uploads/2017/12/no-image.jpg';" alt="MOUNTAIN AND SEA VIEW DOUBLE BATHROOM PENTHOUSE FLAT FOR RENT IN KYRENIA CENTER" title="MOUNTAIN AND SEA VIEW DOUBLE BATHROOM PENTHOUSE FLAT FOR RENT IN KYRENIA CENTER" />
        <div className="property-action block-center">
            <div className="block-center-inner">
                <div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(10) Photos">
<Link data-property-id="11108" to="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></Link>
                </div><Link to="javascript:void(0)" className="property-favorite" data-property-id="11108" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></Link><Link className="compare-property" to="javascript:void(0)" data-property-id="11108" data-toggle="tooltip" title="" data-original-title="Compare">
<i className="fa fa-plus"></i>
                </Link>				</div>
            <Link className="property-link" to="/property/mountain-and-sea-view-double-bathroom-penthouse-flat-for-rent-in-kyrenia-center/" title="MOUNTAIN AND SEA VIEW DOUBLE BATHROOM PENTHOUSE FLAT FOR RENT IN KYRENIA CENTER"></Link>
        </div>
        <div className="property-status">
            <p className="status-item">
                <span className="property-status-bg !bg-[#32b5f8]">For Rent        <span className="property-arrow !border-x-solid !border-x-[#32b5f8]"></span>
                </span>
            </p>
        </div>

</div>
<div className="property-item-content">
    <div className="property-heading">
        <h2 className="property-title"><Link to="/property/mountain-and-sea-view-double-bathroom-penthouse-flat-for-rent-in-kyrenia-center/" title="MOUNTAIN AND SEA VIEW DOUBLE BATHROOM PENTHOUSE FLAT FOR RENT IN KYRENIA CENTER">MOUNTAIN AND SEA VIEW DOUBLE BATHROOM PENTHOUSE FLAT FOR RENT IN KYRENIA CENTER</Link>
        </h2>
        <div className="property-price">
            <span>
                800£            </span>
        </div>
    </div>
    <div className="property-location" title="SYRYS INVESTMENT LTD">
        <i className="fa fa-map-marker"></i>
        <Link target="_blank" to="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></Link>
    </div>
    <div className="property-element-inline">
        <div className="property-type-list">
            <i className="fa fa-tag"></i>
            <Link to="/property-type/penthouse/" title="Penthouse"><span>Penthouse </span></Link>
        </div>
        <div className="property-agent">
            <Link to="/property/mountain-and-sea-view-double-bathroom-penthouse-flat-for-rent-in-kyrenia-center/" title="SYRYS INVESTMENT LTD">						<i className="fa fa-user"></i>
                <span>SYRYS INVESTMENT LTD</span>
            </Link>					</div>
        <div className="property-date">
            <i className="fa fa-calendar"></i>
            2 months ago				</div>
    </div>
    <div className="property-excerpt">
        <p>Our furnished apartment is a duplex and has views on two sides, please contact us to see our apartment and get detailed information.</p>
    </div>
    <div className="property-info">
        <div className="property-info-inner">
            <div className="property-area">
                <div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
<span className="fa fa-arrows"></span>
<span className="property-info-value">85 m<sup>2</sup>		    </span>
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

            
            

            <div className="mg-bottom-30 ere-item-wrap">
                <div className="property-inner">
<div className="property-image">
    <img width="330" height="180" src="https://www.qsyrys.com/wp-content/uploads/2023/03/photo_1_2023-02-25_15-02-52-330x180.jpg" onerror="this.src = '/wp-content/uploads/2017/12/no-image.jpg';" alt="LUXURY EN-SUITE 2+1 IN DIAMOND PARK" title="LUXURY EN-SUITE 2+1 IN DIAMOND PARK" />
        <div className="property-action block-center">
            <div className="block-center-inner">
                <div className="property-view-gallery-wrap" data-toggle="tooltip" title="" data-original-title="(10) Photos">
<Link data-property-id="11016" to="javascript:void(0)" className="property-view-gallery"><i className="fa fa-camera"></i></Link>
                </div><Link to="javascript:void(0)" className="property-favorite" data-property-id="11016" data-toggle="tooltip" title="" data-title-not-favorite="Add to Favorite" data-title-favorited="It is my favorite" data-icon-not-favorite="fa fa-star-o" data-icon-favorited="fa fa-star" data-original-title="Add to Favorite"><i className="fa fa-star-o"></i></Link><Link className="compare-property" to="javascript:void(0)" data-property-id="11016" data-toggle="tooltip" title="" data-original-title="Compare">
<i className="fa fa-plus"></i>
                </Link>				</div>
            <Link className="property-link" to="/property/luxury-en-suite-21-in-diamond-park/" title="LUXURY EN-SUITE 2+1 IN DIAMOND PARK"></Link>
        </div>
        <div className="property-status">
            <p className="status-item">
                <span className="property-status-bg !bg-[#32b5f8]">For Rent        <span className="property-arrow !border-x-solid !border-x-[#32b5f8]"></span>
                </span>
            </p>
        </div>

</div>
<div className="property-item-content">
    <div className="property-heading">
        <h2 className="property-title"><Link to="/property/luxury-en-suite-21-in-diamond-park/" title="LUXURY EN-SUITE 2+1 IN DIAMOND PARK">LUXURY EN-SUITE 2+1 IN DIAMOND PARK</Link>
        </h2>
        <div className="property-price">
            <span>Price on call</span>
        </div>
    </div>
    <div className="property-location" title="SYRYS INVESTMENT LTD">
        <i className="fa fa-map-marker"></i>
        <Link target="_blank" to="http://maps.google.com/?q=SYRYS%20INVESTMENT%20LTD"><span>SYRYS INVESTMENT LTD</span></Link>
    </div>
    <div className="property-element-inline">
        <div className="property-type-list">
            <i className="fa fa-tag"></i>
            <Link to="/property-type/apartment/" title="Apartment"><span>Apartment </span></Link>
        </div>
        <div className="property-agent">
            <Link to="/property/luxury-en-suite-21-in-diamond-park/" title="SYRYS INVESTMENT LTD">						<i className="fa fa-user"></i>
                <span>SYRYS INVESTMENT LTD</span>
            </Link>					</div>
        <div className="property-date">
            <i className="fa fa-calendar"></i>
            3 months ago				</div>
    </div>
    <div className="property-excerpt">
        <p>Our flat is fully furnished and has furniture up to a tumble dryer, the site is located in Karakum where it is very close to Grand Pasha Hotel and Lord’s Palace Hotel, it is very suitable site for families, there is a pool and underground parking lot. Please contact us for more detailed information and […]</p>
    </div>
    <div className="property-info">
        <div className="property-info-inner">
            <div className="property-area">
                <div className="property-area-inner property-info-item-tooltip" data-toggle="tooltip" title="" data-original-title="Size">
<span className="fa fa-arrows"></span>
<span className="property-info-value">95 m<sup>2</sup>		    </span>
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
</div>

                

                <Footer />

            </div>

        </>
    )

}

export default Rent