import Link from "next/link";
import Slider from "react-slick";
import { useRef } from "react";

const BottomCarousel = () => {
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="position-relative">
            {/* Left Navigation Button */}
            <button
                className="carousel-button left"
                onClick={() => sliderRef.current.slickPrev()}
            >
                &#9665;
            </button>

            <Slider ref={sliderRef} {...settings} className="carausel-3-columns">
                {/* Slide 1 - Business Strategy */}
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                        <Link href="/business-strategy">
                            <a className="color-white">
                                <img src="/assets/imgs/news/thumb-1.jpg" alt="Business Strategy" />
                            </a>
                        </Link>
                    </div>
                    <div className="post-content media-body">
                        <h6>
                            <Link href="/business-strategy">
                                <a>Business Strategy</a>
                            </Link>
                        </h6>
                        <p className="text-muted font-small">
                            Insights on scaling, growth hacking, and building a competitive edge.
                        </p>
                    </div>
                </div>

                {/* Slide 2 - Leadership & Growth */}
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                        <Link href="/leadership-growth">
                            <a className="color-white">
                                <img src="/assets/imgs/news/thumb-2.jpg" alt="Leadership & Growth" />
                            </a>
                        </Link>
                    </div>
                    <div className="post-content media-body">
                        <h6>
                            <Link href="/leadership-growth">
                                <a>Leadership & Growth</a>
                            </Link>
                        </h6>
                        <p className="text-muted font-small">
                            Learn from top CEOs about leadership, culture, and company scaling.
                        </p>
                    </div>
                </div>

                {/* Slide 3 - Startup Funding */}
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                        <Link href="/startup-funding">
                            <a className="color-white">
                                <img src="/assets/imgs/news/thumb-3.jpg" alt="Startup Funding" />
                            </a>
                        </Link>
                    </div>
                    <div className="post-content media-body">
                        <h6>
                            <Link href="/startup-funding">
                                <a>Startup Funding</a>
                            </Link>
                        </h6>
                        <p className="text-muted font-small">
                            Explore investor insights, VC funding trends, and fundraising tips.
                        </p>
                    </div>
                </div>

                {/* Slide 4 - Emerging Technologies */}
                <div className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                    <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                        <Link href="/emerging-tech">
                            <a className="color-white">
                                <img src="/assets/imgs/news/thumb-4.jpg" alt="Emerging Technologies" />
                            </a>
                        </Link>
                    </div>
                    <div className="post-content media-body">
                        <h6>
                            <Link href="/emerging-tech">
                                <a>Emerging Technologies</a>
                            </Link>
                        </h6>
                        <p className="text-muted font-small">
                            AI, Blockchain, and Web3 innovations shaping the future of business.
                        </p>
                    </div>
                </div>
            </Slider>

            {/* Right Navigation Button */}
            <button
                className="carousel-button right"
                onClick={() => sliderRef.current.slickNext()}
            >
                &#9655;
            </button>

            {/* Custom Styles */}
            <style jsx>{`
                .carousel-button {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background-color: rgba(0, 0, 0, 0.6);
                    color: white;
                    border: none;
                    cursor: pointer;
                    padding: 10px;
                    border-radius: 50%;
                    z-index: 10;
                }
                .carousel-button.left {
                    left: -30px;
                }
                .carousel-button.right {
                    right: -30px;
                }
                .carousel-button:hover {
                    background-color: rgba(0, 0, 0, 0.8);
                }
            `}</style>
        </div>
    );
};

export default BottomCarousel;