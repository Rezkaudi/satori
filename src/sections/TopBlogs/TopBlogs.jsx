
// data
import BlogsData from '../../db/db.json'
import data from './data.json'

// styles
import Styles from './TopBlogs.module.css'

// components
import BlogCard from '@/components/BlogCard/BlogCard'
import { Button } from '@/components/Buttons/Buttons'


const TopBlogs = () => {
    return (
        <div className={Styles.topBlogs}>
            <div className={Styles.topBlogsTitle}>{data.sectionTitle}</div>
            <div className={`container ${Styles.container}`}>
                {BlogsData.slice(-3).reverse().map(item =>
                    <BlogCard key={item.id} Blog={item} />
                )}
            </div>
            <Button content={"All Blogs"} to={'/blogs'} />
        </div>
    )
}

export default TopBlogs