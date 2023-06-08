import { Link } from "react-router-dom";

const Quicklinks = () => {

    return (
      <section
        className="elementor-section elementor-top-section elementor-element elementor-element-63b9395bef57b elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default w-[440px] left-0"
      >
        <div className="elementor-container elementor-column-gap-default">
          <div
            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d0b15c3"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-8e5b81d elementor-widget elementor-widget-ube-post-metro"
                data-id="8e5b81d"
                data-element_type="widget"
                data-widget_type="ube-post-metro.default"
              >
                <div className="elementor-widget-container">
                  <div
                    id="ube-post-list-8e5b81d"
                    className="ube-posts ube-posts-metro ube-list-grid ube-post-appender"
                  >
                    <div
                      className="ube-grid-item"
                    >
                      <article className="card ube-post-item ube-post-metro-layout-03">
                        <div className="card-body">
                          <Link
                            className="ube-entry-post-thumb card-img bg-card"
                            to="/residence-permit-permanent-residence-citizenship/"
                       
                          ></Link>
                          <div className="card-img-overlay">
                            <div className="ube-post-terms">
                              <div className="item category">
                                <ul className="ube-term-list list-inline">
                                  <li className="list-inline-item">
                                    <Link to="/category/useful-information/">
                                      Useful Information
                                    </Link>
                                  </li>
                                </ul>{" "}
                              </div>
                            </div>
                            <header className="ube-entry-header">
                              <h2 className="ube-entry-title card-title">
                                <Link
                                  className="ube-post-link"
                                  to="/residence-permit-permanent-residence-citizenship/"
                                  title="RESIDENCE PERMIT, PERMANENT RESIDENCE, CITIZENSHIP"
                                >
                                  RESIDENCE PERMIT, PERMANENT RESIDENCE,
                                  CITIZENSHIP{" "}
                                </Link>
                              </h2>
                            </header>
                          </div>
                        </div>
                      </article>
                    </div>

                    <div
                      className="ube-grid-item"
                    >
                      <article className="card ube-post-item ube-post-metro-layout-03">
                        <div className="card-body">
                          <Link
                            className="ube-entry-post-thumb card-img bg-card"
                            to="/investments/"
                          ></Link>
                          <div className="card-img-overlay">
                            <div className="ube-post-terms">
                              <div className="item category">
                                <ul className="ube-term-list list-inline">
                                  <li className="list-inline-item">
                                    <Link to="/category/useful-information/">
                                      Useful Information
                                    </Link>
                                  </li>
                                </ul>{" "}
                              </div>
                            </div>
                            <header className="ube-entry-header">
                              <h2 className="ube-entry-title card-title">
                                <Link
                                  className="ube-post-link"
                                  to="/investments/"
                                  title="INVESTMENTS"
                                >
                                  INVESTMENTS{" "}
                                </Link>
                              </h2>
                            </header>
                          </div>
                        </div>
                      </article>
                    </div>

                    <div
                      className="ube-grid-item"
                    >
                      <article className="card ube-post-item ube-post-metro-layout-03">
                        <div className="card-body">
                          <Link
                            className="ube-entry-post-thumb card-img bg-card"
                            to="/inspection-tour/"
                          ></Link>
                          <div className="card-img-overlay">
                            <div className="ube-post-terms">
                              <div className="item category">
                                <ul className="ube-term-list list-inline">
                                  <li className="list-inline-item">
                                    <Link to="/category/useful-information/">
                                      Useful Information
                                    </Link>
                                  </li>
                                </ul>{" "}
                              </div>
                            </div>
                            <header className="ube-entry-header">
                              <h2 className="ube-entry-title card-title">
                                <Link
                                  className="ube-post-link"
                                  to="/inspection-tour/"
                                  title="INSPECTION TOUR"
                                >
                                  INSPECTION TOUR{" "}
                                </Link>
                              </h2>
                            </header>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>

                  <div className="ube-post-list-paging "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

}

export default Quicklinks;