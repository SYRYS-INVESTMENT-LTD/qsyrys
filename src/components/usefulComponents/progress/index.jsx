import { useEffect } from "react";

const UsefullProgress = () => {

    

    useEffect(() => {

        window.addEventListener("load", () => {
          const elems = document.querySelectorAll(".progress-bar-striped");

          elems.forEach((elem) => {
            elem.style.opacity = 1;
            elem.style.color = "#fff";
            elem.style.width = elem.getAttribute("aria-valuenow") + "%";
          });
        });        

    }, [])

    return (
      <>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-d2dc93f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-08cd534"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap"></div>
            </div>
          </div>
        </section>

        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-0f4488f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="0f4488f"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-03ff18b"
              data-id="03ff18b"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-70f2770 elementor-widget elementor-widget-ube-progress"
                  data-id="70f2770"
                  data-element_type="widget"
                  data-widget_type="ube-progress.default"
                >
                  <div className="elementor-widget-container">
                    <div className="ube-progress ube-progress-style-02">
                      <div className="ube-progress-content">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped !transition-all !duration-1000 w-[10%] !opacity-100"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow="10"
                            
                          >
                            <span className="ube-progress-label">Lawyer</span>
                            <span className="ube-progress-value">10%</span>
                          </div>
                        </div>
                      </div>
                      <div className="ube-progress-content">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped !transition-all !duration-[1500ms] w-[20%] !opacity-100"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow="20"
                            // data-settings='{"progress_value":20,"speed":"1500"}'
                            // style="opacity: 1; width: 20%; transition-duration: 1500ms;"
                          >
                            <span className="ube-progress-label">
                              Title Deed Search
                            </span>
                            <span className="ube-progress-value">20%</span>
                          </div>
                        </div>
                      </div>
                      <div className="ube-progress-content">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped !transition-all !duration-[3000ms] w-[30%] !opacity-100"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow="30"
                          >
                            <span className="ube-progress-label">
                              Reservation Deposit
                            </span>
                            <span className="ube-progress-value">30%</span>
                          </div>
                        </div>
                      </div>
                      <div className="ube-progress-content">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped !transition-all !duration-[2500ms] w-[40%] !opacity-100"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow="40"
                          >
                            <span className="ube-progress-label">
                              Contract Of Sales
                            </span>
                            <span className="ube-progress-value">40%</span>
                          </div>
                        </div>
                      </div>
                      <div className="ube-progress-content">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped !transition-all !duration-[3000ms] w-[50%] !opacity-100"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow="50"
                          >
                            <span className="ube-progress-label">
                              Residence Permit
                            </span>
                            <span className="ube-progress-value">50%</span>
                          </div>
                        </div>
                      </div>
                      <div className="ube-progress-content">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped !transition-all !duration-[3500ms] w-[60%] !opacity-100"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow="60"
                          >
                            <span className="ube-progress-label">
                              Buying Permission
                            </span>
                            <span className="ube-progress-value">60%</span>
                          </div>
                        </div>
                      </div>
                      <div className="ube-progress-content">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped !transition-all !duration-[4000ms] w-[70%] !opacity-100"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-valuenow="70"
                          >
                            <span className="ube-progress-label">
                              Title Deed Change
                            </span>
                            <span className="ube-progress-value">70%</span>
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
      </>
    );

}

export default UsefullProgress;