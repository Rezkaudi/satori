import Link from 'next/link'

// Styles
import Styles from './FooterLinksGroup.module.css'

const FooterLinksGroup = ({ data }) => {
    return (
        <ul className={Styles.footerLinksGroup}>
            {data.isLink ?
                <Link className={Styles.title} href={data.to}>{data.content}</Link> :
                <span>{data.content}</span>
            }
            {data.links.map(item =>
                <li key={item.id}>
                    <Link href={item.to}>{item.content}</Link>
                </li>
            )}
        </ul>
    )
}

export default FooterLinksGroup