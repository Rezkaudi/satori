

// data
import Blogs from '../../db/db.json'

// styles
import Styles from './blogs.module.css'

// components
import BlogCard from '@/components/BlogCard/BlogCard'


const AllBlogs = () => {
  return (
    <main className={Styles.allBlogs}>
      <div className={Styles.title}>All Blogs</div>
      <div className={`container ${Styles.container}`}>
        {Blogs.reverse().map(blog =>
          <BlogCard key={blog.id} Blog={blog} />
        )}
      </div>
    </main>
  )
}
export default AllBlogs