import Image from 'next/image'

// components
import SolveIssuesCard from '../SolveIssuesCard/SolveIssuesCard'

// styles
import Styles from './FunctionCard.module.css'


const FunctionCard = ({ data }) => {
    return (
        <div className={Styles.functionCard}>
            <div className={Styles.left}>
                <div className={Styles.title}>
                    <span>{data.id}</span>
                    <span>{data.title}</span>
                </div>
                <div className={Styles.content}>{data.content}</div>
                <SolveIssuesCard title={data.solveIssuesTitle} items={data.solveIssuesCard}/>
            </div>

            <div className={Styles.right}>
                <div className={Styles.imageContainer}>
                    <Image src={`/images/${data.imageName}`} alt={data.imageAlt} fill={true} />
                </div>
            </div>
        </div>
    )
}

export default FunctionCard
