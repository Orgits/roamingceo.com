import Link from "next/link";
import React from "react";
import SubscribeForm from "../SubscribeForm"; // Import the form

const Footer = ({ removeClass }) => {
    return (
        <>
            <footer className="pt-50 pb-20 bg-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="sidebar-widget wow fadeInUp animated mb-30">
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">About me</h5>
                                </div>
                                <div className="textwidget">
                                    <p>
                                   <b>RoamingCEO.com </b> is a premier business networking and investment platform for CEOs, entrepreneurs, and investors. 🚀
                                    </p>
                                    <p>
                                        <strong className="color-black">
                                            Address
                                        </strong>
                                        <br />
                                        Orgits Business Solutions Pvt. Ltd. 
                                        <br />
                                        New Delhi, India
                                    </p>
                                    <p>
                                        <strong className="color-black">
                                            Follow me
                                        </strong>
                                    </p>
                                    <br />
                                    <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                                        <li className="list-inline-item">
                                            <Link href="/#">
                                                <a
                                                    className="fb"
                                                    target="_blank"
                                                    title="Facebook"
                                                >
                                                    <i className="elegant-icon social_facebook"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link href="/#">
                                                <a
                                                    className="tw"
                                                    target="_blank"
                                                    title="Tweet now"
                                                >
                                                    <i className="elegant-icon social_twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link href="/#">
                                                <a
                                                    className="pt"
                                                    target="_blank"
                                                    title="Pin it"
                                                >
                                                    <i className="elegant-icon social_pinterest"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div
                                className="sidebar-widget widget_categories wow fadeInUp animated mb-30"
                                data-wow-delay="0.1s"
                            >
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Quick link</h5>
                                </div>
                                <ul className="font-small">
                                    <li className="cat-item cat-item-2">
                                        <Link href="/#">
                                            <a>CEO & Business Index</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-4">
                                        <Link href="/#">
                                            <a>Community & Masterminds</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-5">
                                        <Link href="/#">
                                            <a>​Investor-Startup Hub</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-6">
                                        <Link href="/#">
                                            <a>Insights & Media</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-7">
                                        <Link href="/#">
                                            <a>Events & Summits</a>
                                        </Link>
                                    </li>
                                    <li className="cat-item cat-item-7">
                                        <Link href="/#">
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30"
                                data-wow-delay="0.2s"
                            >
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Tagcloud</h5>
                                </div>
                                <div className="tagcloud mt-50">
                                    <Link href="/category">
                                        <a
                                            className="tag-cloud-link"
                                        >
                                            Leadership & CEO Insights
                                        </a>
                                    </Link>
                                    <Link href="/category">
                                        <a
                                            className="tag-cloud-link"
                                        >
                                            Startups & Entrepreneurship
                                        </a>
                                    </Link>
                                    <Link href="/category">
                                        <a
                                            className="tag-cloud-link"
                                        >
                                            Investment & Funding
                                        </a>
                                    </Link>
                                    <Link href="/category">
                                        <a
                                            className="tag-cloud-link"
                                        >
                                           Business Technology & AI
                                        </a>
                                    </Link>
                                    <Link href="/category">
                                        <a
                                            className="tag-cloud-link"
                                        >
                                            Industry Trends & Market Analysis
                                        </a>
                                    </Link>
                                    <Link href="/category">
                                        <a
                                            className="tag-cloud-link"
                                        >
                                            Work-Life Balance & Productivity
                                        </a>
                                    </Link>
                                    <Link href="/category">
                                        <a
                                            className="tag-cloud-link"
                                        >
                                            Work-Life Balance & Productivity
                                        </a>
                                    </Link>
                                    <Link href="/category">
                                        <a
                                            className="tag-cloud-link"
                                        >
                                            Blockchain & Web3 Innovations{" "}
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div
                                className="sidebar-widget widget_newsletter wow fadeInUp animated mb-30"
                                data-wow-delay="0.3s"
                            >
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Newsletter</h5>
                                </div>
                                <div className="newsletter">
                                    <p className="font-medium">
                                    Stay ahead with RoamingCEO! 🚀 Subscribe to our newsletter for exclusive business insights, industry trends, and the latest updates—delivered straight to your inbox. 📩
                                    </p>
                                    
                                    <SubscribeForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
                        <p className="float-md-left font-small text-muted">
                            © 2025, RoamingCEO{" "}
                        </p>
                        <p className="float-md-right font-small text-muted">
                            Design by{" "}
                            <Link href="https://orgits.in">
                                <a target="_blank">
                                    Orgits
                                </a>
                            </Link>{" "}
                            | All rights reserved
                        </p>
                    </div>
                </div>
            </footer>

            <div className="dark-mark" onClick={removeClass}></div>
        </>
    );
};

export default Footer;
