

// Styles
import Styles from './FunctionIntroduction.module.css'

// components
import FunctionCard from '@/components/FunctionCard/FunctionCard'

// data
import FunctionData from './data.json'


const FunctionIntroduction = () => {
    return (
        <div className={Styles.function}>
            <div className={`container ${Styles.container}`}>
                <h1>{FunctionData.sectionTitle}</h1>
                {FunctionData.functionCard.map(item =>
                    <FunctionCard key={item.id} data={item} />
                )}
            </div>
        </div>
    )
}

export default FunctionIntroduction