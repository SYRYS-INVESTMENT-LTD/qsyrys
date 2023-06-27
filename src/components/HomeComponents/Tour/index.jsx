import '../../../assets/css/tour.css';
import video from '../../../assets/videos/SYRYS-S-ANIM-NO-SOUND.mp4';

const Tour = () => {

    return (
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-6177807 elementor-section-stretched elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle"
        data-element_type="section"
      >
        <div className="elementor-background-overlay"></div>
        <div className="elementor-shape elementor-shape-top" data-negative="false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill"
              opacity="0.33"
              d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"
            ></path>
            <path
              className="elementor-shape-fill"
              opacity="0.66"
              d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"
            ></path>
            <path
              className="elementor-shape-fill"
              d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"
            ></path>
          </svg>{" "}
        </div>
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-663b28e"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-89fa2f1 elementor-widget elementor-widget-heading"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">
                    Find your property and become an owner today
                  </h2>{" "}
                </div>
              </div>
              <div
                className="elementor-element elementor-element-ede4280 elementor-widget__width-auto elementor-widget elementor-widget-html"
                data-element_type="widget"
                data-widget_type="html.default"
              >
                <div className="elementor-widget-container">
                  <div className="app-icon">
                    <div className="icon">
                      <i className="fa fa-plane fs-32"></i>
                    </div>
                    <div className="content">
                      <span className="fs-13">Schdule inpection</span>
                      <h4 className="fs-18">BOOK TODAY</h4>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div
                className="elementor-element elementor-element-df62e77 elementor-widget__width-auto elementor-widget elementor-widget-html"
                data-element_type="widget"
                data-widget_type="html.default"
              >
                <div className="elementor-widget-container">
                  <div className="app-icon">
                    <div className="icon">
                      <i className="fa fa-camera fs-32"></i>
                    </div>
                    <div className="content">
                      <span className="fs-13">3D virtual tour</span>
                      <h4 className="fs-18">BOOK TODAY</h4>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b36e010"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-0fbec2c elementor-widget elementor-widget-video"
                data-element_type="widget"
                data-widget_type="video.default"
              >
                <div className="elementor-widget-container">
                  <div className="e-hosted-video elementor-wrapper elementor-open-inline">
                    <video
                      className="elementor-video"
                      src={video}
                      autoPlay=""
                      loop=""
                      muted="muted"
                      playsInline=""
                      controlsList="nodownload"
                    ></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default Tour;