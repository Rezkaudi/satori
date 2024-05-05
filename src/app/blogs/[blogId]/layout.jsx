
// data
import Blogs from '../../../db/db.json'

// metadata
export const generateMetadata = ({ params }) => {

  // fetch data
  const blog = Blogs.find((blog) => blog.id.toString() === params.blogId);


  return {
    title: blog.category,
    description: blog.description,
    keywords: `${blog.title},${blog.description},${blog.category}`
  }
}

const BlogLayout = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
}

export default BlogLayout
