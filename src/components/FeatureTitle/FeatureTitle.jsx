//styles 
import Styles from './FeatureTitle.module.css'

const FeatureTitle = ({ id, sectionName, content }) => {
    return (
        <div className={Styles.featureTitle}>
            <div className={Styles.cardId}>
                <h2>{sectionName}</h2>
                <h3>{id}</h3>
            </div>
            <h1 className={Styles.content}>{content}</h1>
        </div>
    )
}

export default FeatureTitle