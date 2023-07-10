import { useEffect, useState, useCallback, useRef } from "react";
import LanguageBar from "../components/HomeComponents/topbar/languagebar";
import NavigationBar from "../components/HomeComponents/topbar/navigationbar";
import MetaTags from "react-meta-tags";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const E404page = () => {

  return (
    <>
      <MetaTags>
        <title>Page not found | Property Investment</title>
      </MetaTags>

      <div
        className="home page-template page-template-elementor_header_footer elementor-kit-4695 page page-id-58 wp-embed-responsive beyot-class chrome header-is-float header-sticky-fix-style elementor-default elementor-template-full-width elementor-kit-4695 elementor-page elementor-page-58 e--ua-blink e--ua-chrome e--ua-webkit elementor elementor-58 property-template-default single single-property postid-8381 has-sidebar"
        id="wrapper"
      >
        <LanguageBar />
        <NavigationBar />

        <div id="wrapper-content" class="clearfix ">
            <div class="page404" style={{
                backgroundImage: "url(https://www.qsyrys.com/wp-content/themes/g5-beyot/assets/images/bg-404.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "repeat"
            }}>
                
        <div class="page404-content container">
            <h3 class="subtitle">Oops, This Page Not Be Found!</h3>
            <h2 class="title">4<span>0</span>4</h2>
            <div class="description">We are really sorry but the page you requested is missing                                    <span class="return-text">Or back to </span>
                    <a href="https://www.qsyrys.com/">
                        Go to homepage                    </a>
                            </div>
            <div class="search-form-wrapper">
                <div class="search-form">
                    <form role="search" method="get" class="search-form" action="https://www.qsyrys.com/">
	<input type="search" placeholder="ENTER YOUR  KEYWORD" value="" name="s" />
	<button type="submit"><i class="fa fa-search"></i></button>
</form>
                </div>
            </div>
        </div>
    </div>

</div>
        <div className="overlay-canvas-sidebar"></div>
      </div>
      
      <Footer />
      
    </>
  );
};

export default E404page;
