import Image from 'next/image'

// components
import FeatureTitle from '../FeatureTitle/FeatureTitle'

// styles
import Styles from './FeatureCard.module.css'

const FeatureCard = ({ cardData ,sectionName}) => {
    return (
        <div className={Styles.featureCard}>
            <div className={Styles.left}>
                <FeatureTitle sectionName={sectionName} id={cardData.id} content={cardData.title} />
                <p>{cardData.content}</p>
            </div>
            <div className={Styles.right}>
                <div className={Styles.imageContainer}>
                    <Image src={`/images/${cardData.imageName}`} alt={cardData.imageAlt} fill={true} />
                </div>
            </div>

        </div>
    )
}

export default FeatureCard