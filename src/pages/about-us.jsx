import { MetaTags } from "react-meta-tags";
import "../assets/css/useful.css";
import LanguageBar from "../components/HomeComponents/topbar/languagebar";
import NavigationBar from "../components/HomeComponents/topbar/navigationbar";
import { Link } from "react-router-dom";
import HeaderComponent from "../components/footer/headerComponent";

const AboutUs = () => {
  return (
    <>
      <MetaTags>
        <title>About Us | Property Investment</title>
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
            <div className="elementor elementor elementor-1002" id="1002"></div>
          </div>
        </div>
        <HeaderComponent />
      </div>
    </>
  );
};

export default AboutUs;
