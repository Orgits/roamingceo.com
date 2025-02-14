import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import data from "../../data/post.json";
import comments from "../../data/comments.json";

const SingleVendor = () => {
    const router = useRouter();
    const { id } = router.query;
    const [singleData, setSingleData] = useState(null);

    useEffect(() => {
        if (id) {
            const foundPost = data.find((post) => post.id == id);
            console.log("Found Post:", foundPost);
            setSingleData(foundPost);
        }
    }, [id]);

    if (!singleData) {
        return (
            <Layout>
                <div className="container text-center py-5">
                    <h2>Loading Post...</h2>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <main className="bg-grey pb-30">
                <div className="container single-content">
                    {/* Header Section */}
                    <div className="entry-header entry-header-style-1 mb-50 pt-50">
                        <h1 className="entry-title mb-50 font-weight-900">{singleData.title}</h1>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="entry-meta font-small color-muted">
                                    <p className="mb-5">
                                        <Link href="/author">
                                            <a className="author-avatar">
                                                <img
                                                    className="img-circle"
                                                    src={`/assets/imgs/authors/author-3.jpg`}
                                                    alt={singleData.author}
                                                />
                                            </a>
                                        </Link>
                                        By <Link href="/author"><a className="font-weight-bold">{singleData.author}</a></Link>
                                    </p>
                                    <span className="mr-10">{singleData.date} {new Date().getFullYear()}</span>
                                    <span className="has-dot">{singleData.readTime} mins read</span>
                                </div>
                            </div>
                            <div className="col-md-6 text-right d-none d-md-inline">
                                <ul className="header-social-network d-inline-block list-inline mr-15">
                                    <li className="list-inline-item text-muted">
                                        <span>Share:</span>
                                    </li>
                                    {["facebook", "twitter", "pinterest"].map((network) => (
                                        <li key={network} className="list-inline-item">
                                            <a className={`social-icon ${network}`} target="_blank" href="#">
                                                <i className={`elegant-icon social_${network}`}></i>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <figure className="image mb-30 text-center">
                        <img
                            className="border-radius-10"
                            src={`/assets/imgs/news/${singleData.img}`}
                            alt={singleData.title}
                        />
                    </figure>

                    {/* Post Content */}
                    <article className="entry-wraper mb-50">
                    <div className="entry-main-content wow fadeIn animated">
    <p>{singleData.desc}</p>

    {singleData.blogdesc
        ? <div dangerouslySetInnerHTML={{ __html: singleData.blogdesc }} />
        : <p>Loading detailed content...</p>
    }

    <hr className="wp-block-separator is-style-dots" />
</div>

                        {/* Subscribe Section */}
                        <div className="border-radius-10 border bg-white mb-30 p-30 wow fadeIn animated">
                            <div className="row justify-content-between">
                                <div className="col-md-5 mb-2 mb-md-0">
                                    <h5 className="font-weight-bold mb-30">Join Our Network</h5>
                                    <p>Subscribe to stay updated with the latest insights from CEOs & entrepreneurs.</p>
                                </div>
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type="email" className="form-control" placeholder="Enter your email" />
                                        </div>
                                        <div className="col-md-12 mt-2">
                                            <button className="btn btn-primary btn-block">Subscribe</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Comments Section */}
                    <div className="comments-area">
                        <div className="widget-header-2 mb-30">
                            <h5>Comments</h5>
                        </div>
                        {comments.map((comment, i) => (
                            <div key={i} className="comment-list wow fadeIn animated">
                                <div className="single-comment d-flex">
                                    <div className="user d-flex">
                                        <div className="thumb">
                                            <img src={`/assets/imgs/authors/${comment.img}`} alt={comment.name} />
                                        </div>
                                        <div className="desc">
                                            <p>{comment.desc}</p>
                                            <div className="d-flex justify-content-between">
                                                <h5>
                                                    <Link href="/#">{comment.name}</Link>
                                                </h5>
                                                <p className="date">{comment.date} at {comment.time}</p>
                                            </div>
                                            <div className="reply-btn">
                                                <Link href="/#">
                                                    <a className="btn-reply">Reply</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Comment Form */}
                    <div className="comment-form wow fadeIn animated">
                        <div className="widget-header-2 mb-30">
                            <h5>Leave a Reply</h5>
                        </div>
                        <form className="form-contact comment_form">
                            <div className="row">
                                <div className="col-12">
                                    <textarea className="form-control w-100" name="comment" placeholder="Write your comment"></textarea>
                                </div>
                                <div className="col-sm-6">
                                    <input className="form-control" name="name" type="text" placeholder="Name" />
                                </div>
                                <div className="col-sm-6">
                                    <input className="form-control" name="email" type="email" placeholder="Email" />
                                </div>
                            </div>
                            <button type="submit" className="btn button-contactForm">Post Comment</button>
                        </form>
                    </div>
                </div>
            </main>
        </Layout>
        
    );

};
export default SingleVendor;