import Image from 'next/image'

// Styles
import Styles from './WhatIs.module.css'

// components
import { Button } from '@/components/Buttons/Buttons'

// data
import WhatIsData from './data.json'

const WhatIs = () => {
    return (
        <section className={Styles.whatIs}>
            <Button to={WhatIsData.sectionTitleTo} content={WhatIsData.sectionTitle} />
            <div className={Styles.WhatIsDetailes}>
                <div className={`container ${Styles.container}`}>
                    <div className={Styles.whatIsContent}>{WhatIsData.content}</div>
                    <ul className={Styles.services}>
                        {WhatIsData.services.map(item =>
                            <li key={item.id}>
                                <span className={Styles.imageContainer}>
                                    <Image src={item.imageSrc} alt={item.imageAlt} fill={true} />
                                </span>
                                <span>
                                    <h1>{item.content}</h1> 
                                    <Button to={item.buttonTo} content={item.buttonContent} />
                                </span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default WhatIs