import Layout from "./../components/layout/layout";
import ContactForm from "../components/ContactForm";

function About() {
    return (
        <>
            <Layout>
                <main className="bg-grey pb-30">
                    <div className="container single-content">
                        <div className="entry-header entry-header-style-1 mb-50 pt-50 text-center">
                            <h1 className="entry-title mb-20 font-weight-900">
                                About RoamingCEO
                            </h1>
                            <p className="text-muted">
                                <span
                                    className="typewrite d-inline"
                                    data-period="2000"
                                    data-type='[ " Business Leaders. ", " Entrepreneurs. ", " Global Thinkers. " ]'
                                ></span>
                            </p>
                        </div>
                        {/* <!--end single header--> */}
                        <figure className="image mb-30 m-auto text-center border-radius-10">
                            <img
                                className="border-radius-10"
                                src="/assets/imgs/news/news-17.jpg"
                                alt="RoamingCEO Community"
                            />
                        </figure>
                        {/* <!--figure--> */}
                        <article className="entry-wraper">
                            <p className="font-large">
                                Welcome to <strong>RoamingCEO</strong>—a dynamic platform where
                                business leaders, entrepreneurs, and innovators come together to connect,
                                share insights, and explore the ever-evolving world of business, technology, and marketing.  
                                Whether you're a CEO, a startup founder, or an ambitious professional,  
                                RoamingCEO empowers you with cutting-edge industry insights, networking opportunities,  
                                and exclusive access to global business trends.
                            </p>
                            <hr className="wp-block-separator is-style-wide" />
                            
                            <h3 className="mt-30">Our Vision</h3>
                            <p>
                                RoamingCEO was created to bridge the gap between business intelligence,  
                                networking, and thought leadership. We provide a space for professionals  
                                to gain actionable insights, explore investment opportunities, and engage  
                                in high-level discussions about the future of business and technology.
                            </p>

                            <h3 className="mt-30">What We Offer</h3>
                            <ul>
                                <li>🚀 <strong>Business & Tech Insights</strong> – Stay updated with expert analysis on AI, automation, blockchain, and global market trends.</li>
                                <li>🤝 <strong>Community & Masterminds</strong> – Join exclusive discussions with CEOs, entrepreneurs, and investors.</li>
                                <li>💰 <strong>Investor-Startup Hub</strong> – Connect with venture capitalists, angel investors, and high-growth startups.</li>
                                <li>🎤 <strong>Events & Summits</strong> – Attend global business summits, networking events, and leadership conferences.</li>
                                <li>📊 <strong>CEO Index & Business Directory</strong> – Discover and connect with business leaders worldwide.</li>
                            </ul>

                            <h3 className="mt-30">Join the Movement</h3>
                            <p>
                                Whether you're looking for investment opportunities, growth strategies,  
                                or a place to share your expertise, RoamingCEO is your gateway to a world of possibilities.  
                                Visit <a href="https://roamingceo.com">RoamingCEO.com</a> and become part of a thriving  
                                business community that’s shaping the future.
                            </p>

                            <hr className="wp-block-separator is-style-wide" />

                            <h3 className="mt-30">Get in Touch</h3>
                            <p>
                                Have questions or collaboration ideas? We’d love to hear from you!
                            </p>

                            <p>
                                <span className="mr-5">
                                    <ion-icon name="location-outline" role="img" className="md hydrated"></ion-icon>
                                </span>
                                <strong>Headquarters</strong>: New Delhi, India | Global Network  
                            </p>
                            <p>
                                <span className="mr-5">
                                    <ion-icon name="home-outline" role="img" className="md hydrated"></ion-icon>
                                </span>
                                <strong>Website</strong>: <a href="https://roamingceo.com">https://roamingceo.com</a>
                            </p>
                            <p>
                                <span className="mr-5">
                                    <ion-icon name="mail-outline" role="img" className="md hydrated"></ion-icon>
                                </span>
                                <strong>Contact</strong>: <a href="mailto:support@orgits.in">support@orgits.in</a>
                            </p>

                            <h3 className="mt-30">Advertise & Partnerships</h3>
                            <hr className="wp-block-separator is-style-wide" />
                            <p>
                                Interested in reaching a high-impact audience of business professionals and CEOs?  
                                Contact us at <a href="mailto:info@orgits.in">info@orgits.in</a> for advertising  
                                opportunities or partnership inquiries.
                            </p>

                            <h1 className="mt-30">Connect With Us</h1>
                            <hr className="wp-block-separator is-style-wide" />
                            <ContactForm/>
                        </article>
                    </div>
                </main>
            </Layout>
        </>
    );
}

export default About;