import Layout from "./../components/layout/layout";
function Contact() {
    return (
        <>
            <Layout>
                <main className="bg-grey pb-30">
                    <div
                        className="entry-header entry-header-style-2 pb-80 pt-80 mb-50 text-white"
                        style={{ "backgroundImage": "url(assets/imgs/news/news-17.jpg)" }}
                    >
                        <div className="container entry-header-content">
                            <h1 className="entry-title mb-50 font-weight-900">
                                Get in Touch
                            </h1>
                        </div>
                    </div>
                    <div className="container single-content">
                        <div className="entry-wraper mt-50">
                            <p className="font-large">
                                We are Orgits , a creative and dedicated
                                group of individuals who love web development
                                almost as much as we love our customers. We are
                                passionate team with the mission for achieving
                                the perfection in web design. All designs are
                                made by love with pixel perfect design and
                                excellent coding quality. Speed, security and
                                SEO friendly alway in our mind.
                            </p>
                            <hr className="wp-block-separator is-style-wide" />
                            <p>
                                <span className="mr-5">
                                    <ion-icon
                                        name="location-outline"
                                        role="img"
                                        className="md hydrated"
                                        aria-label="location outline"
                                    ></ion-icon>
                                </span>
                                <strong>Address</strong>: Lorem 142 Str., 2352,
                                Ipsum, State, USA
                            </p>
                            <p>
                                <span className="mr-5">
                                    <ion-icon
                                        name="home-outline"
                                        role="img"
                                        className="md hydrated"
                                        aria-label="home outline"
                                    ></ion-icon>
                                </span>
                                <strong>Our website</strong>:{" "}
                                <a href="https://orgits.in">
                                    https://orgits.in
                                </a>
                            </p>
                            <p>
                                <span className="mr-5">
                                    <ion-icon
                                        name="planet-outline"
                                        role="img"
                                        className="md hydrated"
                                        aria-label="planet outline"
                                    ></ion-icon>
                                </span>
                                <strong>Support center</strong>:{" "}
                                <a href="https://Orgits.ticksy.com">
                                    https://Orgits.ticksy.com
                                </a>
                            </p>
                            <h3 className="mt-30">Advertise</h3>
                            <hr className="wp-block-separator is-style-wide" />
                            <p>
                                Please contact us directly at ads@ultranews.com.
                                For large or unique campaigns please email
                                sale@ultranews.com for requests-for-proposal and
                                additional pricing information.{" "}
                            </p>
                            <h1 className="mt-30">Get in touch</h1>
                            <hr className="wp-block-separator is-style-wide" />
                            <form
                                className="form-contact comment_form"
                                action="#"
                                id="commentForm"
                            >
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                name="name"
                                                id="name"
                                                type="text"
                                                placeholder="Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                name="email"
                                                id="email"
                                                type="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input
                                                className="form-control"
                                                name="website"
                                                id="website"
                                                type="text"
                                                placeholder="Phone"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <textarea
                                                className="form-control w-100"
                                                name="comment"
                                                id="comment"
                                                cols="30"
                                                rows="9"
                                                placeholder="Message"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="button button-contactForm"
                                    >
                                        Send message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!--container--> */}
                </main>
            </Layout>
        </>
    );
}
export default Contact;
