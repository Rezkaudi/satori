import Link from 'next/link'
import Image from 'next/image'

// styles
import Styles from './BlogCard.module.css'

const BlogCard = ({ Blog }) => {
    return (
        <Link href={`/blogs/${Blog.id}`} className={Styles.blogContainer}>
            <div className={Styles.imageContainer}>
                <Image src={`/blogImages/${Blog.imageName}`} alt={Blog.imageAlt} fill={true}/>
                <div className={Styles.date}>{Blog.date}</div>
            </div>
            <h2 className={Styles.description}>{Blog.description}</h2>
            <div className={Styles.category}>{Blog.category}</div>
        </Link>
    )
}

export default BlogCard