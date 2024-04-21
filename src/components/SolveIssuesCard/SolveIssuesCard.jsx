import Image from 'next/image'


// styles
import Styles from './SolveIssuesCard.module.css'

// assets
import checkBoxImage from '../../../public/images/checkBox.svg'


const SolveIssuesCard = ({ title, items }) => {

    return (
        <div className={Styles.solveIssues}>
            <div className={Styles.solveTitle}>{title}</div>
            <ul>
                {items.map(item =>
                    <li key={item.id}>
                        <Image src={checkBoxImage} alt={"checkBox image"} width={25} hight={25} />
                        <span>{item.content}</span>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default SolveIssuesCard