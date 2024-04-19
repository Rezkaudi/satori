
// styles
import Styles from './Features.module.css'

// components
import FeatureCard from '@/components/FeatureCard/FeatureCard'


// data
import FeaturesData from './data.json'

const Features = () => {
    return (
        <section className={Styles.features}>
            <h1 className={Styles.featuresTitle}>
                <span>"{FeaturesData.siteName}"</span>
                <span className={Styles.sup}>{FeaturesData.cardData.length}</span>
                <span>{FeaturesData.sectionName}</span>
            </h1>
            <div className={`container ${Styles.container}`}>
                {FeaturesData.cardData.map(item =>
                    <FeatureCard sectionName={FeaturesData.sectionName} cardData={item} />
                )}
            </div>
        </section>
    )
}

export default Features