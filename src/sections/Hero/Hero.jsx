import Image from 'next/image'

// Styles
import Styles from './Hero.module.css'

// components
import { HeroButton } from '@/components/Buttons/Buttons'

// assets
import HeroImage from '../../../public/images/heroImage.png'


const Hero = () => {
    return (
        <section className={Styles.hero}>
            <div className={`container ${Styles.container}`}>

                <div className={Styles.heroLeft}>
                    <h1>Marketing automation to increase potential customers "SATORI"</h1>
                    <div className={Styles.heroButtons}>
                        <HeroButton to={'/'} content={"Seminar application"} />
                        <HeroButton to={'/'} content={'Document request'} />
                    </div>
                </div>

                <div className={Styles.heroRight}>
                    <div className={Styles.imageContainer}>
                        <Image src={HeroImage} alt="hero image" fill={true} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero