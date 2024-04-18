
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
                "{FeaturesData.siteName}"
                <span className={Styles.sup}>{FeaturesData.cardData.length}</span>
                {FeaturesData.sectionName}
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