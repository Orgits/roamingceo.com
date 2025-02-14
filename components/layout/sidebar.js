import Link from "next/link";
import Image from "next/image";
import PerfectScrollbar from "react-perfect-scrollbar";
import data from "../../data/post.json";

const Sidebar = ({ removeClass }) => {
    return (
        <aside id="sidebar-wrapper" className="custom-scrollbar offcanvas-sidebar">
            <PerfectScrollbar>
                {/* Close Button */}
                <button className="off-canvas-close" onClick={removeClass}>
                    <i className="elegant-icon icon_close"></i>
                </button>

                <div className="sidebar-inner">
                    {/* 🔥 Hot Topics (Categories) */}
                    <div className="sidebar-widget widget_categories mb-50 mt-30">
                        <div className="widget-header-2 position-relative">
                            <h5 className="mt-5 mb-15">Hot Topics</h5>
                        </div>
                        <div className="widget_nav_menu">
                            <ul>
                                {[
                                    { name: "Travel Tips", count: 30, link: "/category" },
                                    { name: "Book Review", count: 25, link: "/category-grid" },
                                    { name: "Hotel Review", count: 16, link: "/category-list" },
                                    { name: "Destinations", count: 22, link: "/category-masonry" },
                                    { name: "Lifestyle", count: 25, link: "/category-big" },
                                ].map((category, index) => (
                                    <li key={index} className="cat-item">
                                        <Link href={category.link}>
                                            <a>{category.name}</a>
                                        </Link>
                                        <span className="post-count">{category.count}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 🔥 Latest Posts */}
                    <div className="sidebar-widget widget-latest-posts mb-50">
                        <div className="widget-header-2 position-relative mb-30">
                            <h5 className="mt-5 mb-30">Don't Miss</h5>
                        </div>
                        <div className="post-block-list post-module-1 post-module-5">
                            <ul className="list-post">
                                {data.slice(0, 3).map((post) => (
                                    <li key={post.id} className="mb-30">
                                        <div className="d-flex hover-up-2 transition-normal">
                                            <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                                <Link href={`/blog/${post.id}`}>
                                                    <a className="color-white">
                                                        <Image
                                                            src={`/assets/imgs/news/${post.img}`}
                                                            alt={post.title}
                                                            width={80}
                                                            height={80}
                                                            className="rounded"
                                                            unoptimized
                                                        />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div className="post-content media-body">
                                                <h6 className="post-title mb-15 text-limit-2-row font-medium">
                                                    <Link href={`/blog/${post.id}`}>
                                                        <a>{post.title}</a>
                                                    </Link>
                                                </h6>
                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                    <span className="post-on">{post.date}</span>
                                                    <span className="post-by has-dot">{post.views} views</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* 🔥 Advertisement Banner */}
                    <div className="sidebar-widget widget-ads">
                        <div className="widget-header-2 position-relative mb-30">
                            <h5 className="mt-5 mb-30">Advertise Here</h5>
                        </div>
                        <Link href="https://themeforest.net/user/alithemes/portfolio">
                            <a target="_blank">
                                <Image
                                    src="/assets/imgs/ads/ads-1.jpg"
                                    alt="Advertise"
                                    width={300}
                                    height={250}
                                    className="border-radius-5"
                                    unoptimized
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </PerfectScrollbar>
        </aside>
    );
};

export default Sidebar;