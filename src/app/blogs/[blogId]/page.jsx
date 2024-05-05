import Image from 'next/image'

// data
import Blogs from '../../../db/db.json'

// styles
import Styles from './blogPage.module.css'


// ststic routes
export const generateStaticParams = () => {
    return Blogs.map((blog) => ({
        blogId: blog.id.toString(),
    }))
}

export const getStaticPaths = () => {
    // Generate paths for all blogs
    const paths = Blogs.map((blog) => ({
        params: { blogId: blog.id.toString() },
    }));

    return { paths, fallback: false };
}

const BlogPage = ({ params }) => {
    const blog = Blogs.find((blog) => blog.id.toString() === params.blogId);
    return (
        <div className={Styles.BlogPage}>
            <div className={`container ${Styles.container}`}>
                <div className={Styles.topContainer}>
                    <div className={Styles.category}>{blog.category}</div>
                    <div className={Styles.date}>{blog.date}</div>
                </div>
                <h2 className={Styles.title}>{blog.title}</h2>
                <div className={Styles.imageContainer}>
                    <Image src={`/blogImages/${blog.imageName}`} alt={blog.imageAlt} fill={true} />
                </div>
                <div className={Styles.descriptionContainer}>
                    <p className={Styles.description}>{blog.description}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPage;