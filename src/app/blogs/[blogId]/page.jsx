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
                My Blog: {blog.id}
            </div>
        </div>
    )
}

export default BlogPage;