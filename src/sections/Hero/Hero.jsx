import Image from 'next/image'

// Styles
import Styles from './Hero.module.css'

// components
import { HeroButton } from '@/components/Buttons/Buttons'

// assets
import HeroImage from '../../../public/images/heroImage.png'

// data
import HeroData from './data.json'

const Hero = () => {
    return (
        <section className={Styles.hero}>
            <div className={`container ${Styles.container}`}>

                <div className={Styles.heroLeft}>
                    <h1>{HeroData.heroContent}</h1>
                    <div className={Styles.heroButtons}>
                        {HeroData.heroButtons.map(item =>
                            <HeroButton key={item.id} to={item.to} content={item.content} />
                        )}
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