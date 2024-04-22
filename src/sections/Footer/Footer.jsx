import Link from 'next/link'

// Styles
import Styles from './Footer.module.css'

// asstes
import LogoImage from '../../../public/images/logo.svg'

// components
import Logo from '@/components/Logo/Logo'
import FooterLinksGroup from '@/components/FooterLinksGroup/FooterLinksGroup'

// data
import FooterData from './data.json'


const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footerTob}>
                <div className={`container ${Styles.container}`}>
                    <ul className={Styles.links}>
                        <li>
                            <ul className={Styles.mainLinks}>
                                {FooterData.mainLinks.map(item =>
                                    <li key={item.id}>
                                        <Link href={item.to}>{item.content}</Link>
                                    </li>
                                )}
                            </ul>
                        </li>
                        <li>
                            <FooterLinksGroup data={FooterData.subLinks[0]} />
                            <FooterLinksGroup data={FooterData.subLinks[4]} />
                        </li>
                        <li>
                            <FooterLinksGroup data={FooterData.subLinks[1]} />
                            <FooterLinksGroup data={FooterData.subLinks[5]} />
                        </li>
                        <li>
                            <FooterLinksGroup data={FooterData.subLinks[2]} />
                        </li>
                        <li>
                            <FooterLinksGroup data={FooterData.subLinks[3]} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={Styles.footerBottom}>
                <div className={`container ${Styles.Lcontainer}`}>
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
            </div>
        </footer>
    )
}

export default Footer