import Link from 'next/link'

// Styles
import Styles from './Footer.module.css'

// asstes
import LogoImage from '../../../public/images/logo.svg'

// components
import Logo from '@/components/Logo/Logo'

// data
import FooterData from './data.json'


const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div className={`container ${Styles.container}`}>

                <div className={Styles.footerLeft}>
                    <div className={Styles.policy}>
                        <p>
                            <Link href={FooterData.policy1To}>{FooterData.policy1}</Link>
                        </p>
                        <p>
                            <Link href={FooterData.policy2To}>{FooterData.policy2}</Link>
                        </p>
                    </div>
                    <div className={Styles.copyWrite}>{FooterData.copyWrite}</div>
                </div>

                <div className={Styles.footerRight}>
                    <Logo src={LogoImage} />
                </div>
            </div>
        </footer>
    )
}

export default Footer