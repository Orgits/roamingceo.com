import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import data from "../../data/post.json";

// ✅ Ensure PerfectScrollbar runs only on the client-side
const PerfectScrollbar = dynamic(() => import("react-perfect-scrollbar"), {
  ssr: false,
});

const Sidebar = ({ removeClass }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <aside id="sidebar-wrapper" className="custom-scrollbar offcanvas-sidebar">
        {loaded ? (
          <PerfectScrollbar>
            <button className="off-canvas-close" onClick={removeClass}>
              <i className="elegant-icon icon_close"></i>
            </button>
            <div className="sidebar-inner">
              {/* <!--Categories--> */}
              <div className="sidebar-widget widget_categories mb-50 mt-30">
                <div className="widget-header-2 position-relative">
                  <h5 className="mt-5 mb-15">Hot topics</h5>
                </div>
                <div className="widget_nav_menu">
                  <ul>
                    {[
                      { name: "Travel tips", count: 30, link: "/category" },
                      { name: "Book review", count: 25, link: "/category-grid" },
                      { name: "Hotel review", count: 16, link: "/category-list" },
                      { name: "Destinations", count: 22, link: "/category-masonry" },
                      { name: "Lifestyle", count: 25, link: "/category-big" },
                    ].map((category, i) => (
                      <li key={i} className={`cat-item cat-item-${i + 2}`}>
                        <Link href={category.link}>{category.name}</Link>
                        <span className="post-count">{category.count}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* <!--Latest--> */}
              <div className="sidebar-widget widget-latest-posts mb-50">
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Don't miss</h5>
                </div>
                <div className="post-block-list post-module-1 post-module-5">
                  <ul className="list-post">
                    {data.slice(1, 4).map((item, i) => (
                      <li key={item.id} className="mb-30">
                        <div className="d-flex hover-up-2 transition-normal">
                          <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <Link href={`/blog/${item.id}`}>
                              <img
                                src={`/assets/imgs/news/${item.img}`}
                                alt={item.title}
                                onError={(e) => (e.target.src = "/images/default-placeholder.png")}
                              />
                            </Link>
                          </div>
                          <div className="post-content media-body">
                            <h6 className="post-title mb-15 text-limit-2-row font-medium">
                              <Link href={`/blog/${item.id}`}>{item.title}</Link>
                            </h6>
                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                              <span className="post-on">{item.date}</span>
                              <span className="post-by has-dot">{item.views} views</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* <!--Ads--> */}
              <div className="sidebar-widget widget-ads">
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Advertise here</h5>
                </div>
                <Link href="https://themeforest.net/user/Orgits/portfolio" target="_blank">
                  <img className="advertise-img border-radius-5" src="/assets/imgs/ads/ads-1.jpg" alt="Advertisement" />
                </Link>
              </div>
            </div>
          </PerfectScrollbar>
        ) : (
          <p>Loading sidebar...</p>
        )}
      </aside>
    </>
  );
};

export default Sidebar;