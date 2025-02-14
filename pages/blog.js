import Link from "next/link";
import data from "../data/post.json";
import Layout from "./../components/layout/layout";


const Blog = () => {
    return (
        <Layout>
        <div className="container py-5">
            <div className="grid-container">
                {data.map((item, i) => (
                    <div className="grid-item" key={i}>
                        <Link href={`/blog/${item.id}`}>
                            <a className="blog-card">
                                <div className="image-wrapper">
                                    <img
                                        className="blog-image"
                                        src={`assets/imgs/news/${item.img}`}
                                        alt={item.title || "Blog Post"}
                                        onError={(e) => (e.target.src = "/images/default-placeholder.png")}
                                    />
                                </div>
                                <h4 className="blog-title">{item.title}</h4>
                                <p>{item.desc}</p>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Styles for responsive grid */}
            <style jsx>{`
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 40px; /* More spacing between cards */
        justify-content: center;
        padding: 30px; /* Padding around the entire grid */
        margin: 0 auto; /* Centers grid on larger screens */
        max-width: 1200px; /* Prevents excessive width */
    }

    .grid-item {
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        padding: 15px; /* Space inside the card */
        margin-bottom: 20px; /* Added spacing below each card */
        min-height: 350px; /* Ensures cards don't shrink */
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .grid-item:hover {
        transform: translateY(-5px);
    }

    .blog-card {
        display: block;
        text-decoration: none;
        color: inherit;
    }

    .image-wrapper {
        width: 100%;
        height: 220px;
        overflow: hidden;
        border-radius: 10px;
    }

    .blog-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }

    .blog-title {
        padding: 20px 15px;
        font-size: 1.2rem;
        font-weight: bold;
        text-align: center;
        color: #333;
        margin-top: 15px;
    }

    @media (max-width: 768px) {
        .grid-container {
            grid-template-columns: 1fr;
            padding: 15px;
        }

        .grid-item {
            margin-bottom: 25px; /* More spacing on mobile */
        }

        .blog-title {
            font-size: 1rem;
        }
    }
`}</style>
        </div>
        </Layout>
    );
};

export default Blog;