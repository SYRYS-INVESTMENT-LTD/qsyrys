import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const OurAgents = () => {
  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-62b6f81b8f8d5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="62b6f81b8f8d5"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-db9ca7f"
          data-id="db9ca7f"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-e248b99 elementor-align-center elementor-widget elementor-widget-ube-heading"
              data-id="e248b99"
              data-element_type="widget"
              data-widget_type="ube-heading.default"
            >
              <div className="elementor-widget-container">
                <div className="ube-heading ube-heading-divider-after">
                  <h6 className="ube-heading-sub-title">
                    <span className="icon icon-center"></span>WE HAVE
                    PROFESSIONAL AGENTS
                  </h6>
                  <h2 className="ube-heading-title">MEET OUR AGENTS</h2>
                  <div className="ube-heading-divider"></div>
                </div>{" "}
              </div>
            </div>
            <div
              className="elementor-element elementor-element-58c195b elementor-widget elementor-widget-beyot-agents"
              data-id="58c195b"
              data-element_type="widget"
              data-widget_type="beyot-agents.default"
            >
              <div className="elementor-widget-container">
                <div className="ube-agents">
                  <div className="ere-agent-wrap py-3">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={4}
                      pagination={{ clickable: true }}
                      loop={true}
                      breakpoints={{
                        992: {
                          slidesPerView: 3,
                        },
                        480: {
                          slidesPerView: 2,
                        },
                      }}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      modules={[Autoplay]}
                      data-callback="owl_callback"
                      className="ere-agent agent-slider owl-carousel manual owl-nav-center owl-loaded owl-drag"
                    >
                      <SwiperSlide className="item">
                        <div className="agent-item ">
                          <div className="agent-item-inner">
                            <div className="agent-avatar">
                              <a
                                title="Andrei Makeev"
                                href="https://www.qsyrys.com/agent/andrei-makeev/"
                              >
                                <div className="overflow-hidden h-[340px]">
                                  <img
                                    width="270"
                                    height="340"
                                    src="https://www.qsyrys.com/wp-content/uploads/2017/01/SYRYS-AGENT-C1-270x340.png"
                                    alt="Andrei Makeev"
                                    title="Andrei Makeev"
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="agent-content">
                              <div className="agent-info">
                                <h2 className="agent-name">
                                  <a
                                    title="Andrei Makeev"
                                    href="https://www.qsyrys.com/agent/andrei-makeev/"
                                  >
                                    Andrei Makeev
                                  </a>
                                </h2>
                              </div>
                              <div className="agent-social">
                                <a
                                  title="Facebook"
                                  href="https://www.facebook.com/realsyrys"
                                >
                                  <i className="fa fa-facebook"></i>
                                </a>
                                <a
                                  title="Email"
                                  href="mailto:andrey@qsyrys.com"
                                >
                                  <i className="fa fa-envelope"></i>
                                </a>
                                <a
                                  title="Linkedin"
                                  href="https://www.linkedin.com/company/syrysinvestment"
                                >
                                  <i className="fa fa-linkedin"></i>
                                </a>
                                <a
                                  title="Instagram"
                                  href="https://www.instagram.com/qsyrys_ru/"
                                >
                                  <i className="fa fa-instagram"></i>
                                </a>
                                <a
                                  title="Youtube"
                                  href="https://www.youtube.com/@real_syrys"
                                >
                                  <i className="fa fa-youtube-play"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide className="item">
                        <div className="agent-item ">
                          <div className="agent-item-inner">
                            <div className="agent-avatar">
                              <a
                                title="Temile Emmanuel"
                                href="https://www.qsyrys.com/agent/temile-emmanuel/"
                              >
                                <div className="overflow-hidden h-[340px]">
                                  <img
                                    width="270"
                                    height="340"
                                    src="https://www.qsyrys.com/wp-content/uploads/2017/01/Untitled-1-copy-270x340.png"
                                    alt="Temile Emmanuel"
                                    title="Temile Emmanuel"
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="agent-content">
                              <div className="agent-info">
                                <h2 className="agent-name">
                                  <a
                                    title="Temile Emmanuel"
                                    href="https://www.qsyrys.com/agent/temile-emmanuel/"
                                  >
                                    Temile Emmanuel
                                  </a>
                                </h2>
                              </div>
                              <div className="agent-social">
                                <a
                                  title="Facebook"
                                  href="https://www.facebook.com/realsyrys"
                                >
                                  <i className="fa fa-facebook"></i>
                                </a>
                                <a
                                  title="Email"
                                  href="mailto:emmanuel@qsyrys.com"
                                >
                                  <i className="fa fa-envelope"></i>
                                </a>
                                <a
                                  title="Linkedin"
                                  href="https://www.linkedin.com/company/syrysinvestment"
                                >
                                  <i className="fa fa-linkedin"></i>
                                </a>
                                <a
                                  title="Instagram"
                                  href="https://www.instagram.com/real_syrys/"
                                >
                                  <i className="fa fa-instagram"></i>
                                </a>
                                <a
                                  title="Youtube"
                                  href="https://www.youtube.com/@real_syrys"
                                >
                                  <i className="fa fa-youtube-play"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="item active">
                        <div className="agent-item ">
                          <div className="agent-item-inner">
                            <div className="agent-avatar">
                              <a
                                title="Bandar Zuhair Ali Asiri"
                                href="https://www.qsyrys.com/agent/bandar-zuhair-ali-asiri/"
                              >
                                <div className="overflow-hidden h-[340px]">
                                  <img
                                    width="270"
                                    height="340"
                                    src="https://www.qsyrys.com/wp-content/uploads/2022/12/agent-scaled.jpg"
                                    alt="Bandar Zuhair Ali Asiri"
                                    title="Bandar Zuhair Ali Asiri"
                                  />
                                </div>
                              </a>
                            </div>
                            <div className="agent-content">
                              <div className="agent-info">
                                <h2 className="agent-name">
                                  <a
                                    title="Bandar Zuhair Ali Asiri"
                                    href="https://www.qsyrys.com/agent/bandar-zuhair-ali-asiri/"
                                  >
                                    Bandar Zuhair Ali Asiri
                                  </a>
                                </h2>
                              </div>
                              <div className="agent-social">
                                <a
                                  title="Facebook"
                                  href="https://www.facebook.com/realsyrys"
                                >
                                  <i className="fa fa-facebook"></i>
                                </a>
                                <a
                                  title="Email"
                                  href="mailto:bandar.z@qsyrys.com"
                                >
                                  <i className="fa fa-envelope"></i>
                                </a>
                                <a
                                  title="Linkedin"
                                  href="https://www.linkedin.com/company/syrysinvestment"
                                >
                                  <i className="fa fa-linkedin"></i>
                                </a>
                                <a
                                  title="Instagram"
                                  href="https://www.instagram.com/qsyrys_ar/"
                                >
                                  <i className="fa fa-instagram"></i>
                                </a>
                                <a
                                  title="Youtube"
                                  href="https://www.youtube.com/@real_syrys"
                                >
                                  <i className="fa fa-youtube-play"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    {/* up */}
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurAgents;
