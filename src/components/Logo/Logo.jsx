import Link from 'next/link'
import Image from 'next/image'

// styles
import Styles from './Logo.module.css'

const Logo = ({src}) => {
    return (
        <div className={Styles.logo}>
            <Link href={'/'}>
                <Image src={src} alt="logo" fill={true} />
            </Link>
        </div>
    )
}

export default Logo