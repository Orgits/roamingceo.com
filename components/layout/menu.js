import Link from "next/link";
import { useEffect, useLayoutEffect, useState } from "react";
import NavMenu from "./nav";

const Menu = ({ addClass }) => {
    const [scroll, setScroll] = useState(0);
    const [isToggled, setToggled] = useState(false);
    const [size, setSize] = useState(0);

    const toggleTrueFalse = () => setToggled(!isToggled);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    });

    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth]);
        }
        window.addEventListener("resize", updateSize);
    }, []);

    return (
        <>
            <div className={scroll ? "header-sticky sticky-bar" : "header-sticky"}>
                <div className="container align-self-center position-relative">
                    <div className="main-nav float-left">
                        <nav>
                            <ul className="main-menu d-none d-lg-inline font-small">
                                <li>
                                    <Link href="/">
                                        <a> <i className="elegant-icon icon_house_alt mr-5"></i>Home</a>
                                    </Link>
                                </li>
                                <li className="current-item has-mega-menu">
                                    <Link href="#">
                                        <a>Business & Technology</a>
                                    </Link>
                                    <ul className="mega-menu">
                                        <li className="sub-mega-menu sub-mega-menu-width-22">
                                            <Link href="#">
                                                <a>CRM & ERP</a>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Top CRM Solutions</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Enterprise ERP Systems</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Sales & Marketing Automation</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-mega-menu sub-mega-menu-width-22">
                                            <Link href="#">
                                                <a>Blockchain & Web3</a>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Introduction to Web3</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Blockchain in Business</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Crypto & Digital Assets</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-mega-menu sub-mega-menu-width-22">
                                            <Link href="#">
                                                <a>Artificial Intelligence</a>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>AI in Business</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>AI-Powered Analytics</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Machine Learning Insights</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="sub-mega-menu sub-mega-menu-width-22">
                                            <Link href="#">
                                                <a>Startup & Investments</a>
                                            </Link>
                                            <ul>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Venture Capital Insights</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Funding & Angel Investors</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/category-grid">
                                                        <a>Growth Hacking for Startups</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link href="/community">
                                        <a>Community & Masterminds</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/investor-startup">
                                        <a>Investor-Startup Hub</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insights">
                                        <a>Insights & Media</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/events">
                                        <a>Events & Summits</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                            </ul>

                            {/* <div className={size < 991 ? "d-block d-lg-none" : "d-none"}>
                                <button onClick={toggleTrueFalse}>
                                    <span className="menu-icon mr-10">
                                        <span className="menu-icon-inner"></span>
                                    </span>
                                    Main Menu
                                </button>
                                <NavMenu isToggled={isToggled} /> */}
                            {/* </div> */}
                        </nav>
                    </div>
                    <div className="float-right header-tools text-muted font-small">
                        <ul className="header-social-network d-inline-block list-inline mr-15">
                            <li className="list-inline-item">
                                <Link href="/#">
                                    <a className="social-icon fb text-xs-center" target="_blank">
                                        <i className="elegant-icon social_facebook"></i>
                                    </a>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link href="/#">
                                    <a className="social-icon tw text-xs-center" target="_blank">
                                        <i className="elegant-icon social_twitter"></i>
                                    </a>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link href="/#">
                                    <a className="social-icon pt text-xs-center" target="_blank">
                                        <i className="elegant-icon social_pinterest"></i>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <div className="off-canvas-toggle-cover d-inline-block">
                            <div className="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle" onClick={addClass}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </>
    );
};

export default Menu;